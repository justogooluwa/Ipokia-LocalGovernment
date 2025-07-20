import React, { useEffect, useState, useRef } from "react";
import Rate from "../Form/Rate";
import axios from "axios";
import "./AdminDashboard.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const AdminDashboard = () => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = () => {
    axios
      .get("http://localhost:3000/api/forms")
      .then((res) => setForms(res.data))
      .catch((err) => console.error("Error loading forms", err));
  };

  const handleFilter = () => {
    if (!fromDate || !toDate) return alert("Select both dates");
    axios
      .get(`http://localhost:3000/api/forms?from=${fromDate}&to=${toDate}`)
      .then((res) => setForms(res.data))
      .catch((err) => console.error("Error filtering forms", err));
  };

  const handleView = (form) => {
    setSelectedForm(form);
  };

  const handleCloseModal = () => {
    setSelectedForm(null);
  };
  const printRef = useRef();
  const handleDownloadPDF = async () => {
    const element = printRef.current;
  
    if (!element) return;
  
    try {
      // Scroll to top to ensure full view
      window.scrollTo(0, 0);
  
      const canvas = await html2canvas(element, {
        useCORS: true, // ensures external images load
        allowTaint: true,
        scale: 2, // better resolution
      });
  
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
  
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`certificate_${selectedForm.name}.pdf`);
    } catch (error) {
      console.error("PDF generation failed", error);
    }
  };
  
  

  return (
    <>
    <Rate />
    <div className="admin-dashboard">
      <h2>📋 All Submitted Forms</h2>

      <div className="date-filter">
        <label>
          From:{" "}
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </label>
        <label>
          To:{" "}
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </label>
        <button onClick={handleFilter}>🔍 Filter</button>
        <button onClick={fetchForms}>🔄 Reset</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Applicant</th>
            <th>Address</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Photo</th>
            <th>Submitted On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form, idx) => (
            <tr key={idx}>
              <td>{form.name}</td>
              <td>{form.address}</td>
              <td>{form.applicantno}</td>
              <td>{form.dob}</td>
              <td>
  {form.photo ? (
    <img
      src={`http://localhost:3000/uploads/${form.photo}`}
      alt="applicant"
      className="passport-photo"
    />
  ) : (
    "No photo"
  )}
</td>

              <td>{new Date(form.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={() => handleView(form)}>👁 View</button>
                <a href={`/certificates/${form.id}`} target="_blank" rel="noopener noreferrer">
    🖨 Full Page
  </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedForm && (
  <div className="modal">
    <div className="modal-content">
      <h3>Certificate of Origin - View Form</h3>
      <button onClick={handleCloseModal} className="close-btn">
        ❌
      </button>
      <button onClick={handleDownloadPDF} className="pdf-btn">
  📄 Export PDF
</button>

      <div className="lg-form-modal" ref={printRef}>
        <div className="form-header">
          <div>
            <h2>IPOKIA LOCAL GOVERNMENT</h2>
            <p>Office of Executive Chairman</p>
            <p>APPLICATION FORM FOR CERTIFICATE OF ORIGIN</p>
          </div>
          <div className="photo-block">
  {selectedForm.photo ? (
    <img
      src={`http://localhost:3000/uploads/${selectedForm.photo}`}
      alt="Photo"
      className="passport-photo"
      crossOrigin="anonymous"
    />
  ) : (
    <div className="photo-placeholder">Photo</div>
  )}
</div>

        </div>

        <div className="form-section">
          <p><strong>1. NAME OF APPLICANT:</strong> {selectedForm.name}</p>
          <p><strong>2. HOME ADDRESS (WITHIN THE LOCAL GOVT.):</strong> {selectedForm.address}</p>
          <p><strong>3. PRESENT PLACE OF ABODE:</strong> {selectedForm.currentaddress}</p>
          <p><strong>4. DATE OF BIRTH:</strong> {selectedForm.dob}</p>
          <p><strong>5. NAME OF FATHER & PHONE NO:</strong> {selectedForm.fname} - {selectedForm.fno}</p>
          <p><strong>6. HOME ADDRESS:</strong> {selectedForm.faddress}</p>
          <p><strong>7. NAME OF MOTHER & PHONE NO:</strong> {selectedForm.mname} - {selectedForm.mno}</p>
          <p><strong>8. HOME ADDRESS:</strong> {selectedForm.maddress}</p>
          <p><strong>9. PURPOSE FOR WHICH IDENTIFICATION IS REQUIRED:</strong> {selectedForm.identification}</p>
          <p><strong>10. PHONE NO OF APPLICANT:</strong> {selectedForm.applicantno}</p>
        </div>

        <div className="declaration">
          <p>
            I CERTIFY ON HONOUR AND DECLARE THAT THE INFORMATION GIVEN BY ME IS TRUE AND CORRECT TO THE BEST OF MY KNOWLEDGE.
          </p>

          <div className="signature-section">
            <p><strong>SIGNATURE OF APPLICANT:</strong></p>
            {selectedForm.signature ? (
              <img
                src={`http://localhost:3000/uploads/${selectedForm.signature}`}
                alt="Signature"
                className="signature-img"
                crossOrigin="anonymous"
              />
            ) : (
              <div className="signature-placeholder">No Signature Provided</div>
            )}
          </div>
        </div>

        <div className="section-two">
          <h4>SECTION II</h4>
          <p>
            TO BE FILLED BY A RESPONSIBLE INDIGENE OF IPOKIA LOCAL GOVERNMENT,
            ACCEPTABLE TO THE LOCAL GOVERNMENT AUTHORITIES.
          </p>

          <p>
            I HEREBY IDENTIFY THAT MISS/MR/MRS <strong>{selectedForm.identifiername}</strong>, 
            WHOSE NAME APPEARS, IS AN INDIGENE OF <strong>{selectedForm.town}</strong> 
            IN IPOKIA LOCAL GOVERNMENT AREA OF OGUN STATE OF NIGERIA. (HE/SHE) IS WELL KNOWN TO ME FOR THE PAST 
            <strong> {selectedForm.years}</strong> YEARS.
          </p>

          <p><strong>FULL NAME:</strong> {selectedForm.identifierfullname}</p>
          <p><strong>RANK:</strong> {selectedForm.rank}</p>
          <p><strong>SIGNATURE:</strong> ________________________________</p>
        </div>

        <p style={{ fontSize: "12px", marginTop: "1rem", fontStyle: "italic" }}>
          IF YOU ARE NOT CONFIRMED BEFORE PAYMENT, THE MONEY IS NOT REFUNDABLE. THANKS.
        </p>
      </div>
    </div>
  </div>
)}
    </div>
    </>
  );
};

export default AdminDashboard;
