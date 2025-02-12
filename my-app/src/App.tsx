import React from "react";
import LinkedIn from "./images/Linkedin.svg";
import GitHub from "./images/GitHub.svg";
import PaperClip from "./images/PaperClip.svg";
import Suitcase from "./images/Suitcase.svg";
import Person from "./images/Person.svg";
import "./App.css";

function App() {
  document.title = "Ethan Nguyen - Portfolio";
  document.bgColor = "#FDF3E6";
  return (
    <div className="App">
      <link rel="stylesheet"></link>
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
        <a className="Social">
          <img className="Social" src={Person} alt="" />
          ABOUT ME
        </a>
      </header>

      <section>
        <h1 className="Name">ETHAN NGUYEN</h1>
        <div className="Wall">
          <div className="WallInline">
            <div className="WallOutline" />
          </div>
        </div>
      </section>

      <section className="FEET">
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
      </section>
    </div>
  );
}

export default App;
