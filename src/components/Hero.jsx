import React from "react";
import pepsmoke from "../assets/images/pep-smoke-pic.svg";
import splash1 from "../assets/images/splash-1.svg";
import splash2 from "../assets/images/splash-2.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="content hero-c">
        <h1>
          SHOOTING FOR THE STARS
          <br />
          AIMING FOR THE MOON
        </h1>
      </div>
      <div className="hero-btm">
        <div className="splash-one">
          <img src={splash1} alt="" />
        </div>
        <div className="hero-animation">
          <img src={pepsmoke} className="hero-pep-smoke" alt="" />
        </div>
        <div className="splash-two">
          <img src={splash2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
