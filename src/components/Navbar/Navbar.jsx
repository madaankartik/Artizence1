import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="header">
        <div className="navbar">
          <nav>
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
    </header>
  )
}

export default Navbar
