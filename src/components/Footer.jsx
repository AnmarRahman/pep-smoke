import React from "react";
import socialTelegram from "../assets/images/social-telegram-icon.svg";
import socialX from "../assets/images/social-x-icon.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="content footer-c">
        <div className="footer-top">
          <div className="footer-left">
            <a href="mailto:[email protected]" className="email-link">
              <span className="social-link">
                <img src={socialX} alt="Hand" />
              </span>
              <span>[email protected]</span>
            </a>
          </div>
          <div className="footer-right">
            <h4>Socials:</h4>
            <div className="social-wr">
              <a
                href="https://twitter.com/basedlambow"
                className="social-link w-inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialX} alt="Twitter" />
              </a>
              <a
                href="https://t.me/lambowxyz"
                className="social-link w-inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialTelegram} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <a
            href="https://www.dextools.io/app/en/base/pair-explorer/0xca12d459d28eb7707614ec09cc62cce4039fc1a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEXTools
          </a>
          <a
            href="https://dexscreener.com/base/0xca12d459d28eb7707614ec09cc62cce4039fc1a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dexscreener
          </a>
          <p>CA: 0x4b61E2f1BBDEe6D746209a693156952936F1702C</p>
        </div>
        <div className="footer-btm">
          <p>
            DISCLAIMER: $LAMBOW has no value, made for fans. Lambow is not an
            investment, it's a meme coin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
