import React from "react";
import greenCircle from "../assets/images/circle-green.svg";
import whiteCircle from "../assets/images/circle-white.svg";
import pepSmokeCoin from "../assets/images/pep-smoke-coin.svg";

function Lambownomics() {
  return (
    <div className="section-token">
      <div className="content token-c">
        <div className="center-block">
          <h2>SMOKENOMICS</h2>
        </div>
        <div className="token-wr">
          <div className="token-row">
            <div className="token-left">
              <div
                data-w-id="d7dc3358-1c44-b4ee-37d6-57522df4adc9"
                data-is-ix2-target="1"
                data-animation-type="lottie"
                data-src="documents/piechart-1.json"
                data-loop="0"
                data-direction="1"
                data-autoplay="0"
                data-renderer="svg"
                data-default-duration="3.033333333333333"
                data-duration="0"
              ></div>
              <img src={pepSmokeCoin} alt="PEP$MOKE" />
              <h4 className="piechart-heading">
                Total Supply <span className="column">:</span> 1 Billion Tokens
              </h4>
            </div>
            <div className="token-right">
              <div className="token-box">
                <div className="token-inner">
                  <h4>
                    <img src={whiteCircle} alt="Ticker" />
                    Ticker is PEP$MOKE
                  </h4>
                </div>
                <div className="token-inner">
                  <h4>
                    <img src={greenCircle} alt="Supply" />
                    1B Token Supply
                  </h4>
                </div>
                <div className="token-inner">
                  <ul>
                    <li>Fair Launch</li>
                    <li>100% presale -{">"} LP</li>
                    <li>0/0 Taxes</li>
                    <li>Contract Renounced</li>
                    <li>Liquidity burnt</li>
                    <li>⁠1B token supply</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lambownomics;
