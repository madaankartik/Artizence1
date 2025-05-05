import React, { useState } from 'react';
import './Lower.css';
import Logo from "../../assets/Logo.png"

const Lower = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="LowerNavbar">
      <div className="logo"><img src={Logo} alt="logo" /></div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <div className="dropdown">
          For Teachers
          <img
            src="https://img.icons8.com/ios-filled/16/000000/chevron-down.png"
            alt="expand"
            className="dropdown-icon"
          />
        </div>
        <div className="dropdown">
          Resources
          <img
            src="https://img.icons8.com/ios-filled/16/000000/chevron-down.png"
            alt="expand"
            className="dropdown-icon"
          />
        </div>
        <div className="dropdown">
          About Us
          <img
            src="https://img.icons8.com/ios-filled/16/000000/chevron-down.png"
            alt="expand"
            className="dropdown-icon"
          />
        </div>
      </nav>

      <div className="auth-buttons">
        <a href="#" className="login">Login</a>
        <button className="signup">Get started for free →</button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Lower;