import React from "react";
import LinkedIn from "./images/Linkedin.svg";
import GitHub from "./images/GitHub.svg";
import PaperClip from "./images/PaperClip.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="FEET">
      <div className="Foot">
        <h2 className="Name">ETHAN NGUYEN ©2025</h2>
        <div className="SocialFeet">
          <a
            className="Social"
            href="https://www.linkedin.com/in/ethan-v-nguyen"
          >
            <img className="Social" src={LinkedIn} alt="" />
            LINKEDIN
          </a>
          <a className="Social" href="https://github.com/FunniNam3">
            <img className="Social" src={GitHub} alt="" />
            GITHUB
          </a>
          <a
            className="Social"
            href="https://docs.google.com/document/d/1tAgY0dw4jPYVEkNXJ4KTaeLv23DfrBgvN0l1JGnyhEM/export?format=pdf"
          >
            <img className="Social" src={PaperClip} alt="" />
            RESUME
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
