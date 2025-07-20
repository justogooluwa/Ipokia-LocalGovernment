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
          Hon. Johnson Akohmeh is embarking on a transformative journey to bring
          about positive change in every aspect of our society.
        </p>

        <div className="blueprint-goals">
          <div className="goal-column">
            <h2><HiOutlineCheck /> Poverty Reduction</h2>
            <h2><HiOutlineCheck /> Job Creation</h2>
            <h2><HiOutlineCheck /> Price Stability</h2>
            <h2><HiOutlineCheck /> Sustainable Economic Growth</h2>
          </div>

          <div className="goal-column">
            <h2><HiOutlineCheck /> Improved Standard of Living</h2>
            <h2><HiOutlineCheck /> Environmental Sustainability</h2>
            <h2><HiOutlineCheck /> Highly educated, healthy & skilled populace</h2>
            <h2><HiOutlineCheck /> Safety & Security</h2>
          </div>

          {/* STATS SECTION */}
         <div className="blueprint-stats">
         <div className="stat-box">
         <h2>37<span>years</span></h2>
         <p>Years of Foundation</p>
         </div>
         <div className="stat-box">
          <h2>7<span>m</span></h2>
          <p>Population</p>
         </div>
           <div className="stat-box">
           <h2>31</h2>
          <p>Local Government Areas</p>
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
