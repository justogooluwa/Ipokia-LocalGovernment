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
          <span className="underline"> Haven for Investors</span>
        </h1>
        <p className="quote">
          “Our State is nationally known as one of the most peaceful States in
          the nation. We will work hard to ensure that this critical element of
          the Social Contract is maintained, so our people can continue to live
          in peace. Security of lives and property is the first order of
          business for government and we will follow this strictly.”
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
