import React from "react";
import socialHand from "../assets/images/social-hand-icon.svg";
import socialTelegram from "../assets/images/social-telegram-icon.svg";
import socialX from "../assets/images/social-x-icon.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="content footer-c">
        <div className="footer-top">
          <div className="footer-left">
            <a href="mailto:[pepsmoke@gmail.com]" className="email-link">
              <span className="social-link">
                <img src={socialHand} alt="Hand" />
              </span>
              <span>[PEPSMOKE@GMAIL.COM]</span>
            </a>
          </div>
          <div className="footer-right">
            <h4 className="socials-text">
              Socials <span className="column">:</span>
            </h4>
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
          </div>
        </div>
        <div className="footer-links">
          <a
            href="https://ape.store/base/0x9db0db6d0a386beb02f9bf5a583b94111d731b12"
            target="_blank"
            rel="noopener noreferrer"
          >
            ApeStore
          </a>
          {/* <a
            href="https://dexscreener.com/base/0xca12d459d28eb7707614ec09cc62cce4039fc1a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dexscreener
          </a> */}
          <p>CA: 0x4b61E2f1BBDEe6D746209a693156952936F1702C</p>
        </div>
        <div className="footer-btm">
          <p>PEP$MOKE: PUFF, PUFF, PROFIT!</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
