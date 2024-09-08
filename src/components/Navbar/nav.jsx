// Navbar.jsx
import React, { useState } from "react";
// import { Link } from "react-router-dom";
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

    const burgerMenuIcon = document.querySelector(".BurgerMenu img");
    if (burgerMenuIcon) {
      burgerMenuIcon.style.display = isOpen ? "block" : "none";
    }

    const navBar = document.querySelector("nav");
    if (navBar) {
      navBar.style.padding = isOpen ? "40px 30px" : "0"; // Приховуємо або повертаємо падінги
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.querySelector("html").style.overflow = "auto";

    const burgerMenuIcon = document.querySelector(".BurgerMenu img");
    if (burgerMenuIcon) {
      burgerMenuIcon.style.display = "block"; // Показуємо іконку знову
    }

    const navBar = document.querySelector("nav");
    if (navBar) {
      navBar.style.padding = "40px 5%"; // Повертаємо стандартні падінги
    }
  };

  return (
    <nav>
      <a className={`Logo_cont ${isOpen ? "hide" : ""}`} href="/">
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
        <li className="CloseIcon" onClick={closeMenu}>
          <img src={closeIcon} alt="Close Icon" />
        </li>
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
        className={`BurgerMenu ${isOpen ? "hide" : ""}`}
        onClick={toggleMenu}>
        <img src={burgerIcon} alt="Burger Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
