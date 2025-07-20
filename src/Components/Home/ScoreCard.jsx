// components/Scorecard.jsx
import React from "react";
import "./Scorecard.css";
import personImage from "../../assets/p2.png"; // Replace with your person image
import buildingImage from "../../assets/WAL_4318.jpg"; // Replace with your building image

function Scorecard() {
  return (
    <div className="scorecard-container">
      <div className="content-section">
        <h1>
          <span className="highlight">SCORECARD OF A</span><br/> Compassionate Leader
        </h1>
        <p>
        Akwa Ibom people hired us to work and we came prepared to roll our sleeves and work for the continuous growth and development of our people
         - Hon. Johnson Akohmeh
        </p>
        <button className="explore-button">EXPLORE OUR ACHIEVEMENTS</button>
      </div>
      <div className="image-section">
        <img src={personImage} alt="Leader" className="person-image" />
        <img src={buildingImage} alt="Project" className="building-image" />
        <span className="hashtag">#[Your Hashtag]</span>
        <div className="diagonal-line"></div>
      </div>
    </div>
  );
}

export default Scorecard;