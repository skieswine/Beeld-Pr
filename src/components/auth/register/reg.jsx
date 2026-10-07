import React from "react";
import "../authstyles.scss";
import { Link } from "react-router-dom";
const darklogo = require("../../../images/darklogo.png");
const google = require("../../../images/googleicon.png");

const Reg = () => {
  return (
    <div className="auth reg_cont">
      <div className="dlogo_cont"></div>
      <Link to="/" className="dlogo_link">
        <img className="dark_logo" src={darklogo} alt="Logo" />
      </Link>

      <div className="form reg_form">
        <h4>Sign Up</h4>
        <h6>Full Name</h6>
        <div className="inp name_inp">
          <input placeholder="Your Name" type="text" />
        </div>
        <h6>Email or Phone number</h6>
        <div className="inp tel_email_inp">
          {" "}
          <input
            id="emailOrPhone"
            placeholder="name@domain.com or (555) 555-1234"
            type="text"
          />
        </div>

        <h6>Password</h6>
        <div className="inp pass_inp">
          <input placeholder="6+ characters" type="password" />
          <img src="" alt="" />
        </div>

        <a className="forg_pass" href="/">
          Forgot password?
        </a>

        <button className="signup_btn">Sign Up</button>
        <p className="signup_descrip">
          By creating an account you agree with our Terms of Service <br />{" "}
          and Privacy Policy.
        </p>
        <div className="gauth_cont">
          <button className="google_btn">
            <img src={google} alt="" />
            Sign up with Google
          </button>
        </div>

        <div className="no_acc">
          <p>Already have an account?</p>
          <Link className="sign_link" to="/login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reg;
