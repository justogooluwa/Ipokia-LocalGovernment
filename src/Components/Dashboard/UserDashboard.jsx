import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const payref = localStorage.getItem("payref");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("payref");
    window.location.href = "/login"; 
  };

  useEffect(() => {
    if (!email || !payref) {
      navigate("/login");
    }
  }, [email, payref, navigate]); 

  if (!email || !payref) {
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

        <p className="admin-btn" onClick={handleLogout}>🚪 Logout</p>
      </div>
    </div>
  );
};

export default UserDashboard;
