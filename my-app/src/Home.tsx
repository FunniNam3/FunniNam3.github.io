import React from "react";
import { useState } from "react";
import Wall from "./images/Wall.svg";
import Project1 from "./images/Project 1.svg";
import Project2 from "./images/Project 2.svg";
import Project3 from "./images/Project 3.svg";
import Arrow from "./images/Arrow.svg";
import "./Home.css";
import Hi from "./SmallContainers.tsx";

function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <section className="Center">
      <h1 className="Name">ETHAN NGUYEN</h1>
      <div className="Wall">
        <div className="Buttons">
          <button className="num1" onClick={() => setClicked(true)}>
            <img className="Project-Button" src={Project1} alt="" />
          </button>
          <button className="num2" onClick={() => setClicked(true)}>
            <img className="Project-Button" src={Project2} alt="" />
          </button>
          <button className="num3" onClick={() => setClicked(true)}>
            <img className="Project-Button" src={Project3} alt="" />
          </button>
          <div className="clickMe" hidden={clicked}>
            <h1 className="clickMe"> CLICK ON ME </h1>
            <img className="clickMe" src={Arrow} alt="" />
          </div>
          <Hi />
        </div>
        <img className="Wall" src={Wall} alt="bigwall" />
      </div>
      <div className="OverLapBox"></div>
    </section>
  );
}

export default Home;
