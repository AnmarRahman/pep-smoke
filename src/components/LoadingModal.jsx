import React from "react";
import "../assets/css/style.css";

function LoadingModal() {
  return (
    <div className="loading-modal">
      <div className="loading-spinner"></div>
      <div>Loading...</div>
    </div>
  );
}

export default LoadingModal;
