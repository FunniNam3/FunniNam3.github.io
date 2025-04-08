import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "./images/Linkedin.svg";
import GitHub from "./images/GitHub.svg";
import PaperClip from "./images/PaperClip.svg";
import Suitcase from "./images/Suitcase.svg";
import Person from "./images/Person.svg";
import "./Header.css";

function Header() {
  return (
    <header className="Social-Wrapper">
      <a className="Social" href="https://www.linkedin.com/in/ethan-v-nguyen">
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
      <a className="Social">
        <img className="Social" src={Suitcase} alt="" />
        PROJECTS
      </a>
      <Link className="Social" to="/AboutMe">
        <img className="Social" src={Person} alt="" />
        ABOUT ME
      </Link>
    </header>
  );
}

export default Header;
