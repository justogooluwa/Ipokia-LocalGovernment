import React, { useState, useEffect } from "react";
import axios from "axios";

const Rate = () => {
  const [amount, setAmount] = useState("");
  const [rates, setRates] = useState([]);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch all rates on load
  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    const res = await axios.get("http://localhost:3000/api/rate");
    setRates(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:3000/api/rate/${editId}`, { amount });
        setMessage("Rate updated!");
      } else {
        await axios.post("http://localhost:3000/api/rate", { amount });
        setMessage("Rate saved!");
      }
      setAmount("");
      setEditId(null);
      fetchRates();
    } catch (err) {
      setMessage("Error saving rate.");
    }
  };

  const handleEdit = (rate) => {
    setAmount(rate.amount);
    setEditId(rate.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this rate?")) {
      await axios.delete(`http://localhost:3000/api/rate/${id}`);
      setMessage("Rate deleted.");
      fetchRates();
    }
  };

  return (
    <div className="rate-container">
      <h2>{editId ? "Edit Rate" : "Set Rate"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter rate amount"
          required
        />
        <button type="submit">{editId ? "Update" : "Submit"}</button>
      </form>

      {message && <p>{message}</p>}

      <ul>
        {rates.map((rate) => (
          <li key={rate.id}>
            ₦{rate.amount}{" "}
            <button onClick={() => handleEdit(rate)}>Edit</button>
            <button onClick={() => handleDelete(rate.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rate;
