import React, { useEffect } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Up from "./images/Cheveron-up.svg";
import Down from "./images/Cheveron-down.svg";
import LinkArrow from "./images/LinkArrow.svg";
import { useState } from "react";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [Modeling, setModeling] = useState(false);
  const [Engine12, setEngine12] = useState(false);
  const [Sushi, setSushi] = useState(false);
  const [RayTrace, setRayTrace] = useState(false);
  const [Calorie, setCalorie] = useState(false);

  return (
    <section className="Projects">
      <h1 className="Projects">Projects</h1>

      <button
        className="ProjectContainer"
        onClick={() => setModeling(!Modeling)}
      >
        <div className="ProjectDrop">
          <h2 className="ProjectName">Modeling Renderings</h2>
          <div className="ProjectCheveron">
            <img
              className="Cheveron"
              hidden={Modeling}
              src={Down}
              alt="Toggle"
            />
            <img
              className="Cheveron"
              hidden={!Modeling}
              src={Up}
              alt="Toggle"
            />
          </div>
        </div>
        {!Modeling && (
          <div className="ProjectDescription">
            <div className="ProjectText">
              <p className="ProjectDescription">
                Just a page containing all of the 3D models that I have record
                of. (and can show)
                <br />
                <br />
                <br />
                please look at them I promise they're cool
              </p>
              <Link className="ProjectLink" to="/Models">
                VIEW Models
                <img src={LinkArrow} className="LinkArrow" alt="" />
              </Link>
            </div>
            <img className="Modeling" src="modeling/Yellow Egg.jpg" alt="" />
          </div>
        )}
      </button>

      <button className="ProjectContainer" onClick={() => setCalorie(!Calorie)}>
        <div className="ProjectDrop">
          <h2 className="ProjectName">Calorie Tracker</h2>
          <div className="ProjectCheveron">
            <img
              className="Cheveron"
              hidden={Calorie}
              src={Down}
              alt="Toggle"
            />
            <img className="Cheveron" hidden={!Calorie} src={Up} alt="Toggle" />
          </div>
        </div>
        {!Calorie && (
          <div className="ProjectDescription">
            <div className="ProjectText">
              <p className="ProjectDescription">
                A Caloire Tracker for I am coding and designing for my
                girlfriend and I. Currently developing for android but will move
                to ios afterwards. <br />
                <br /> Using Sqlite, React-native, and a lot of suffering.
              </p>
              <a
                className="ProjectLink"
                href="https://github.com/aggie-coding-club/Engine-12"
              >
                VIEW PROJECT
                <img src={LinkArrow} className="LinkArrow" alt="" />
              </a>
            </div>
            <img className="Calorie" src="Calorie Tracker.png" alt="" />
          </div>
        )}
      </button>

      <button
        className="ProjectContainer"
        onClick={() => setEngine12(!Engine12)}
      >
        <div className="ProjectDrop">
          <h2 className="ProjectName">Engine 12</h2>
          <div className="ProjectCheveron">
            <img
              className="Cheveron"
              hidden={Engine12}
              src={Down}
              alt="Toggle"
            />
            <img
              className="Cheveron"
              hidden={!Engine12}
              src={Up}
              alt="Toggle"
            />
          </div>
        </div>
        {!Engine12 && (
          <div className="ProjectDescription">
            <div className="ProjectText">
              <p className="ProjectDescription">
                A 3D game engine that aims to be convenient and lightweight,
                using OpenGL for rendering. We are also aiming for an
                OS-agnostic development experience. Meaning, regardless if you
                are on Windows, Linux, or even MacOS, you can contribute to the
                project.
              </p>
              <a
                className="ProjectLink"
                href="https://github.com/aggie-coding-club/Engine-12"
              >
                VIEW PROJECT
                <img src={LinkArrow} className="LinkArrow" alt="" />
              </a>
            </div>
            <img className="Engine12" src="Engine 12.png" alt="" />
          </div>
        )}
      </button>

      <button className="ProjectContainer" onClick={() => setSushi(!Sushi)}>
        <div className="ProjectDrop">
          <h2 className="ProjectName">Sushi Bussin'</h2>
          <div className="ProjectCheveron">
            <img className="Cheveron" hidden={Sushi} src={Down} alt="Toggle" />
            <img className="Cheveron" hidden={!Sushi} src={Up} alt="Toggle" />
          </div>
        </div>
        {!Sushi && (
          <div className="ProjectDescription">
            <div className="ProjectText">
              <p className="ProjectDescription">
                A cute 2D game set in a Japanese restaurant. The player takes
                the role of a restaurant busboy who needs to clear and clean
                customer tables quickly. Many customers leave behind items, and
                it is also the busboy's job to keep these items safe in the
                restaurant inventory so the item can be returned later. If time
                runs out before the player is finished, they will get fired and
                lose the game!!
              </p>
              <a
                className="ProjectLink"
                href="https://reneryt6.itch.io/sushi-bussin"
              >
                VIEW PROJECT
                <img src={LinkArrow} className="LinkArrow" alt="" />
              </a>
            </div>
            <img className="Sushi" src="Sushi Bussin'.png" alt="" />
          </div>
        )}
      </button>

      <button
        className="ProjectContainer"
        onClick={() => setRayTrace(!RayTrace)}
      >
        <div className="ProjectDrop">
          <h2 className="ProjectName">Custom RayTracer</h2>
          <div className="ProjectCheveron">
            <img
              className="Cheveron"
              hidden={RayTrace}
              src={Down}
              alt="Toggle"
            />
            <img
              className="Cheveron"
              hidden={!RayTrace}
              src={Up}
              alt="Toggle"
            />
          </div>
        </div>
        {!RayTrace && (
          <div className="ProjectDescription">
            <div className="ProjectText">
              <p className="ProjectDescription">
                Built a custom Raytracer in Unity to learn shader language and
                to eventually implement it into Engine 12. Inspiration from: Ray
                Tracing The Next Week by Peter Shirley, Trevor David Black,
                Steve Hollasch, and most of the early code was incorporated from
                Sebastian Lague's raytracing videos
              </p>
              <a
                className="ProjectLink"
                href="https://github.com/FunniNam3/Ray-Tracer/releases/tag/v1.0.0"
              >
                VIEW PROJECT
                <img src={LinkArrow} className="LinkArrow" alt="" />
              </a>
            </div>
            <img src="RayTracer.png" alt="" className="RayTracer" />
          </div>
        )}
      </button>
    </section>
  );
}

export default Projects;
