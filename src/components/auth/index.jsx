import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Log from "./login/log.jsx";
import Reg from "./register/reg";

const AuthRootComponent = () => {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (location.pathname === "/login" || location.pathname === "/register") {
      if (navbar) {
        navbar.style.display = "none"; // Скрываем nav
      }
    } else {
      if (navbar) {
        navbar.style.display = "block"; // Показываем nav, если не на страницах логина или регистрации
      }
    }
  }, [location]);

  return location.pathname === "/login" ? (
    <Log />
  ) : location.pathname === "/register" ? (
    <Reg />
  ) : null;
};

export default AuthRootComponent;
