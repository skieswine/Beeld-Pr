// Navbar.jsx
import React, { useState } from "react";
import "./nav.scss";
const logo = require("../../images/Logo.png");
const burgerIcon = require("../../images/menu.png");
const closeIcon = require("../../images/close.png");
const searchIcon = require("../../images/search.png");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.querySelector("html").style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.querySelector("html").style.overflow = "auto";
  };

  return (
    <nav>
      <a className="Logo_cont" href="/">
        <img src={logo} alt="Logo" />
      </a>
      <ul>
        <li>
          <a className="link_anim" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="link_anim" href="/">
            Crews
          </a>
        </li>
        <li>
          <a className="link_anim" href="/">
            Support
          </a>
        </li>
      </ul>
      <div className="nav-action_cont">
        <div className="Search_cont">
          <img className="search_icon" src={searchIcon} alt="Search Icon" />
          <input className="search_inp" placeholder="Search..." type="text" />
        </div>
        <button className="LogIn">Log in</button>
        <button className="SignIn">Sign in</button>
      </div>

      <ul className={`NavbarLinks${isOpen ? " open" : ""}`}>
        <div className="CloseIcon" onClick={closeMenu}>
          <img src={closeIcon} alt="Close Icon" />
        </div>
        <li>
          <a className="link_anim" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="link_anim" href="/">
            Crews
          </a>
        </li>
        <li>
          <a className="link_anim" href="/">
            Support
          </a>
        </li>
        <button className="LogIn">Log in</button>
        <button className="SignIn">Sign in</button>
        <div className="Search_cont">
          <img className="search_icon" src={searchIcon} alt="Search Icon" />
          <input className="search_inp" placeholder="Search..." type="text" />
        </div>
      </ul>

      <div
        className={`BurgerMenu${isOpen ? " open" : ""}`}
        onClick={toggleMenu}>
        <img src={burgerIcon} alt="Burger Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
