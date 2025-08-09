import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import Blueprint from "../../assets/fbimg3.jpg";
import Executive from "../../assets/Executive.webp"; 
import Legislature from "../../assets/Legislative.webp";
// import Judiciary from "../../assets/Judiciary.webp";
import "./BluePrint.css"; // You’ll define this style below

function BluePrint() {
  return (
    <>
    <div className="blueprint-wrapper">
      {/* LEFT IMAGE */}
      <div className="blueprint-image">
        <img src={Blueprint} alt="Governor and Children" />
      </div>

      {/* RIGHT TEXT */}
      <div className="blueprint-content">
        <h1>Economic Blueprint Goals</h1>
        <p>
          Hon. Johnson Akohomeh is embarking on a transformative journey to bring
          about shared prosperity and opportunities for all Ipokia Descents.
        </p>

        <div className="blueprint-goals">
          <div className="goal-column">
            <h2><HiOutlineCheck /> Roads</h2>
            <h2><HiOutlineCheck /> Revitalized Agriculture</h2>
            <h2><HiOutlineCheck /> Quality Education</h2>
            <h2><HiOutlineCheck /> Enhanced Security</h2>
          </div>

          <div className="goal-column">
            <h2><HiOutlineCheck /> Improved Primary Healthcare</h2>
            <h2><HiOutlineCheck /> Youth/Traders Employment</h2>
            <h2><HiOutlineCheck /> Stronger Intergovernmental Ties</h2>
            {/* <h2><HiOutlineCheck /> Safety & Security</h2> */}
          </div>

          {/* STATS SECTION */}
         <div className="blueprint-stats">
         <div className="stat-box">
         <h2>49<span>years</span></h2>
         <p>Years of Existence</p>
         </div>
         <div className="stat-box">
          <h2>151<span>thousand</span></h2>
          <p>Population</p>
         </div>
           <div className="stat-box">
           <h2>12</h2>
          <p>Wards</p>
         </div>
        </div>
        
        </div>
      </div>
    </div>


    <div className="government-wrapper">
    <h2 className="government-title">The Government</h2>
      <div className="government-images">
        <img src={Executive} alt="Executive" />
        <img src={Legislature} alt="Legislature" />
        {/* <img src={Judiciary} alt="Judiciary" /> */}
      </div>
    </div>


      </>

  );
}

export default BluePrint;
