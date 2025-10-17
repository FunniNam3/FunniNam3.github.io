import React, { useEffect } from "react";
import LinkedIn from "./images/Linkedin.svg";
import Suitcase from "./images/Suitcase.svg";
import PaperClip from "./images/PaperClip.svg";
import "./AboutMe.css";

function AboutMe() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="AboutMe">
      <div className="AboutMe">
        <div className="Personal">
          <div className="Text">
            <h1 className="Hello">HI I'M ETHAN</h1>
            <h2 className="Discribe">
              COMPUTER ENGINEERING STUDENT @ TEXAS A&M UNIVERSITY ‘27
            </h2>
            <p className="Discribe">
              I love sports that don't require hand eye cordination
            </p>
          </div>
          <div className="Socals">
            <a className="Social-Email" href="mailto:nguyen.ev03@gmail.com">
              <img className="Social-Discribe" src={Suitcase} alt="" />
              nguyen.ev03@gmail.com
            </a>
            <div className="LinkRes">
              <a
                className="Social-LinkRes"
                href="https://www.linkedin.com/in/ethan-v-nguyen"
              >
                <img className="Social-Discribe" src={LinkedIn} alt="" />
                LINKEDIN
              </a>
              <a
                className="Social-LinkRes"
                href="https://docs.google.com/document/d/1tAgY0dw4jPYVEkNXJ4KTaeLv23DfrBgvN0l1JGnyhEM/export?format=pdf"
              >
                <img className="Social-Discribe" src={PaperClip} alt="" />
                RESUME
              </a>
            </div>
          </div>
        </div>
        <img className="Face" src="cat.jpeg" alt="" />
      </div>

      <div className="RandomPics">
        <h1 className="Climbing">SOME PICS OF ME CLIMBING</h1>
        <div>
          <img
            className="Climbing1"
            src="Climbing 1.jpg"
            alt="Climbing pic 1"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
