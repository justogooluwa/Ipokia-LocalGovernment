import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Finacial.css"

const PayheadBreakdown = () => {
  const [payheads, setPayheads] = useState([]);
  const [total, setTotal] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const fetchPayheads = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/payheads", {
        params: { fromDate, toDate }
      });
      setPayheads(res.data);
      const totalAmount = res.data.reduce((sum, item) => sum + parseFloat(item.amount), 0);
      setTotal(totalAmount);
    } catch (err) {
      console.error("Error fetching payhead data", err);
    }
  };

  useEffect(() => {
    fetchPayheads(); // Initial load
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div className="finacial-report">
      <h2>Financial Report</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>From: </label>
        <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        <label style={{ marginLeft: "1rem" }}>To: </label>
        <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        <button onClick={fetchPayheads} style={{ marginLeft: "1rem" }}>Filter</button>
      </div>

      {payheads.length === 0 ? (
        <p>No Financial Report data found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount (₦)</th>
            </tr>
          </thead>
          <tbody>
            {payheads.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{new Date(item.createdAt).toLocaleString()}</td>
                <td>#{Number(item.amount).toLocaleString()}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2" style={{ fontWeight: "bold" }}>Total</td>
              <td></td>
              <td style={{ fontWeight: "bold" }}>₦{total.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
};

export default PayheadBreakdown;
