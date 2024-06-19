import React from "react";
import pepsmoke from "../assets/images/pep-smoke-pic.svg";
import splash1 from "../assets/images/splash-1.svg";
import splash2 from "../assets/images/splash-2.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="content hero-c">
        <h1>
          HEY, I'M LAMBOW
          <br />
          THE UNOFFICIAL MASCOT OF BASE
        </h1>
      </div>
      <div className="hero-btm">
        <div className="splash-one">
          <img src={splash1} alt="" />
        </div>
        <div className="hero-animation">
          <img src={pepsmoke} alt="" />
        </div>
        <div className="splash-two">
          <img src={splash2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
