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

  // Check if Section II is complete
  const isSection2Complete = (form) =>
    form.identifiername &&
    form.town &&
    form.years &&
    form.identifierfullname &&
    form.rank;
  
  return (
    <>
      {forms.map((form, i) => {
        if (!isSection2Complete(form)) {
          return (
            <div key={i}>
              <h3>Certificate for {form.name} is pending</h3>
              <p>Section II is not completed. Please contact admin.</p>
            </div>
          );
        }
  
        const serialNumber = `LG-${String(form.id).padStart(5, "0")}`;
        return (
          <div key={i} style={{ pageBreakAfter: "always" }}>
            <CertificatePage form={form} serial={serialNumber} />
          </div>
        );
      })}
    </>
  );
};

export default CertificatePageWrapper;