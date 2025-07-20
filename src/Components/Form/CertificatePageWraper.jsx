import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CertificatePage from "./Certificates";
import axios from "axios";

const CertificatePageWrapper = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/forms/${id}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error("Error fetching form", err));
  }, [id]);
  

  return <CertificatePage form={form} />;
};

export default CertificatePageWrapper;
