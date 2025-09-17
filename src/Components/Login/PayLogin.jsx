import React, { useState } from "react";
import axios from "axios";
import "./PayLogin.css";
import IpokiaLogo from "../../assets/logo.jpg"; 

const IpokiaLogin = () => {
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
        const { email, payref, remainingCopies } = res.data.user;
        localStorage.setItem("email", email);
        localStorage.setItem("payref", payref);
        localStorage.setItem("remainingCopies", remainingCopies);
        window.location.href = `/dashboard`;
      } else if (res.data.role === "admin") {
        localStorage.setItem("adminEmail", res.data.email);
        window.location.href = "/admin";
      }
    } catch (err) {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Left branding section */}
      <div className="login-left">
        <img src={IpokiaLogo} alt="Ipokia Logo" className="login-logo" />
        <h1>Ipokia</h1>
        <p>Gateway to Growth and Progress</p>
      </div>

      {/* Right login form */}
      <div className="login-right">
        <h2>Sign in</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password or PayRef"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign In</button>
          {message && <p className="login-msg">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default IpokiaLogin;
