// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/" className={`Logo_cont ${isOpen ? "hide" : ""}`}>
        <img src={logo} alt="Logo" />
      </Link>

      <ul>
        <li>
          <Link to="/" className="link_anim">
            Home
          </Link>
        </li>
        <li>
          <Link to="/crews" className="link_anim">
            Crews
          </Link>
        </li>
        <li>
          <Link to="/" className="link_anim">
            Support
          </Link>
        </li>
      </ul>
      <div className="nav-action_cont">
        <div className="Search_cont">
          <img className="search_icon" src={searchIcon} alt="Search Icon" />
          <input className="search_inp" placeholder="Search..." type="text" />
        </div>
        <Link to="/login">
          <button className="LogIn">Log in</button>
        </Link>
        <Link to="/register">
          <button className="SignUp">Sign up</button>
        </Link>
      </div>

      <ul className={`NavbarLinks${isOpen ? " open" : ""}`}>
        <li className="CloseIcon" onClick={closeMenu}>
          <img src={closeIcon} alt="Close Icon" />
        </li>
        <li>
          <Link to="/" className="link_anim">
            Home
          </Link>
        </li>
        <li>
          <Link to="/crews" className="link_anim">
            Crews
          </Link>
        </li>
        <li>
          <Link to="/" className="link_anim">
            Support
          </Link>
        </li>
        <Link to="/login">
          <button className="LogIn">Log in</button>
        </Link>
        <Link to="/register">
          <button className="SignUp">Sign Up</button>
        </Link>

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
