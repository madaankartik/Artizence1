import React from 'react';
import './Penguin.css';
import Penguine from "../../assets/Penguine.png"

function Penguin() {
  return (
    <div className="container">
      <div className="ground"></div>
      <img src={Penguine} alt="Penguin Icon" className="penguin-icon" />
    </div>
  );
}

export default Penguin;
