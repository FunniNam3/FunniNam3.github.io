import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import Broken from "./Broken.tsx";
import Projects from "./Projects.tsx";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="*" element={<Broken />} />
    </Routes>
  );
}

export default Main;
