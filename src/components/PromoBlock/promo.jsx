import React from "react";
import "./promo.scss";
const promoIMG = require("../../images/promoImg.png");

const Promo = () => {
  return (
    <>
      <div className="promo_block">
        <button className="promo_btn">Over 100 ready to work crews</button>
        <h1>
          Find Your Perfect Home Repair Team <br /> or Offer Your Services
          Easily!
        </h1>

        <p>
          Our platform effortlessly connects homeowners with skilled workers for
          hassle-free <br /> repairs and renovations, streamlining the process
          for everyone involved.
        </p>

        <button className="getstart_btn">Get Started</button>
      </div>

      <div className="promo_img">
        <img className="primage" href="/" src={promoIMG} alt="PromoImage" />
      </div>
    </>
  );
};

export default Promo;
