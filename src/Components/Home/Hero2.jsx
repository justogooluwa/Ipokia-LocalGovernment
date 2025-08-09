import React from "react";
import "./Hero2.css";
import governor from "../../assets/p2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({ duration: 2000, once: false }); // duration is optional
  }, []);
  return (
    <div className="hero-section1">
      <div className="hero-left" data-aos="fade-up">
        <img src={governor} alt="Governor" />
      </div>
      <div className="hero-right">
        <h1>
          Ipokia,Safe
          <br />
          <span className="underline"> Land of Opportunities</span>
        </h1>
        <p className="quote">
          “Ipokia is a land of opportunities primarily for Agriculture Primarily, Poultry Farming, Garri and Palm Oil. 
          The vast land is arrable and peaceful. There is adequate security for Investors ”
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
