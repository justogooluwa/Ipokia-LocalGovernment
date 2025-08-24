import React from "react";
import "./Footer.css";
import Logo from "../assets/logo.jpg";   // your logo
import BgImage from "../assets/WAL_4325.jpg"; // your background

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="footer-container">
       
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>

       
        <div className="footer-content">
       
          <div className="footer-col">
            <h3>About Ipokia</h3>
            <p>
              Ipokia Local Government was created to drive community growth,
              development and progress, serving as the main gate to the Gateway State.
            </p>
          </div>

          
          <div className="footer-col">
            <h3>Quick Contact</h3>
            <p>📍 Ipokia, Ogun State</p>
            <p>📞 070 0000 001</p>
            <p>✉️ info@ipokia.gov.ng</p>
          </div>

        
          <div className="footer-col">
            <h3>Explore Ipokia</h3>
    
             <p>Invest in Ipokia</p>
             <p>Ipokia Tourism</p>
             <p>Ipokia Hotels</p>
             <p>Ipokia Diaspora</p>
            
          </div>

       
          <div className="footer-col">
            <h3>Latest News</h3>
            
             <p>Community Project Updates</p>
             <p>Government Initiatives</p>
             <p>Upcoming Events</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
