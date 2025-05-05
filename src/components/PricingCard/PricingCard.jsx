import React from 'react';
import './PricingCard.css';

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index} className={feature.included ? 'included' : 'excluded'}>
            {feature.included ? '✓' : '✗'} {feature.label}
          </li>
        ))}
      </ul>
      <button className="plan-btn">See plan</button>
    </div>
  );
};

export default PricingCard;
