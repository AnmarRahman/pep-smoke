import React from "react";
import "../App.css";
import pepsmoke from "../assets/pep-smoke-slider.svg";
import weedslider from "../assets/weed-slider.svg";

const Slider = () => {
  return (
    <div className="slider-container overflow-hidden bg-white py-[1vh]">
      <div className="slider-content flex items-center">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="logo-icon-container flex items-center justify-center"
          >
            <img src={pepsmoke} alt="Logo" className="h-16" />
            <img src={weedslider} alt="Weed Icon" className="h-16 mx-[2vw]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
