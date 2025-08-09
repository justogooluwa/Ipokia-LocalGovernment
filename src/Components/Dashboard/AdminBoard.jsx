import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminBoard.css";

const AdminBoard = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();
  const pendingForms = forms.filter((form) => !form.identifiername);

  useEffect(() => {
    axios.get("http://localhost:3000/api/forms").then((res) => {
      setForms(res.data);
    });
  }, []);

  return (
    <div>
      <h3>This is your default AdminBoard home content</h3>
      {pendingForms.length > 0 ? (
        pendingForms.map((form) => (
          <div key={form.id}>
            <p>{form.name} - {form.email}</p>
            <button onClick={() => navigate(`/admin/fill-section2/${form.id}`)}>
              Fill Section II
            </button>
          </div>
        ))
      ) : (
        <p>No pending forms.</p>
      )}
    </div>
  );
};

export default AdminBoard;
