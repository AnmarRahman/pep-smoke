import React from "react";
import greenCircle from "../assets/images/circle-green.svg";
import collage1 from "../assets/images/collage-1.svg";
import collage2 from "../assets/images/collage-2.png";
import collage3 from "../assets/images/collage-3.png";
import collage4 from "../assets/images/collage-4.png";

function AboutUs() {
  return (
    <div className="section-token">
      <div className="content token-c">
        <div className="center-block">
          <h2>ABOUT US</h2>
        </div>
        <div className="token-wr">
          <div className="token-row">
            <div className="token-left">
              <img src={collage1} alt="PEP$MOKE" />
              <h4 className="piechart-heading">
                I’m up in all the stores<br></br> When it rains it pours
              </h4>
            </div>
            <div className="token-right">
              <div className="token-box">
                <div className="token-inner">
                  <h4>
                    <img src={greenCircle} alt="Ticker" />
                    PepSmoke: Pepe The Frog x Pop Smoke
                  </h4>
                </div>
                <div className="token-inner">
                  PepSmoke is the embodiment of the internet icon Pepe The Frog
                  and the legendary hip-hop artist Pop Smoke. Our vision is to
                  create a vibrant community for music lovers of all genres, not
                  just hip-hop. We celebrate the diversity of music from all
                  corners of the globe, providing a platform where listeners can
                  explore and appreciate how music sounds worldwide.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="token-wr">
          <div className="token-row">
            <div className="token-right">
              <div className="token-box">
                <div className="token-inner">
                  <h4>
                    <img src={greenCircle} alt="Ticker" />
                    Our Mission
                  </h4>
                </div>
                <div className="token-inner">
                  We are a small but dedicated team, united by our passion for
                  music and our commitment to building a safe and inclusive
                  community. Having faced numerous challenges and setbacks
                  ourselves, we understand the importance of trust and security.
                  Our mission is to create a space where everyone feels safe to
                  express themselves and grow together.
                </div>
              </div>
            </div>
            <div className="token-left">
              <img src={collage2} alt="PEP$MOKE" />
              <h4 className="piechart-heading">
                Living life fast, can't hit the breaks
              </h4>
            </div>
          </div>
        </div>
        <div className="token-wr">
          <div className="token-row">
            <div className="token-left">
              <img src={collage3} alt="PEP$MOKE" />
              <h4 className="piechart-heading">
                You're the missing piece I've been searching for
              </h4>
            </div>
            <div className="token-right">
              <div className="token-box">
                <div className="token-inner">
                  <h4>
                    <img src={greenCircle} alt="Ticker" />
                    Join Our Community
                  </h4>
                </div>
                <div className="token-inner">
                  Are you an upcoming artist looking to showcase your talent?
                  Join our Telegram group! It's a space where aspiring artists
                  can share their work, connect with like-minded individuals,
                  and potentially collaborate with others in the music industry.
                  Our community is open to all, fostering creativity and mutual
                  support among artists and music enthusiasts alike.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="token-wr">
          <div className="token-row">
            <div className="token-right">
              <div className="token-box">
                <div className="token-inner">
                  <h4>
                    <img src={greenCircle} alt="Ticker" />
                    Collaboration and Growth
                  </h4>
                </div>
                <div className="token-inner">
                  At PepSmoke, we believe in the power of collaboration. We are
                  not here to lead but to work alongside those who share our
                  vision. We invite anyone who is passionate about music and
                  community-building to join us on this journey. Together, we
                  can create something truly special and help each other thrive.
                </div>
              </div>
            </div>
            <div className="token-left">
              <img src={collage4} alt="PEP$MOKE" />
              <h4 className="piechart-heading">
                You and me, we're a perfect match<br></br> like a lock and key
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
