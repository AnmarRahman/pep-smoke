import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Slider from "./components/Slider.jsx";

function App() {
  return (
    <div className="bg-lime-300">
      <Header />
      <Hero />
      <Slider />
    </div>
  );
}

export default App;
