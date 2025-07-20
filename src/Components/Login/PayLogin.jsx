import React, { useState } from "react";
import axios from "axios";
import "./PayLogin.css";

const PayLogin = () => {
  const [formData, setFormData] = useState({ email: "", payref: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", formData);
      const { email, payref, remainingCopies } = res.data.user;
  
      if (remainingCopies <= 0) {
        setMessage("You’ve used up all your form submissions.");
        return;
      }
  
      setMessage("Login successful!");
      localStorage.setItem("email", email);
      localStorage.setItem("payref", payref);
      localStorage.setItem("remainingCopies", remainingCopies);
      
      window.location.href = '/certificate';
    } catch (err) {
      setMessage("Invalid email or payment reference.");
    }
  };
  
  return (
    <div className="login-container">
      <h2>User Login</h2>
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
          type="text"
          name="payref"
          placeholder="Enter Payment Reference"
          value={formData.payref}
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
