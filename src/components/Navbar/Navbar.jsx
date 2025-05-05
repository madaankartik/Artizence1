import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to control the menu toggle for smaller screens
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu on small screens
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="navbar">
        {/* Hamburger menu for smaller screens */}
        <button className="hamburger" onClick={toggleMenu}>☰</button>

        {/* Wrapper to separate nav from selectors */}
        <div className="nav-container">
          {/* Navigation links */}
          <nav className={menuOpen ? "show-menu" : ""}>
            <ul>
              <li>For Students</li>
              <li>For Teachers</li>
              <li>For Schools</li>
              <li>For Organizations</li>
            </ul>
          </nav>

          {/* Language & Country selectors */}
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
