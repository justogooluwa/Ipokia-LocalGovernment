// components/Hero.jsx
import React from 'react';
import './Hero.css';
import heroImage from '../../assets/fbimg3.jpg'; // update path

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Welcome to</h1>
        <h2>Ipokia Local Government</h2>
        <h3>...Building Our Future Together</h3>
        <button className="hero-btn">Read more</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Governor" />
      </div>
    </div>
  );
}

export default Hero;
