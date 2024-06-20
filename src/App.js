import React from "react";
import Footer from "../src/components/Footer.jsx";
import Header from "../src/components/Header.jsx";
import Hero from "../src/components/Hero.jsx";
import Lambownomics from "../src/components/Lambownomics.jsx";
import Roadmap from "../src/components/Roadmap.jsx";
import Slider from "../src/components/Slider.jsx";
import Slider2 from "../src/components/Slider2.jsx";
import "./App.css";

function App() {
  return (
    <div className="big-container">
      <div className="container">
        <Header />
        <Hero />
        <Slider />
        <Roadmap />
        <Slider2 />
        <Lambownomics />
        <Footer />
      </div>
    </div>
  );
}

export default App;
