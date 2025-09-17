import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <span className="email">
          <MdEmail size={20} style={{ color: "orange" }} /> Mail to us:{" "}
          <a href="mailto:info@ipokia.gov.ng">info@ipokia.gov.ng</a>
        </span>
        <div className="social-icons">
          <p>Follow Us</p>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* Sticky navbar */}
      <div className="navbar">
        <div className="logo-section">
          <img src={Logo} alt="Ipokia Logo" className="logo" />
        </div>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        {/* Nav links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <div className="dropdown" onClick={closeMenu}>
  <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
</div>

<div className="dropdown">
  <NavLink to="#" className={() => ""}>Executives <FaChevronDown style={{ marginLeft: 4 }} /></NavLink>
  <div className="dropdown-content">
    <NavLink to="/chairman" className={() => ""}>Chairman</NavLink>
    <NavLink to="/vicechairman" className={() => ""}>Vice Chairman</NavLink>
    <NavLink to="/secetary" className={() => ""}>Secretary</NavLink>
    
      
        <div className="nested-dropdown">
          <NavLink to="#" className={() => ""}>Supervisory Counsellors <FaChevronRight style={{ marginLeft: 4 }} /></NavLink>
          <div className="nested-dropdown-content">
           
            <NavLink to="/health" className={() => ""}>Health & Medical</NavLink>
            <NavLink to="/education" className={() => ""}>Education</NavLink>
            <NavLink to="/agric" className={() => ""}>Agric</NavLink>
            <NavLink to="/work" className={() => ""}>Works</NavLink>
            <NavLink to="/waters" className={() => ""}>Water</NavLink>
          </div>
        
        
        </div>
    <NavLink to="/adviser" className={() => ""}>Special Advisers</NavLink>
  </div>
</div>

<div className="dropdown">
  <NavLink to="#" className={() => ""}>Legislatives <FaChevronDown style={{ marginLeft: 4 }} /></NavLink>
  <div className="dropdown-content">
    <NavLink to="/ifonyintedoward" className={() => ""}>Leader</NavLink>
    <NavLink to="/tubeward" className={() => ""}>Deputy Leader</NavLink>
    <NavLink to="/deputyleader" className={() => ""}>Majority Leader</NavLink>
    <NavLink to="/ilase" className={() => ""}>Chief Whip</NavLink>

    <div className="nested-dropdown">
      <NavLink to="#" className={() => ""}>Counsellors <FaChevronRight style={{ marginLeft: 4 }} /></NavLink>
      <div className="nested-dropdown-content">
        {/* <div className="nested-dropdown">
          <NavLink to="#" className={() => ""}>Supervisory Counsellors <FaChevronRight style={{ marginLeft: 4 }} /></NavLink>
          <div className="nested-dropdown-content">
            <NavLink to="#" className={() => ""}>Finance</NavLink>
            <NavLink to="/health" className={() => ""}>Health & Medical</NavLink>
            <NavLink to="/education" className={() => ""}>Education</NavLink>
            <NavLink to="/agric" className={() => ""}>Agric</NavLink>
            <NavLink to="/work" className={() => ""}>Works</NavLink>
            <NavLink to="/waters" className={() => ""}>Water</NavLink>
          </div>
        </div>
         */}

        <div className="nested-dropdown">
          <NavLink to="#" className={() => ""}>Ward Counsellors <FaChevronRight style={{ marginLeft: 4 }} /></NavLink>
          <div className="nested-dropdown-content">
            <NavLink to="/ifonyintedoward" className={() => ""}>Ifonyintedo Ward</NavLink>
            <NavLink to="/tubeward" className={() => ""}>Tube Ward</NavLink>
            <NavLink to="/maunward2" className={() => ""}>Maun Ward1</NavLink>
            <NavLink to="/maunward" className={() => ""}>Maun Ward2</NavLink>
            <NavLink to="/idirokoward" className={() => ""}>Idiroko Ward</NavLink>
            <NavLink to="/ajegunleward" className={() => ""}>Ajegunle Ward</NavLink>
            <NavLink to="/agosasaward" className={() => ""}>Agosasa Ward</NavLink>
            <NavLink to="/agadaward" className={() => ""}>Agada Ward</NavLink>
            <NavLink to="/ipokiaward1" className={() => ""}>Ipokia Ward 1</NavLink>
            <NavLink to="/ijofin" className={() => ""}>Ijofin-Idosa Ward</NavLink>
            <NavLink to="/ilase" className={() => ""}>Ihunbo/Ilase Ward</NavLink>
          </div>
        </div>
      </div>
    </div>
    <NavLink to="/leader" className={() => ""}>Clerk of The House</NavLink>
  </div>
</div>

<div className="dropdown">
  <NavLink to="#" className={() => ""}>Projects <FaChevronDown style={{ marginLeft: 4 }} /></NavLink>
  <div className="dropdown-content">
    <NavLink to="#" className={() => ""}>Health</NavLink>
    <NavLink to="#" className={() => ""}>Education</NavLink>
    <NavLink to="#" className={() => ""}>Works</NavLink>
  </div>
</div>

<div className="dropdown">
  <NavLink to="#" className={() => ""}>Info <FaChevronDown style={{ marginLeft: 4 }} /></NavLink>
  <div className="dropdown-content">
    <NavLink to="/aboutipokia" className={() => ""}>AboutIpokia</NavLink>
    <NavLink to="#" className={() => ""}>News</NavLink>
  </div>
</div>

<div className="dropdown">
  <NavLink to="#" className={() => ""}>Departments <FaChevronDown style={{ marginLeft: 4 }} /></NavLink>
  <div className="dropdown-content">
    <NavLink to="/director" className={() => ""}>Head Local Govt Admin</NavLink>
    <div className="nested-dropdown">
          <NavLink to="#" className={() => ""}>Departmental Heads<FaChevronRight style={{ marginLeft: 4 }} /></NavLink>
          <div className="nested-dropdown-content">
          <NavLink to="/dgsa" className={() => ""}>Director General Services and Administration(DGSA)</NavLink>
            <NavLink to="/finance" className={() => ""}>Director of Finance / Treasurer</NavLink>
            <NavLink to="/works" className={() => ""}>Director of Works & Housing</NavLink>
            <NavLink to="/sport" className={() => ""}>Director of Information Education & Sports</NavLink>
            <NavLink to="/budget" className={() => ""}>Director of Budget Research Planning & Statistics</NavLink>
            <NavLink to="/social" className={() => ""}>Director Community Development</NavLink>
            <NavLink to="/audit" className={() => ""}>Internal Audit</NavLink>
            <NavLink to="/healthsecretary" className={() => ""}>Health Secretary</NavLink>
            <NavLink to="/agriculture" className={() => ""}>Director of Agriculture & Natural Resources</NavLink>
            <NavLink to="/water" className={() => ""}>Director of Water & Enviromental Sanitation </NavLink>
            <NavLink to="/nulge" className={() => ""}>Nigeria Union of Local Government Employees</NavLink>
          </div>
        </div>
  </div>
</div>

<div className="dropdown" onClick={closeMenu}>
  <NavLink to="/certificateflow" className={({ isActive }) => isActive ? "active" : ""}>Certificate of Origin</NavLink>
</div>
<NavLink to="/login" className="login-link" onClick={closeMenu}>
    <button className="login-btn">Login</button>
  </NavLink>


        </div>

       
      </div>
    </>
  );
}

export default Navbar;
