import React from "react";
import("./teamb.scss");
const people = require("../../images/people.png");
const honey = require("../../images/honeycomb.png");
const brick = require("../../images/brick.png");
const telega = require("../../images/send.png");

const Teamb = () => {
  return (
    <div className="team_block">
      <h1>
        Empower Your Projects with Our <br /> Team Building Platform
      </h1>
      <p>Unlock the Potential of Collaboration</p>
      <div className="Parts_block">
        <div className="first_part">
          <img src={people} alt="People Icon" />
          <h3>Choose Your Dream Team</h3>
          <p>
            Build your ideal workforce by handpicking skilled professionals from
            our diverse pool of talent.
          </p>
        </div>
        <div className="second_part">
          <h3>Seamless Registration Process</h3>
          <p>
            Sign up hassle-free and gain access to a platform where you can
            showcase your expertise and offer your services to potential
            clients.
          </p>
          <button>Learn More</button>
          <img src={honey} alt="Honey thing" />
        </div>
        <div className="third_part">
          <h3>Unlock Unlimited Opportunities</h3>
          <p>
            Open doors to endless possibilities by joining our platform, where
            you can connect with clients, showcase your talents, and grow your
            business.
          </p>
          <button>Learn More</button>
          <img src={brick} alt="Brick wall" />
        </div>
        <div className="fourth_part">
          <img src={telega} alt="Telegram icon" />
          <h3>Enhanced Efficiency</h3>
          <p>
            Boost productivity and efficiency by harnessing the collective
            expertise of our carefully curated community of freelancers and
            professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teamb;
