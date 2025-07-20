import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import "./Form.css";

const IpoForm = () => {
  const email = localStorage.getItem("email") || "";
const payref = localStorage.getItem("payref") || "";

  const [formData, setFormData] = useState({
    email,
    payref,
    name: "",
    address: "",
    currentaddress: "",
    dob: "",
    fname: "",
    fno: "",
    faddress: "",
    mname: "",
    mno: "",
    maddress: "",
    identification: "",
    applicantno: "",
    signature: "",
    identifiername: "",
    town: "",
    years: "",
    identifierfullname: "",
    rank: "",
  });

  useEffect(() => {
    const remaining = parseInt(localStorage.getItem("remainingCopies"));
    if (isNaN(remaining) || remaining <= 0) {
      alert("❌ You’ve used up all your form submissions.");
      localStorage.clear(); // log them out properly
      window.location.replace("/");
    }
  }, []);
  

  const [photo, setPhoto] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
    setCapturedImage(null);
  };

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setPhoto(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "signature" && typeof value === "object") {
        data.append("signature", value);
      } else {
        data.append(key, value);
      }
    });

    if (capturedImage) {
      const blob = await fetch(capturedImage).then((res) => res.blob());
      data.append("photo", blob, `captured_${Date.now()}.jpg`);
    } else if (photo) {
      data.append("photo", photo);
    }

    try {
      await axios.post("http://localhost:3000/api/form", data);
      alert("Form and photo submitted successfully!");
    
      // ✅ Update remainingCopies
      let remaining = parseInt(localStorage.getItem("remainingCopies")) || 0;
      remaining -= 1;
      localStorage.setItem("remainingCopies", remaining);
    
      if (remaining <= 0) {
        alert("You have used all your form submissions. You will be logged out.");
        localStorage.removeItem("email");
        localStorage.removeItem("payref");
        localStorage.removeItem("remainingCopies");
        window.location.href = "/login";
      } else {
        // Optionally reset form or reload page
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  }    
  return (
    <div className="ipo-form-container">
      <h2>IPOIKIA LOCAL GOVERNMENT</h2>
      <h3>Application Form for Certificate of Origin</h3>

      {/* ✅ Webcam Capture First */}
      <div className="form-group full-width photo-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label>Capture Applicant's Photo with Webcam</label>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          height={240}
          className="webcam-preview"
        />
        <br />
        <button type="button" onClick={capturePhoto}>
          📸 Capture Photo
        </button>

        {capturedImage && (
          <div className="photo-preview">
            <p>Captured Image Preview:</p>
            <img src={capturedImage} alt="Captured" />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="ipo-form-grid">
          {/* ✅ Optional Upload */}
          <div className="form-group full-width photo-section">
            <label>Or Upload Applicant's Photo</label>
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
            {photo && (
              <div className="photo-preview">
                <img src={URL.createObjectURL(photo)} alt="Uploaded" />
              </div>
            )}
          </div>

          
          <div className="form-group">
          <label>Email of Applicant</label>
          <input type="email" value={formData.email} readOnly />
         </div>

          <div className="form-group">
         <label>Payment Reference</label>
          <input type="text" value={formData.payref} readOnly />
          </div>

          <div className="form-group">
            <label>Name of Applicant</label>
            <input name="name" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Home Address</label>
            <input name="address" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Present Address</label>
            <input name="currentaddress" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input name="dob" type="date" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Father's Name</label>
            <input name="fname" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Father's Phone No</label>
            <input name="fno" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Father's Address</label>
            <input name="faddress" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Mother's Name</label>
            <input name="mname" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Mother's Phone No</label>
            <input name="mno" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Mother's Address</label>
            <input name="maddress" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Purpose for Identification</label>
            <input name="identification" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Phone Number of Applicant</label>
            <input name="applicantno" type="text" onChange={handleChange} required/>
          </div>

         


          <div className="form-group full-width">
            <p className="certify">
              I certify that the information provided is correct to the best of my knowledge.
            </p>
          </div>

          {/* ✅ Signature Upload */}
          <div className="form-group full-width">
            <label>Upload Signature of Applicant</label>
            <input
              type="file"
              name="signature"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, signature: e.target.files[0] })
              }
            />
            {formData.signature && typeof formData.signature === "object" && (
              <div className="photo-preview">
                <img
                  src={URL.createObjectURL(formData.signature)}
                  alt="Signature Preview"
                />
              </div>
            )}
          </div>

          <div className="form-group full-width">
            <h4>SECTION II: Identification of Applicant</h4>
          </div>

          <div className="form-group">
            <label>I identify that Miss/Mr/Mrs</label>
            <input name="identifiername" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Town/Village</label>
            <input name="town" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Known for (years)</label>
            <input name="years" type="number" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Full Name of Identifier</label>
            <input name="identifierfullname" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Rank</label>
            <input name="rank" type="text" onChange={handleChange} required/>
          </div>

          <div className="form-group full-width">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IpoForm;
