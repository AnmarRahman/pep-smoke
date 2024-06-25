import React from "react";
import pepSmokeCrouch from "../assets/images/pep-smoke-crouch.svg";
import pepSmokeRocket from "../assets/images/pep-smoke-riding-rocket.svg";
import pepSmokeSitting from "../assets/images/pep-smoke-sitting.svg";

function Roadmap() {
  return (
    <div className="section-body" id="presale">
      <div className="section-presale">
        <div className="content presale-c">
          <div className="center-block">
            <h2>Roadmap</h2>
          </div>
          <div className="roadmap-wr">
            <div className="roadmap-progress">
              <div className="roadmap-progress-inner"></div>
              <div className="step step-1"></div>
              <div className="step step-2"></div>
              <div className="step step-3"></div>
            </div>
            <div className="roadmap-row">
              <div className="roadmap-left">
                <img src={pepSmokeRocket} alt="Phase 1" />
              </div>
              <div className="roadmap-right">
                <h3>Phase 01</h3>
                <div className="roadmap-box">
                  <div className="phase-subtitle">Launch Ape.Store</div>
                  <ul>
                    <li>Listing on ApeStore</li>
                    <li>Website + Socials</li>
                    <li>Influencers + KOLs</li>
                    <li>Promotion + X Spaces</li>
                  </ul>
                  <div className="phase-subtitle">
                    Launch Uniswap at 69k Market Cap
                  </div>
                  <ul>
                    <li>Update Dex</li>
                    <li>Trending</li>
                    <li>Dex Ads</li>
                    <li>KOL</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="roadmap-row">
              <div className="roadmap-left">
                <img
                  className="pep-smoke-crouch"
                  src={pepSmokeCrouch}
                  alt="Phase 2"
                />
              </div>
              <div className="roadmap-right">
                <h3>Phase 02</h3>
                <div className="roadmap-box">
                  <ul>
                    <li>DEXTOOLS</li>
                    <li>Moontok</li>
                    <li>Community Contests</li>
                    <li>Revamp website</li>
                    <li>Dexview</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="roadmap-row">
              <div className="roadmap-left">
                <img src={pepSmokeSitting} alt="Phase 3" />
              </div>
              <div className="roadmap-right">
                <h3>Phase 03</h3>
                <div className="roadmap-box">
                  <ul>
                    <li>Coinmarket Cap</li>
                    <li>Coin Gecko</li>
                    <li>Partnerships</li>
                    <li>5M MCAP first CEX</li>
                    <li>10M more CEX listings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="animation-jump" style={{ display: "none" }}>
              <div
                data-w-id="c2be8500-641b-5fa9-bbce-3ecc6829bf2e"
                data-animation-type="lottie"
                data-src="documents/section1.json"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="svg"
                data-default-duration="4"
                data-duration="0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
