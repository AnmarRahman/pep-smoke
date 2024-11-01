import React from "react";
import "../assets/css/framework.css";
import "../assets/css/normalize.css";
import "../assets/css/style.css";
import socialTelegram from "../assets/images/social-telegram-icon.svg";
import socialX from "../assets/images/social-x-icon.svg";

function Header() {
  return (
    <div className="header">
      <div className="content header-c">
        <div className="header-wr">
          <div className="social-wr">
            <a
              href="https://x.com/ThePepSmoke"
              className="social-link w-inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={socialX} alt="Twitter" />
            </a>
            <a
              href="https://t.me/PEPSMOKE420"
              className="social-link w-inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={socialTelegram} alt="Telegram" />
            </a>
          </div>
          {/* <a href="https://lambow.xyz/" className="w-inline-block">
            <img src={logo} alt="Lambow Logo" />
          </a> */}
          <div className="header-logo">PEP SMOKE</div>
          <a
            href="https://ape.store/base/0x9db0db6d0a386beb02f9bf5a583b94111d731b12"
            className="cta w-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy
          </a>
          {/* <img
            src={cloud1}
            data-w-id="46bc3d18-cf6f-ea20-efa6-4ceed2912f50"
            alt=""
            className="cloud-1"
          /> */}
        </div>
      </div>
      {/* <img
        src={cloud3}
        alt=""
        className="cloud-3"
        data-w-id="baf3ab0e-d5c1-63fe-39a2-b8cdbde6dd6f"
      /> */}
    </div>
  );
}

export default Header;
