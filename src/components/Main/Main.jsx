import React from "react";
import "./Main.css";
import curve1 from "../../assets/curve1.svg";
import curve2 from "../../assets/curve2.svg";
import profilephoto from "../../assets/profilephoto.png";
import FirstData from "../../FirstData";
import featureData from "../../featureData";
import FeatureBox from "../featureBox/featureBox";
import Penguin from "../../assets/Penguine.png"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="left">
          <p className="tagline">PLAN</p>
          <h1>Your AI Teaching Assistants Team</h1>
          <p className="subtitle">Smarter planning. Effortless teaching. Exponential impact.</p>
          <p className="description">
            Unlock the power of AI for personalized lesson planning, resource creation, classroom management,
            and student support — all in one intelligent workspace.
          </p>
          <div className="buttons">
            <button className="btn primary">Get started for free →</button>
            <button className="btn secondary">Explore Now</button>
          </div>
        </div>

        <div className="right">
          <div className="circle-bg">
            <img src={profilephoto} alt="Teacher" className="profile-img" />
          </div>
        </div>
      </div>

      <div className="curve-section">
        <img src={curve1} alt="Curve background" className="curve-bg" />

        <div className="overlay-content">
          <h2>Built for Teachers. Powered by AI. Trusted by Schools.</h2>
          <p>
            Any Country, Any curriculum/board, Any Language - Global Platform - Localized solution
          </p>
          
        </div>
      </div>

      <div className="workspace-section">
        <h2>Your AI-Powered Teaching Workspaces</h2>
        <div className="grid">
          {FirstData.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.icon} {item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="links">
                <a href="#">Explore Workspace →</a><br />
                <a href="#">See features</a>
              </div>
            </div>
          ))}
        </div>
        <div className="cta-button">
          <button>Explore Plan Workspace →</button>
        </div>
      </div>

      <img src={curve2} alt="curve2" style={{display:"block"}} />

      <section className="feature-section">
        <h2>Why Teachers <span>♥</span> YoLearn.ai</h2>
        <p className="subheading">
          Explore the AI-powered tools that simplify your day, spark engagement, and save hours of effort.
        </p>
        <div className="feature-grid">
          {featureData.map((item, index) => (
            <FeatureBox key={index} emoji={item.emoji} text={item.text} />
          ))}
        </div>
        <div className="cta-button">
          <button>Get started for free →</button>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
