import React from "react";
import { useNavigate } from "react-router-dom";


const AdminBoard = () => {
  const navigate = useNavigate();
 

  return (
    
      <>
      
        <button onClick={() => navigate('/admin/rate') } style={{ marginRight: "1rem" }}>
          Rate Table
        </button>

        <button onClick={() => navigate('/admin/forms')} style={{ marginRight: "1rem" }}>
          All Submitted Forms
        </button>

        <button onClick={() => navigate("/admin/financial-report")} style={{ marginRight: "1rem" }}>
          Financial Reports
        </button>

        <button onClick={() => navigate("/admin/manager")}>
          Create New Admin
        </button>
        </>
    
  );
};

export default AdminBoard;
