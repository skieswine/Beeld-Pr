import React from "react";
import { useLocation } from "react-router-dom";
import Log from "./login/log.jsx";
import Reg from "./register/reg";

const AuthRootComponent = () => {
  const location = useLocation();

  return location.pathname === "/login" ? (
    <Log />
  ) : location.pathname === "/register" ? (
    <Reg />
  ) : null;
};

export default AuthRootComponent;
