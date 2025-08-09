import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Form.css"

const AdminFillSection2 = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  

  useEffect(() => {
    axios.get(`http://localhost:3000/api/form/${id}`).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  


  const handleSubmit = async () => {
    await axios.put(`http://localhost:3000/api/form/${id}/section2`, {
      identifiername: form.identifiername,
      town: form.town,
      years: form.years,
      identifierfullname: form.identifierfullname,
      rank: form.rank,
    });
    alert("Section II submitted successfully");
  };

  if (!form) return <p>Loading...</p>;

  return (
    <>
     {/* <input
      type="text"
      placeholder="Search by PayRef"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    {filteredForms.map((form) => (
      <div key={form.id}>{form.payref} - {form.firstname}</div>
    ))} */}
    <div>
    <div className="ipo-form-container">
      <h2>Fill Section II for {form.firstname} {form.lastname}</h2>
        <div className="form-group full-width">
            <h4>SECTION II: Identification of Applicant</h4>
          </div>

          <div className="form-group">
            <label>I identify that Miss/Mr/Mrs</label>
            <input name="identifiername" type="text" value={form.identifiername || ""} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Town/Village</label>
            <input name="town" type="text" value={form.town || ""} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Known for (years)</label>
            <input name="years" type="number" value={form.years || ""} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Full Name of Identifier</label>
            <input name="identifierfullname" type="text" value={form.identifierfullname || ""} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label>Rank</label>
            <input name="rank" type="text" value={form.rank || ""} onChange={handleChange} required/>
            <button onClick={handleSubmit}>Save Section II</button>
          </div>
      
      {/* <label>I identify that Miss/Mr/Mrs</label>
      <input name="identifiername" value={form.identifiername || ""} onChange={handleChange} />

      <label>Town/Village</label>
      <input name="town" value={form.town || ""} onChange={handleChange} />

      <label>Years Known</label>
      <input name="years" value={form.years || ""} onChange={handleChange} />

      <label>Full Name</label>
      <input name="identifierfullname" value={form.identifierfullname || ""} onChange={handleChange} />

      <label>Rank</label>
      <input name="rank" value={form.rank || ""} onChange={handleChange} />

      <button onClick={handleSubmit}>Save Section II</button> */}
      </div>
    </div>
    </>
  );
};

export default AdminFillSection2;
