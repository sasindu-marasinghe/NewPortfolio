import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>
            I am a passionate frontend developer currently pursuing my studies at SLIIT University. 
            I have a strong interest in coding, creating intuitive user interfaces, and building responsive 
            web applications that deliver exceptional user experiences.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2024 Sasindu Marasinghe. All rights reserved.</p> 
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>        
    </div>
  );
};

export default Footer;
