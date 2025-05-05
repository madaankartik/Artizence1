import React, { useState } from 'react';
import './Lower.css';
import Logo from "../../assets/Logo.png";
import ForTeachers from '../ForTeachers/ForTeachers';

const Lower = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teachersDropdownOpen, setTeachersDropdownOpen] = useState(false);

  return (
    <header className="LowerNavbar">
      <div className="logo"><img src={Logo} alt="logo" /></div>
      
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <div
          className="dropdown dropdown-teachers"
          onClick={() => setTeachersDropdownOpen(!teachersDropdownOpen)}
        >
          For Teachers <span>▼</span>
          {teachersDropdownOpen && (
            <div className="dropdown-wrapper">
              <ForTeachers />
            </div>
          )}
        </div>
        <div className="dropdown">Resources <span>▼</span></div>
        <div className="dropdown">About Us <span>▼</span></div>
      </nav>

      <div className="auth-buttons">
        <a href="#" className="login">Login</a>
        <button className="signup">Get started for free →</button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
    </header>
  );
};

export default Lower;
