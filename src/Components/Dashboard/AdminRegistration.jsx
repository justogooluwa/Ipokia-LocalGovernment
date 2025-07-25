// AdminManager.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminManager = () => {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/admin");
      setAdmins(res.data);
    } catch (err) {
      setMessage("Error fetching admins");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/admin", form);
      setMessage("Admin created successfully");
      setForm({ email: "", password: "" });
      fetchAdmins();
    } catch (err) {
      setMessage("Failed to create admin");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this admin?")) {
      try {
        await axios.delete(`http://localhost:3000/api/admin/${id}`);
        setMessage("Admin deleted");
        fetchAdmins();
      } catch (err) {
        setMessage("Failed to delete");
      }
    }
  };

  return (
    <div>
      <h2>Register New Admin</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="Admin Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Create Admin</button>
      </form>

      {message && <p>{message}</p>}

      <h3>All Admins</h3>
      <ul>
        {admins.map((admin) => (
          <li key={admin.id}>
            {admin.email}
            <button onClick={() => handleDelete(admin.id)} style={{ marginLeft: "1rem" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManager;
