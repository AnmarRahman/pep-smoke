import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
import Footer from "../src/components/Footer.jsx";
import Header from "../src/components/Header.jsx";
import Hero from "../src/components/Hero.jsx";
import Roadmap from "../src/components/Roadmap.jsx";
import Slider from "../src/components/Slider.jsx";
import "./App.css";
import AboutUs from "./components/AboutUs.jsx";
import LoadingModal from "./components/LoadingModal";
import Smokenomics from "./components/Smokenomics.jsx";

// Import images directly
import circleGreenPng from "../src/assets/images/circle-green.png";
import circleGreenSvg from "../src/assets/images/circle-green.svg";
import circleWhitePng from "../src/assets/images/circle-white.png";
import circleWhiteSvg from "../src/assets/images/circle-white.svg";
import collage1Svg from "../src/assets/images/collage-1.svg";
import collage2Png from "../src/assets/images/collage-2.png";
import collage3Png from "../src/assets/images/collage-3.png";
import collage4Png from "../src/assets/images/collage-4.png";
import musicNotesSvg from "../src/assets/images/music-notes.svg";
import newYorkSkyline2Svg from "../src/assets/images/newyork-skyline2.svg";
import pepSmokeCoinStackSvg from "../src/assets/images/pep-smoke-coin-stack.svg";
import pepSmokeCoinSvg from "../src/assets/images/pep-smoke-coin.svg";
import pepSmokeCrouchSvg from "../src/assets/images/pep-smoke-crouch.svg";
import pepSmokeGoldBagsSvg from "../src/assets/images/pep-smoke-gold-bags.svg";
import pepSmokeLogoSvg from "../src/assets/images/pep-smoke-logo.svg";
import pepSmokePicSvg from "../src/assets/images/pep-smoke-pic.svg";
import pepSmokeRidingRocketSvg from "../src/assets/images/pep-smoke-riding-rocket.svg";
import pepSmokeSittingSvg from "../src/assets/images/pep-smoke-sitting.svg";
import pepSmokeVinylGif from "../src/assets/images/pep-smoke-vinyl.gif";
import sliderImg2Svg from "../src/assets/images/slider-img-2.svg";
import socialHandIconSvg from "../src/assets/images/social-hand-icon.svg";
import socialTelegramIconSvg from "../src/assets/images/social-telegram-icon.svg";
import socialXIconSvg from "../src/assets/images/social-x-icon.svg";
import splash1Svg from "../src/assets/images/splash-1.svg";
import starSkySvg from "../src/assets/images/star-sky.svg";
import vinyl from "../src/assets/images/vinyl.svg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Load fonts
    WebFont.load({
      custom: {
        families: ["Brother", "Brightsight 02"],
        urls: ["/assets/css/style.css"],
      },
      active: () => {
        setFontsLoaded(true);
      },
    });

    // Function to preload images
    const preloadImages = (imageUrls) => {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then(() => setImagesLoaded(true))
        .catch((err) => console.error("Failed to load images", err));
    };

    // Add the URLs of the images you want to preload
    const imageUrls = [
      circleGreenPng,
      circleGreenSvg,
      circleWhitePng,
      circleWhiteSvg,
      collage1Svg,
      collage2Png,
      collage3Png,
      collage4Png,
      musicNotesSvg,
      newYorkSkyline2Svg,
      pepSmokeCoinStackSvg,
      pepSmokeCoinSvg,
      pepSmokeCrouchSvg,
      pepSmokeGoldBagsSvg,
      pepSmokeLogoSvg,
      pepSmokePicSvg,
      pepSmokeRidingRocketSvg,
      pepSmokeSittingSvg,
      pepSmokeVinylGif,
      sliderImg2Svg,
      socialHandIconSvg,
      socialTelegramIconSvg,
      socialXIconSvg,
      splash1Svg,
      vinyl,
      starSkySvg,
    ];

    preloadImages(imageUrls);
  }, []);

  useEffect(() => {
    if (fontsLoaded && imagesLoaded) {
      const minLoadingTime = 3000; // Minimum loading time of 3 seconds
      const startTime = Date.now();

      const checkLoadingTime = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= minLoadingTime) {
          setIsLoading(false);
        } else {
          setTimeout(checkLoadingTime, minLoadingTime - elapsedTime);
        }
      };

      checkLoadingTime();
    }
  }, [fontsLoaded, imagesLoaded]);

  return (
    <div>
      {isLoading && <LoadingModal />}
      {!isLoading && (
        <div className="big-container">
          <div className="container">
            <div className="header-hero">
              <Header />
              <Hero />
              <Slider direction="left" />
            </div>
            <AboutUs />
            <Slider direction="right" />
            <Roadmap />
            <Slider direction="left" />
            <Smokenomics />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
