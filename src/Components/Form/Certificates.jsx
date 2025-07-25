import React from "react";
import "./Certificate.css";
import Logo from "../../assets/logo.jpg"

const CertificatePage = ({ form }) => {
  if (!form) return <p>No data found</p>;

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
        <div className="certificate-header">
          <img
            src={Logo}
            alt="Logo"
            className="logo"
          />
          <h2>IPOKIA LOCAL GOVERNMENT COUNCIL</h2>
          <h1>OGUN STATE, NIGERIA </h1>
          <p className="subheading">Certificate of Local Government of Origin</p>
          <p className="subheading">we hereby certify that</p>
          <h3 className="name">{form.name}</h3>
        </div>

        <div className="certificate-body">
        <h4>
  This certificate is issued in affirmation of <strong>{form.name}</strong>'s origin, as recorded in the
  official register of Ipokia Local Government Council, and may be tendered as proof of local
  government of origin for administrative or official purposes.
</h4>

          {/* <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Pay Ref:</strong> {form.payref}</p>
          <p><strong>Phone:</strong> {form.phone}</p>
          <p><strong>Address:</strong> {form.address}</p>
          <p><strong>Date of Birth:</strong> {form.dob}</p> */}

<p className="date-issued">
            Date Issued: {new Date(form.createdAt).toDateString()}
          </p>


          <div className="certificate-footer">
            <p>Signed:</p>
            <img
  src={`http://localhost:3000/uploads/${form.signature}`}
  className="signature-img"
  alt="Signature"
  crossOrigin="anonymous"
/>

            <p className="registrar">Secretary To The Local Government</p>
          </div>
          
        </div>
      </div>
    </div>
    
    <button onClick={() => window.print()}>🖨️ Print Certificate</button>
    </>
  );
};

export default CertificatePage;
