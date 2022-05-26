import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Get Started</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>MO Data Consulting, LLC <br /> All Rights Reserved.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get In Touch</h4>
        <p>3765 Lindell Blvd. #609 - A <br /> St. Louis, MO 63103</p>
        <p>(504) 722-1425</p>
        <p>josh@modataconsulting.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@ 2022 MO Data Consulting, LLC. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
