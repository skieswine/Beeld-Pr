import React from "react";
import "./expirience.scss";
const expgalery = require("../../images/galery.png");

const Expirience = () => {
  return (
    <div className="exp_cont">
      <h1>
        Experience the Success of Over <br /> 100+ Completed Projects
      </h1>
      <div className="expimg_cont">
        <img src={expgalery} alt="" />
      </div>
    </div>
  );
};

export default Expirience;
