import React, { useState } from "react";
import axios from "axios";


const Test = () => {
  const [test, setTest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/test", { test });
      setMessage("Test saved successfully!");
      setTest("");
    } catch (err) {
      setMessage("Error saving test.");
    }
  };

  return (
    <div className="test-container">
      <h2>Set Test</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={test}
          onChange={(e) => setTest(e.target.value)}
          placeholder="Enter test"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Test;
