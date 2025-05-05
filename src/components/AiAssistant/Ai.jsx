import React from 'react';
import './Ai.css';
import Aibackground from "../../assets/Aibackground.jpg"


const AIAssistantSection = () => {
  return (
    <section
      className="ai-assistant-section"
      style={{ backgroundImage: `url(${Aibackground})`}}
    >
      <div className="ai-assistant-overlay">
        <h1>Join The Yovoluton</h1>
        <p>Ready to Teach Smarter?</p>
        <button className="ai-assistant-btn">
          Start Now with Your AI Assistant →
        </button>
      </div>
    </section>
  );
};

export default AIAssistantSection;
