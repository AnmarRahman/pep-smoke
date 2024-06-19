import React from "react";
import "../App.css";
import pepsmoke from "../assets/pep-smoke-slider.svg";
import weedslider from "../assets/weed-slider.svg";

const Slider = () => {
  return (
    <div className="slider-container overflow-hidden bg-white">
      <div className="slider-content flex items-center">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="logo-icon-container flex items-center justify-center"
          >
            <img
              src={pepsmoke}
              alt="Logo"
              className="logo h-[20vh] w-[20vw] mx-2 "
            />
            <img
              src={weedslider}
              alt="Weed Icon"
              className="weed-icon h-[20vh] w-[20vw] mx-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
