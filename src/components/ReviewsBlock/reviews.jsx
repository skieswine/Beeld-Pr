import React from "react";
import "./reviews.scss";
const twostar = require("../../images/2star.png");
const threestar = require("../../images/3star.png");
const fivestar = require("../../images/5star.png");
const billboard = require("../../images/billboard.png");

const Reviews = () => {
  return (
    <div className="rew_block">
      <h1>
        Our Clients Rave About <br /> Their Experience
      </h1>
      <p className="rew_desription">
        Discover What Makes Our Platform the Go-To <br /> Choice for Exceptional
        Service and Results.
      </p>
      <div className="rew_cont">
        <div className="rew first_rew">
          <img src={fivestar} alt="" />
          <h3>Fantastic Platform!</h3>
          <p>
            "I've used this platform for multiple projects, and <br /> each
            time, I'm blown away by the quality of talent <br /> and the
            seamless process. Highly recommended!"
          </p>
        </div>
        <div className="rew second_rew">
          <img src={fivestar} alt="" />
          <h3>
            Incredible Resource for <br /> Freelancers!
          </h3>
          <p>
            "As a freelancer, finding reliable gigs can be <br /> challenging,
            but this platform has been a game-
            <br />
            changer for me. The support team is responsive, <br /> and I've had
            nothing but positive experiences."
          </p>
        </div>
        <div className="rew thrird_rew">
          <img src={fivestar} alt="" />
          <h3>Efficient and Effective!</h3>
          <p>
            "I was skeptical at first, but after completing a <br /> project
            through this platform, I'm a believer. The <br /> tools provided
            make collaboration easy, and the <br /> results speak for
            themselves. Will definitely be <br /> using again!"
          </p>
        </div>
        <div className="rew fourth_rew">
          <img src={twostar} alt="" />
          <h3>
            Disappointing <br /> Experience
          </h3>
          <p>
            "Unfortunately, my experience with this platform <br /> fell short
            of my expectations. Communication was <br /> lacking, and the
            quality of work delivered was <br /> below par. Hoping for
            improvements in the future."
          </p>
        </div>
        <div className="rew fievth_rew">
          <img src={fivestar} alt="" />
          <h3>Impressive Service!</h3>
          <p>
            "I've worked with several freelancers through this <br /> platform,
            and each time, I'm impressed by their <br /> professionalism and
            expertise. The platform itself is <br /> user-friendly, making the
            entire process a breeze."
          </p>
        </div>
        <div className="rew sixth_rew">
          <img src={twostar} alt="" />
          <h3>Not Worth the Hype</h3>
          <p>
            "I had high hopes for this platform, but it failed to <br />{" "}
            deliver. The talent pool seemed limited, and it was <br /> difficult
            to find someone suitable for my project. <br /> Disappointed
            overall."
          </p>
        </div>
        <div className="rew seventh_rew">
          <img src={fivestar} alt="" />
          <h3>
            Game-Changing <br /> Platform!
          </h3>
          <p>
            "Thanks to this platform, I've been able to expand <br /> my
            business and take on projects I never thought <br /> possible. The
            support from the team is <br /> unparalleled, and I couldn't be
            happier with the <br /> results."
          </p>
        </div>
        <div className="rew eight_rew">
          <img src={threestar} alt="" />
          <h3>Average Experience</h3>
          <p>
            "My experience using this platform was average. <br /> While I was
            able to find someone to complete my <br /> project, the process felt
            somewhat disjointed, and <br /> there were minor issues along the
            way."
          </p>
        </div>
        <div className="rew nineth_rew">
          <img src={fivestar} alt="" />
          <h3>Highly Recommend!</h3>
          <p>
            "If you're looking for a reliable platform to connect <br /> with
            talented professionals, look no further. I've <br /> had multiple
            successful projects completed <br /> through this platform, and I
            couldn't be happier <br />
            with the results."
          </p>
        </div>
      </div>
      <div className="billboard_img">
        <img src={billboard} alt="" />
      </div>
    </div>
  );
};

export default Reviews;
