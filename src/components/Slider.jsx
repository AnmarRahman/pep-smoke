import React from "react";
import "../App.css";
import sliderimg from "../assets/images/slider-img-2.svg";

const Slider = ({ direction }) => {
  const sliderDirection =
    direction === "left" ? "slider-direction-left" : "slider-direction-right";
  console.log(sliderDirection);

  return (
    <div className={sliderDirection}>
      {Array(31)
        .fill()
        .map((_, index) => (
          <img src={sliderimg} alt="Logo" className="slider-img" key={index} />
        ))}
    </div>
  );
};

export default Slider;
