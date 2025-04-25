import React from "react";
import "./Projects.css";
import Up from "./images/Cheveron-up.svg";
import Down from "./images/Cheveron-down.svg";
import { useState } from "react";

function Projects() {
  const [Engine12, setEngine12] = useState(false);
  const [Asset, setAsset] = useState(false);
  const [RayTrace, setRayTrace] = useState(false);
  const [Planet, setPlanet] = useState(false);

  return (
    <section className="Projects">
      <h1 className="Projects">Projects</h1>

      <div className="ProjectContainer">
        <div className="ProjectDrop">
          <h2 className="ProjectName">Engine 12</h2>
          <button
            className="ProjectCheveron"
            onClick={() => setEngine12(!Engine12)}
          >
            <img hidden={Engine12} src={Down} alt="Toggle" />
            <img hidden={!Engine12} src={Up} alt="Toggle" />
          </button>
        </div>
        <p hidden={!Engine12}>peepee poopoo</p>
      </div>

      <div className="ProjectContainer">
        <div className="ProjectDrop">
          <h2 className="ProjectName">Asset Management System</h2>
          <button className="ProjectCheveron" onClick={() => setAsset(!Asset)}>
            <img hidden={Asset} src={Down} alt="Toggle" />
            <img hidden={!Asset} src={Up} alt="Toggle" />
          </button>
        </div>
        <p hidden={!Asset}>peepee poopoo</p>
      </div>

      <div className="ProjectContainer">
        <div className="ProjectDrop">
          <h2 className="ProjectName">Raytracing Engine</h2>
          <button
            className="ProjectCheveron"
            onClick={() => setRayTrace(!RayTrace)}
          >
            <img hidden={RayTrace} src={Down} alt="Toggle" />
            <img hidden={!RayTrace} src={Up} alt="Toggle" />
          </button>
        </div>
        <p hidden={!RayTrace}>peepee poopoo</p>
      </div>

      <div className="ProjectContainer">
        <div className="ProjectDrop">
          <h2 className="ProjectName">Procedural Planet Builder</h2>
          <button
            className="ProjectCheveron"
            onClick={() => setPlanet(!Planet)}
          >
            <img hidden={Planet} src={Down} alt="Toggle" />
            <img hidden={!Planet} src={Up} alt="Toggle" />
          </button>
        </div>
        <p hidden={!Planet}>peepee poopoo</p>
      </div>
    </section>
  );
}

export default Projects;
