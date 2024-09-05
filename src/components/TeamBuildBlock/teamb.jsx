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
      <p className="unlock">Unlock the Potential of Collaboration</p>
      <div className="Parts_block">
        <div className="part first_part">
          <img className="small_icons" src={people} alt="People Icon" />
          <h3>
            Choose Your <br /> Dream Team
          </h3>
          <p>
            Build your ideal workforce by <br /> handpicking skilled
            professionals from <br />
            our diverse pool of talent.
          </p>
        </div>

        <div className="part second_part">
          <div className="text2_cont">
            <h3>
              Seamless <br /> Registration Process
            </h3>
            <p>
              Sign up hassle-free and gain access to a platform <br /> where you
              can showcase your expertise and offer <br /> your services to
              potential clients.
            </p>
            <button>Learn More</button>
          </div>
          <div className="img2_cont">
            <img className="honey_img" src={honey} alt="Honey thing" />
          </div>
        </div>

        <div className="part third_part">
          <div className="text3_cont">
            <h3>Unlock Unlimited Opportunities</h3>
            <p>
              Open doors to endless possibilities by joining our <br />{" "}
              platform, where you can connect with clients,
              <br /> showcase your talents, and grow your business.
            </p>
            <button>Learn More</button>
          </div>
          <div className="img3_cont">
            <img className="brick_img" src={brick} alt="Brick wall" />
          </div>
        </div>
        <div className="part fourth_part">
          <img className="small_icons" src={telega} alt="Telegram icon" />
          <h3>Enhanced Efficiency</h3>
          <p>
            Boost productivity and efficiency by harnessing <br /> the
            collective expertise of our carefully curated <br /> community of
            freelancers and professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teamb;
