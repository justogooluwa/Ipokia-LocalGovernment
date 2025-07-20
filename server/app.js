const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const nodemailer = require("nodemailer");
const sequelize = require("./db");
const Payhead = require("./models/payhead");
const User = require("./models/user");
const Form = require("./models/form");
const Rate = require("./models/rate");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// 🧱 Ensure Upload Folders Exist
["uploads/photos", "uploads/signatures"].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 📦 Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "photo") {
      cb(null, "uploads/photos");
    } else if (file.fieldname === "signature") {
      cb(null, "uploads/signatures");
    } else {
      cb(null, "uploads");
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext).replace(/\s+/g, "_");
    const uniqueName = `${Date.now()}_${baseName}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// 📨 Send Email After Payment
app.post("/api/sendmail", async (req, res) => {
  const { email, payref } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lyndseyadam22@gmail.com",
      pass: "ilat nwjr hpei qdxt",
    },
  });

  const mailOptions = {
    from: '"Ipokia LG" <ogooluwaakinleye@gmail.com>',
    to: email,
    subject: "Payment Confirmation",
    html: `
      <h3>Welcome!</h3>
      <p>Your payment was successful.</p>
      <p><strong>Username:</strong> ${email}</p>
      <p><strong>Password:</strong> ${payref}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send({ message: "Email sent" });
  } catch (err) {
    res.status(500).send({ message: "Failed to send email", err });
  }
});


app.post("/api/rate", async (req, res) => {
  const { amount } = req.body;
  try {
    const newRate = await Rate.create({ amount });
    res.status(201).json(newRate);
  } catch (err) {
    res.status(500).json({ error: "Could not save rate", err });
  }
});

app.get("/api/rate", async (req, res) => {
  const rates = await Rate.findAll();
  res.json(rates);
});

// Update rate (no admin check)
app.put("/api/rate/:id", async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    const rate = await Rate.findByPk(id);
    if (!rate) return res.status(404).json({ message: "Rate not found" });

    rate.amount = amount;
    await rate.save();
    res.json(rate);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});

// Delete rate (no admin check)
app.delete("/api/rate/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const rate = await Rate.findByPk(id);
    if (!rate) return res.status(404).json({ message: "Rate not found" });

    await rate.destroy();
    res.json({ message: "Rate deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
});

// 💳 Save Payment with Sequelize
app.post("/api/payment", async (req, res) => {
  const { payref, email, name, amount, copy, paydate, delivery } = req.body;

  try {
    // ❌ Prevent duplicate emails
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already used for payment" });
    }

    // ✅ Save to Payhead
    await Payhead.create({ payref, email, name, amount, copy, paydate, delivery });

    // ✅ Save to User with remainingCopies
    await User.create({ email, payref, remainingCopies: copy });

    res.send({ message: "Payment saved successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error saving payment", error: err });
  }
});



// 📝 Save Form with Sequelize + Submission Limit Check
app.post("/api/form", upload.fields([{ name: "photo" }, { name: "signature" }]), async (req, res) => {
  const {
    email, payref, name, address, currentaddress, dob, fname, fno, faddress,
    mname, mno, maddress, identification, applicantno,
    identifiername, town, years, identifierfullname, rank,
  } = req.body;

  const photo = req.files.photo ? `photos/${req.files.photo[0].filename}` : null;
  const signature = req.files.signature ? `signatures/${req.files.signature[0].filename}` : null;

  try {
    // ✅ Validate User
    const user = await User.findOne({ where: { email, payref } });

    if (!user) {
      return res.status(400).send("Invalid payment reference or email.");
    }

    // ✅ Check remaining form slots
    if (user.remainingCopies <= 0) {
      return res.status(403).send("You’ve used up all your allowed submissions.");
    }

    // ✅ Create Form Entry
    await Form.create({
      email, payref, name, address, currentaddress, dob, fname, fno, faddress,
      mname, mno, maddress, identification, applicantno,
      identifiername, town, years, identifierfullname, rank,
      photo, signature
    });

    // ✅ Deduct one copy
    user.remainingCopies -= 1;
    await user.save();

    res.send("Form, photo, and signature submitted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving form");
  }
});


// 🔐 Login User via email + payref
app.post("/api/login", async (req, res) => {
  const { email, payref } = req.body;

  try {
    const user = await User.findOne({ where: { email, payref } });
    if (!user) return res.status(401).send({ message: "Invalid credentials" });

    res.send({ message: "Login successful", user });
  } catch (err) {
    res.status(500).send({ message: "Login failed", err });
  }
});


// 📄 Get all submitted forms (with optional date range)
app.get("/api/forms", async (req, res) => {
  const { from, to } = req.query;

  try {
    let forms;
    if (from && to) {
      forms = await Form.findAll({
        where: {
          createdAt: {
            [require("sequelize").Op.between]: [`${from} 00:00:00`, `${to} 23:59:59`]
          }
        },
        order: [["createdAt", "DESC"]]
      });
    } else {
      forms = await Form.findAll({ order: [["createdAt", "DESC"]] });
    }

    res.send(forms);
  } catch (err) {
    res.status(500).send("Error fetching forms");
  }
});

// 👇 Add this route in your Express server file
app.get("/api/forms/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findByPk(id);
    if (!form) return res.status(404).json({ message: "Form not found" });
    res.json(form);
  } catch (err) {
    res.status(500).json({ message: "Error fetching form", error: err.message });
  }
});


// 🔁 Start Server
sequelize.sync().then(() => {
  console.log("Database connected and models synced");
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));
});
