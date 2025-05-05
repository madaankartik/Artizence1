import React, { useState } from 'react';
import PricingData from "../../Pricingdata.js"
import PricingCard from "../PricingCard/PricingCard.jsx"
import './Plan.css';
import educators from "../../assets/5educators.png"

const Plan = () => {
  const [region, setRegion] = useState('Global');

  return (
    <section className="pricing-section">
      <h2>Teach Better. <strong>Less Effort.</strong><br />More Impact.</h2>
      <p>Join thousands of educators across who enhance their teaching with AI powered tools on YoLearn</p>
      <div class="educator-section">
    <img src={educators} alt="5educators" />

</div>

      <div className="region-toggle">
        <button className={region === 'Global' ? 'active' : ''} onClick={() => setRegion('Global')}>Global</button>
        <button className={region === 'India' ? 'active' : ''} onClick={() => setRegion('India')}>India</button>
      </div>

      <div className="pricing-grid">
        {PricingData.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Plan;
