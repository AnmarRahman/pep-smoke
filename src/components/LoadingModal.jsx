import React from "react";
import "../assets/css/style.css";
import loadingText from "../assets/images/Loading-text.svg";
import vinyl from "../assets/images/vinyl.svg";

function LoadingModal() {
  return (
    <div className="loading-modal">
      <img src={vinyl} alt="Loading..." className="loading-spinner" />
      <img src={loadingText} alt="Loading..." className="loading-text" />
    </div>
  );
}

export default LoadingModal;
