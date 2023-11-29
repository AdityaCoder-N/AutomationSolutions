import React from "react";
import insta from "../assets/Group 1000004397.svg";

import pin from "../assets/geo-alt-fill.svg";
import phone from "../assets/telephone-fill.svg";
import "../static/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <img src='' alt="Logo" className="footer-logo" />
          <div className="footer-description">
          Explore the future with Synthwave Technologies, your premier destination for avant-garde, personalized tech solutions. Embark on a journey of innovation and technology tailored just for you.
          </div>

          <div className="footer-item address">
            <img src={pin} alt="" style={{ fill: "red" }} className="icon" />
            <div className="md:w-[250px] ">
              Address
            </div>
          </div>
          <div className="footer-item address">
            <img src={phone} alt="" className="icon" />
            <div>Number</div>
          </div>
        </div>

        <div className="footer-section courses">
          <div className="section-heading">Our Services</div>
          <div className="footer-item-container ">
            
            <a className="footer-item" href="/about">
              Workflow Automation
            </a>
            <a className="footer-item" href="/">
              Chatbots / Virtual Assistants
            </a>
            <a className="footer-item" href="/">
              Data Analyst Services
            </a>
            <a className="footer-item" href="/">
              ML/AI Based Services
            </a>

            
          </div>
        </div>
        
        <div className="footer-section courses">
          <div className="section-heading">Quick Links</div>
          <div className="footer-item-container">
            <Link className="footer-item" to="/">
              Home
            </Link>
            <Link className="footer-item" to="/services">
              Our Services
            </Link>
            <Link className="footer-item" to="/about">
              About Us
            </Link>
            <Link className="footer-item" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        

        <div className="footer-section ">
          <div className="section-heading">Follow us on</div>
          <div className="footer-item-container socials">
            
            
            
            <a className="footer-item">
              <img src={insta}></img>
              <div className="social-name">Instagram</div>
            </a>
            
          </div>
        </div>
      </footer>
        <div className="footer-bottom flex flex-col md:flex-row text-[14px]">
            <p> © 2023 Synthwave Solutions Privte Limited. </p>
            <p> All rights reserved.</p>
        </div>

    </>
  );
}

export default Footer
