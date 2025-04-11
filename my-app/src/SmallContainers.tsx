import React from "react";
import { Link } from "react-router-dom";
import LinkArrow from "./images/LinkArrow.svg";
import "./SmallContainers.css";

function Hi() {
  return (
    <div>
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

export default Hi;
