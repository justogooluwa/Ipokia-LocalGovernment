import React, { useState, useEffect } from "react";
import axios from "axios";
import { PaystackButton } from "react-paystack";
import "./Form.css";

const Paymemt = () => {
  const [formData, setFormData] = useState({
   
    
    payref: `IPK${Str_Random(10)}`,
    email: "",
    name: "",
    amount: "",
    copy: "",
    paydate: "",
    delivery: "",
  });

  const publicKey = "pk_test_3b7f00777aea9e33f5be618df0b311493181cab3";

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
  
    if (name === "copy" && formData.rate) {
      // Adding 100 Naira Service Charge to pay Stack
      const total = (parseInt(value || 0) * parseInt(formData.rate))+100;
      updatedData.amount = total.toString();
    }
  
    setFormData(updatedData);
  };
  

  const handleSuccess = async () => {
    try {
      await axios.post("http://localhost:3000/api/payment", formData);
      await axios.post("http://localhost:3000/api/sendmail", {
        email: formData.email,
        payref: formData.payref,
      });
  
      // Redirect only after saving
      const query = new URLSearchParams(formData).toString();
      window.location.href = '/login';
    } catch (err) {
      console.error("Save failed", err);
      alert("Payment succeeded but failed to save data");
    }
  };
  
  const paystackProps = {
    email: formData.email,
    amount: Number(formData.amount) * 100,
    reference: formData.payref,
    publicKey,
    text: "Pay Now",
    onSuccess: handleSuccess,
    onClose: () => alert("Payment closed"),
  };


  function Str_Random(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    // Loop to generate characters for the specified length
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
}

useEffect(() => {
  const fetchRate = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/rate");
      if (res.data.length > 0) {
        const rate = res.data[0].amount;
        setFormData((prev) => ({
          ...prev,
          rate: rate, // store raw rate separately
          amount: "", // total will be calculated later
        }));
      }
    } catch (err) {
      console.error("Failed to fetch rate:", err);
    }
  };

  fetchRate();
}, []);



  return (
    <div className="ipo-form-container">
      <h2>IPOKIA LOCAL GOVERNMENT</h2>
      <h3>Application for Certificate of Origin Step 1</h3>
      <div className="ipo-form-grid">
        <div className="form-group">
          <label>Payment Ref:</label>
          <input name="payref" type="text" value={formData.payref} readOnly required/>
        </div>

        <div className="form-group">
          <label>Applicant Email:</label>
          <input name="email" type="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Applicant Name:</label>
          <input name="name" type="text" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>No of Copies</label>
          <input name="copy" type="number" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Payment Date</label>
          <input name="paydate" type="date" onChange={handleChange} required />
        </div>

        <div className="form-group">
         <label> Total Amount (₦):</label>
         <input name="amount" type="text" value={formData.amount} readOnly />
         </div>


        <div className="form-group">
          <label>Delivery Mode</label>
          <select name="delivery" onChange={handleChange} required>
            <option value="">Select Delivery Mode</option>
            <option value="courier">Courier</option>
            <option value="print">Print On-line</option>
            <option value="physical">Pick Up</option>
          </select>
        </div>

        <div className="form-group full-width">
          <PaystackButton {...paystackProps} className="payButton" />
        </div>
      </div>
    </div>
  );
};

export default Paymemt;
