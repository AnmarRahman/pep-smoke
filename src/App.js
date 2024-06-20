import React from "react";
import Header from "../src/components/Header.jsx";
import Hero from "../src/components/Hero.jsx";
import Roadmap from "../src/components/Roadmap.jsx";
import Slider from "../src/components/Slider.jsx";
import "./App.css";

function App() {
  return (
    <div className="big-container">
      <div className="container">
        <Header />
        <Hero />
        <Slider />
        <Roadmap />
        {/* <Lambownomics /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
