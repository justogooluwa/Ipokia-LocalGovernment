import React, { useState } from "react";
import axios from "axios";
import "./PayLogin.css";

const PayLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", formData);
  
      if (res.data.role === "user") {
        // destructure properly from res.data.user
        const { email, payref, remainingCopies } = res.data.user;
  
        localStorage.setItem("email", email);
        localStorage.setItem("payref", payref);
        localStorage.setItem("remainingCopies", remainingCopies);
  
        setMessage("Login successful!");
        window.location.href = `/dashboard`; // ✅ user goes to certificate page
      } 
      else if (res.data.role === "admin") {
        localStorage.setItem("adminEmail", res.data.email);
  
        setMessage("Admin login successful!");
        window.location.href = "/admin"; // ✅ admin dashboard
      }
    } catch (err) {
      setMessage("Invalid email or password.");
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password or PayRef"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        {message && <p className="login-msg">{message}</p>}
      </form>
    </div>
  );
};

export default PayLogin;