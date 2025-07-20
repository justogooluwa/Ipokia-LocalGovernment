import React from "react";
import "./Card.css";

import card1 from "../../assets/A-2.png";
import card2 from "../../assets/R-3.png";
import card3 from "../../assets/i.png";
import card4 from "../../assets/S.png";
import card5 from "../../assets/E.png";

const cards = [card1, card2, card3, card4, card5];

function Card() {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card-item">
          <img src={card} alt={`Card ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Card;
