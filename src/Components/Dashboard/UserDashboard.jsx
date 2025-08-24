import React from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const payref = localStorage.getItem("payref");

  if (!email || !payref) {
    navigate("/login");
    return null;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🎉 Welcome to Your Dashboard</h2>
      <p>Email: <strong>{email}</strong></p>
      <p>Payment Ref: <strong>{payref}</strong></p>

      <div style={{ marginTop: "2rem" }}>
        <button onClick={() => navigate("/certificate")} style={{ marginRight: "1rem" }}>
          📝 Fill Certificate Form
        </button>

        <button onClick={() => navigate(`/certificates/${payref}`)}>
          🖨️ View / Print Certificate
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;