import React from 'react';
import './featureBox.css';

const FeatureBox = ({ emoji, text }) => {
  return (
    <div className="feature-box">
      <div className="emoji">{emoji}</div>
      <p>{text}</p>
    </div>
  );
};

export default FeatureBox;
