import React from "react";
import "./footer.scss";
const logo = require("../../images/Logo.png");
const linkedin = require("../../images/Linkedin.png");
const facebook = require("../../images/facebook.png");
const twiter = require("../../images/Twitter.png");

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <a className="logo_footer" href="/">
            <img src={logo} alt="Logo" />
          </a>
          <p className="Phone_numb">+38 (068) 123-46-67</p>
          <p className="Email_exmp">beeld@gmail.com</p>
        </div>
        <div className="footer-column">
          <h3 className="Headlines">Navigation</h3>
          <ul>
            <li className="footer_li">
              <a href="/">Home</a>
            </li>
            <li className="footer_li">
              <a href="/">Crews</a>
            </li>
            <li className="footer_li">
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="Headlines">Legal</h3>
          <ul>
            <li className="footer_li">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="footer_li">
              <a href="/">Terms&Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="Headlines">Subscribe</h3>
          <input
            className="input_email"
            type="email"
            placeholder="youremail@mail.com"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="/">
            <img className="social_icons" src={linkedin} alt="LinkedIn" />
          </a>
          <a href="/">
            <img className="social_icons" src={facebook} alt="Facebook" />
          </a>
          <a href="/">
            <img className="social_icons" src={twiter} alt="Twitter" />
          </a>
        </div>
        <p>© 2020 Lift Media. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
