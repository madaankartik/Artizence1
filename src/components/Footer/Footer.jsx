import React from "react";
import "./Footer.css";
import Logo from "../../assets/NoBackGroundLogo.png"
import { 
  FaXTwitter, 
  FaLinkedin, 
  FaYoutube, 
  FaTelegram, 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaPinterest 
} from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-header">
          <div className="footer-logo">
            <h2><img src={Logo} alt="logo" /></h2>
            <p>AI powered learning. Beyond Limits.</p>
            <div className="footer-icons">
         
              <a href="#"><i><FaXTwitter size={15}/></i></a>
              <a href="#"><i><FaLinkedin size={15}/></i></a>
              <a href="#"><i><FaYoutube size={15}/></i></a>
              <a href="#"><i><FaTelegram size={15}/></i></a>
              <a href="#"><i><FaWhatsapp size={15}/></i></a>
              <a href="#"><i><FaFacebook size={15}/></i></a>
              <a href="#"><i><FaInstagram size={15}/></i></a>
              <a href="#"><i><FaPinterest  size={15}/></i></a>
            </div>
          </div>
          <div className="footer-about">
            <h3>Empowering Learning with AI –<br/> For Students, Teachers & Institutions</h3>
            <p>
              YoLearn.ai is an AI-powered learning platform designed to enhance
              education for students, teachers, and institutions across the globe.
              From personalized AI tutors to school-wide curriculum tools – YoLearn
              makes education smarter and more accessible.
            </p>
            <p>
              ✅ ISO Certified &nbsp;&nbsp;
              📘 NEP-Aligned &nbsp;&nbsp;
              🛡️ Data Privacy Compliant
            </p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Sitemap</h3>
            <p>Tools</p>
            <p>Studios</p>
            <p>Assistants</p>
          </div>
          <div>
            <h3>Company</h3>
            <p>About</p>
            <p>Career</p>
            <p>Contact</p>
          </div>
          <div>
            <h3>Legal</h3>
            <p>Terms & conditions</p>
            <p>Privacy Policy</p>
            <p>Data Policy</p>
          </div>
          <div>
            <h3>Socials</h3>
            <p>X (Twitter)</p>
            <p>LinkedIn</p>
            <p>YouTube</p>
            <p>WhatsApp Channel</p>
          </div>
          <div className="forstudents">
            <p>For Students</p>
            <p>For Teachers</p>
            <p>For Schools</p>
            <p>For Organizations</p>
            <p>Resources</p>
            <p>Pricing</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          All educational content, AI tutors, and institutional tools are intended
          for learners of appropriate age groups and verified educator use.
          YoLearn.ai follows national and international education safety standard.
        </p>
        <div className="footer-bottom-links">
          <p>© 2025 AI.YoLearn Private Limited. All rights reserved.</p>
          <div className="footer-policy-links">
            <p>Terms of Use</p>
            <p>Cookie Policy</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
