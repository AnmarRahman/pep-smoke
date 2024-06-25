import React from "react";
import Footer from "../src/components/Footer.jsx";
import Header from "../src/components/Header.jsx";
import Hero from "../src/components/Hero.jsx";
import Roadmap from "../src/components/Roadmap.jsx";
import Slider from "../src/components/Slider.jsx";
import "./App.css";
import AboutUs from "./components/AboutUs.jsx";
import Smokenomics from "./components/Smokenomics.jsx";

function App() {
  return (
    <div className="big-container">
      <div className="container">
        <Header />
        <Hero />
        <Slider direction="left" />
        <AboutUs />
        <Slider direction="right" />
        <Roadmap />
        <Slider direction="left" />
        <Smokenomics />
        <Footer />
      </div>
    </div>
  );
}

export default App;
