import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./AdminBoard.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminEmail");
    window.location.href = "/login"; 
  };
  

  return (
    <div className="admin-container">
      <div className="dash">
        <p className="admin-btn" onClick={() => navigate("/admin/rate")}>Rate Table</p>
        <p className="admin-btn" onClick={() => navigate("/admin/forms")}>All Submitted Forms</p>
        <p className="admin-btn" onClick={() => navigate("/admin/financial-report")}>Financial Reports</p>
        <p className="admin-btn" onClick={() => navigate("/admin/manager")}>Create New Admin</p>
        <p className="admin-btn" onClick={() => navigate("/admin")}>📝Forms Awaiting Attestation</p>
        <p className="admin-btn" onClick={handleLogout}>🚪 Logout</p>
      </div>

      <div className="admin-content">
        <Outlet /> {/* This is where each page content will show */}
      </div>
    </div>
  );
};

export default AdminLayout;
