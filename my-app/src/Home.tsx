import { useEffect } from "react";
import { useState } from "react";
import Wall from "./images/Wall.svg";
import Project1 from "./images/Project 1.svg";
import Project2 from "./images/Project 2.svg";
import Project3 from "./images/Project 3.svg";
import Arrow from "./images/Arrow.svg";
import "./Home.css";
import { Hi, Sushi, Engine12 } from "./SmallContainers.tsx";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  return (
    <section className="Center">
      <h1 className="Name">ETHAN NGUYEN</h1>
      <div className="Wall">
        <div className="Buttons">
          <button
            className="num1"
            onClick={() => {
              setClicked1(!clicked1);
              setClicked2(false);
              setClicked3(false);
            }}
          >
            <img className="Project-Button" src={Project1} alt="" />
          </button>
          <button
            className="num2"
            onClick={() => {
              setClicked2(!clicked2);
              setClicked1(false);
              setClicked3(false);
            }}
          >
            <img className="Project-Button" src={Project2} alt="" />
          </button>
          <button
            className="num3"
            onClick={() => {
              setClicked3(!clicked3);
              setClicked1(false);
              setClicked2(false);
            }}
          >
            <img className="Project-Button" src={Project3} alt="" />
          </button>
          <div className="clickMe" hidden={clicked1}>
            <h1 className="clickMe"> CLICK ON ME </h1>
            <img className="clickMe" src={Arrow} alt="" />
          </div>
          <Hi clicked={clicked1} />
          <Sushi clicked={clicked2} />
          <Engine12 clicked={clicked3} />
        </div>
        <img className="Wall" src={Wall} alt="bigwall" />
      </div>
      <div className="OverLapBox"></div>
    </section>
  );
}

export default Home;
