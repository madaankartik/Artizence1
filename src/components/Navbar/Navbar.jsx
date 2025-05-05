import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="navbar">
  
        <button className="hamburger" onClick={toggleMenu}>☰</button>

        <div className="nav-container">
          <nav className={menuOpen ? "show-menu" : ""}>
            <ul>
              <li>For Students</li>
              <li>For Teachers</li>
              <li>For Schools</li>
              <li>For Organizations</li>
            </ul>
          </nav>

     
          <div className="topbar">
            <div className="right-side">
              <div className="selector">
                <span role="img" aria-label="globe">🌐</span>
                <span>EN</span>
                <span>▼</span>
              </div>
              <div className="selector">
                <span role="img" aria-label="india-flag">🇮🇳</span>
                <span>IND</span>
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
