import React from "react";
import "./Certificate.css";
import Logo from "../../assets/logo.jpg"

const CertificatePage = ({ form, serial }) => {
  if (!form) return <p>No data found</p>;
  function getDayWithSuffix(date) {
    const day = date.getDate();
    if (day % 10 === 1 && day !== 11) return day + "st";
    if (day % 10 === 2 && day !== 12) return day + "nd";
    if (day % 10 === 3 && day !== 13) return day + "rd";
    return day + "th";
  }
  
  function getMonthName(date) {
    return date.toLocaleString("default", { month: "long" }); // e.g., "August"
  }
 
//   function formatDateToWords(dateStr) {
//     const date = new Date(dateStr);
  
//     const day = date.getDate();
//     const month = date.toLocaleString("default", { month: "long" });
//     const year = date.getFullYear();
  
//     const dayWords = [
//       "", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth",
//       "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth",
//       "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth", "Twenty-First", "Twenty-Second",
//       "Twenty-Third", "Twenty-Fourth", "Twenty-Fifth", "Twenty-Sixth", "Twenty-Seventh",
//       "Twenty-Eighth", "Twenty-Ninth", "Thirtieth", "Thirty-First"
//     ];
  
//     return `${dayWords[day]} of ${month}, ${year}`;
//   }
  
  

  return (
    
    <>
    <div className="certificate-page">
      <div className="certificate-modal">
      <div className="certificate-watermark-pattern"></div>
      <div className="certificate-top">
  <div className="serial-numbers">
    <p className="serial-number">OG/LGC/PKA</p>
    <p className="serial-number">SN: {serial}</p>
  </div>

  <div className="certificate-header">
    <img src={Logo} alt="Logo" className="logo" />
    <h2>IPOKIA LOCAL GOVERNMENT</h2>
    <p>Ipokia Ogun State of Nigeria </p>
    <h1 className="subheading">Certificate of Origin</h1>
  </div>

  <img
    src={`http://localhost:3000/uploads/${form.photo}`}
    className="passport-img"
    alt="Photo"
    crossOrigin="anonymous"
  />
</div>


        <div className="certificate-body">
        <h4>
  This is to certify that from enquiry made, the person whose photograph is affixed <strong>{form.name}</strong> of 
      <strong> {form.address}</strong>, of native of <strong>{form.town} </strong> 
  in Ipokia Local Government Area of Ogun State, Nigeria. Ancestral, Historical and Administrative records verified 
  by the Local Government attested to this Fact.
</h4>
<h4>
  This Certificate of origin is issued today under my hand and the Public seal of Ipokia Local Government at
  Ipokia this <strong>{getDayWithSuffix(new Date())}</strong> day of <strong>{getMonthName(new Date())}</strong> year <strong>{new Date().getFullYear()}</strong>
   
</h4>

          {/* <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Pay Ref:</strong> {form.payref}</p>
          <p><strong>Phone:</strong> {form.phone}</p>
          <p><strong>Address:</strong> {form.address}</p>
          <p><strong>Date of Birth:</strong> {form.dob}</p> */}



          <div className="certificate-footer">
  <div className="signature-block">
    <img
      src={`http://localhost:3000/uploads/signatures/1751812382772_signature3.png`}
      //src={`http://localhost:3000/uploads/signatures/${form.signature}`}
      className="signature-img"
      alt="Signature"
      crossOrigin="anonymous"
    />
    <p className="registrar">Secretary Ipokia Local Government</p>
  </div>

  <div className="signature-block">
    <img
       src={`http://localhost:3000/uploads/signatures/1751812382772_signature3.png`}
     // src={`http://localhost:3000/uploads/${form.signature}`}
      className="signature-img"
      alt="Signature"
      crossOrigin="anonymous"
    />
    <p className="registrar">Chairman Ipokia Local Government</p>
  </div>
</div>


          
        </div>
      </div>
    </div>
    
    <button onClick={() => window.print()} style={{textAlign:'center'}}>🖨️ Print Certificate</button>
    </>
  );
};

export default CertificatePage;
