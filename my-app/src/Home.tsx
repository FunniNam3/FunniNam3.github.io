import React from "react";
import Wall from "./images/Wall.svg";
import Project1 from "./images/Project 1.svg";
import Project2 from "./images/Project 2.svg";
import Project3 from "./images/Project 3.svg";
import Arrow from "./images/Arrow.svg";
import "./Home.css";

function Home() {
  return (
    <section className="Center">
      <h1 className="Name">ETHAN NGUYEN</h1>
      <div className="Wall">
        <div className="Buttons">
          <button className="num1">
            <img className="Project-Button" src={Project1} />
          </button>
          <button className="num2">
            <img className="Project-Button" src={Project2} />
          </button>
          <button className="num3">
            <img className="Project-Button" src={Project3} />
          </button>
          <div className="clickMe">
            <h1 className="clickMe"> CLICK ON ME </h1>
            <img className="clickMe" src={Arrow} />
          </div>
        </div>
        <img className="Wall" src={Wall} />
      </div>
      <div className="OverLapBox"></div>
    </section>
  );
}

export default Home;
