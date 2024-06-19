import React from "react";
import meetthewoo from "../assets/meet-the-woo.svg";
import pepsmoke from "../assets/pep-smoke-pic.svg";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center p-4 bg-green-200 bg-gradient-to-r from-green-200 to-green-600">
      <img src={meetthewoo} alt="logo" className="" />
      <img src={pepsmoke} alt="logo" className="h-80" />
    </header>
  );
};

export default Hero;
