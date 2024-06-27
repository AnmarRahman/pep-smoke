import React from "react";
import musicnotes from "../assets/images/music-notes.svg";
import coinstack from "../assets/images/pep-smoke-coin-stack.svg";
import pepsmoke from "../assets/images/pep-smoke-pic.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="content hero-c">
        <h1>
          PepSmoke combines the spirit of Pepe the Frog and Pop Smoke to create
          a unique community where music and crypto enthusiasts unite. Our
          mission is to offer artists a platform to showcase their talents
          without fear of cancellation and provide a secure environment for
          crypto lovers to invest without worrying about pump and dump schemes.
          Join us and be part of a revolutionary space where creativity and
          financial security thrive together.
        </h1>
      </div>
      <div className="hero-btm">
        <div className="splash-one">
          <img src={coinstack} alt="" />
        </div>
        <div className="hero-animation">
          <img src={pepsmoke} className="hero-pep-smoke" alt="" />
        </div>
        <div className="splash-two">
          <img src={musicnotes} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
