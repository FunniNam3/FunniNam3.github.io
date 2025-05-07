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

function Sushi(props) {
  return (
    <div className="Sushi" hidden={!props.clicked}>
      <div className="Box">
        <div>
          <h1 className="Hi"> SUSHI BUSSIN'</h1>
          <h2 className="Sushi">DESKTOP GAME</h2>
          <img src="Sushi Bussin'.png" className="Sushi" alt="" />
        </div>
        <div className="AbtMe">
          <a className="AbtMe" href="https://reneryt6.itch.io/sushi-bussin">
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

export { Hi, Sushi, Engine12 };
