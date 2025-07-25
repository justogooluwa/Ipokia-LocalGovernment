import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CertificatePage from "./Certificates";
import axios from "axios";

const CertificatePageWrapper = () => {
  const { payref } = useParams();
  const [forms, setForms] = useState([]);

  useEffect(() => {
    if (!payref) return;

    axios
      .get(`http://localhost:3000/api/forms/${payref}`)
      .then((res) => setForms(res.data))
      .catch((err) => console.error("Error fetching certificate", err));
  }, [payref]);

  if (!forms.length) return <p>No certificate found for {payref}</p>;

  return (
    <>
      {forms.map((form, i) => (
        <div key={i} style={{ pageBreakAfter: "always" }}>
          <CertificatePage form={form} />
        </div>
      ))}
    </>
  );
};

export default CertificatePageWrapper;
