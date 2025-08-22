import React from "react";
import { Link } from "react-router-dom";
import LinkArrow from "./images/LinkArrow.svg";
import "./SmallContainers.css";

function Hi(props) {
  return (
    <div className="Hi" hidden={!props.clicked}>
      <div className="Box">
        <div>
          <h1 className="Hi"> Hi there</h1>
          <p className="Hi">
            I’ve worked on game development, compute shaders, and application
            development. I also really like rock climbing :)
          </p>
        </div>
        <div className="AbtMe">
          <Link to="/AboutMe" className="AbtMe">
            About Me
            <img src={LinkArrow} className="LinkArrow" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Calorie(props) {
  return (
    <div className="Calorie" hidden={!props.clicked}>
      <div className="Box">
        <div
          style={{
            justifyItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 className="Hi">Calorie Tracker</h1>
          <img src="Calorie Tracker.png" className="Calorie" alt="" />
        </div>
        <div className="AbtMe">
          <a
            className="AbtMe"
            href="https://github.com/FunniNam3/Calorie_Tracker"
          >
            VIEW PROJECT
            <img src={LinkArrow} className="LinkArrow" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Engine12(props) {
  return (
    <div className="Engine12" hidden={!props.clicked}>
      <div className="Box">
        <div>
          <h1 className="Hi"> ENGINE 12</h1>
          <h2 className="Sushi"> GAME ENGINE APP</h2>
          <img src="Engine 12.png" alt="" className="Engine" />
        </div>
        <div className="AbtMe">
          <a
            className="AbtMe"
            href="https://github.com/aggie-coding-club/Engine-12"
          >
            VIEW PROJECT
            <img src={LinkArrow} className="LinkArrow" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export { Hi, Calorie as Sushi, Engine12 };
