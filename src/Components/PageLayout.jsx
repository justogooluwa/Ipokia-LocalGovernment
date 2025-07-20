import React from "react";
import pageLayout from "../../src/assets/UE-Suit-bg.webp";
import "./PageLayout.css";

function PageLayout({ title }) {
  return (
    <div className="page-layout">
      <img src={pageLayout} alt="Background" className="page-image" />
      <h1 className="page-title">{title}</h1>
    </div>
  );
}

export default PageLayout;
