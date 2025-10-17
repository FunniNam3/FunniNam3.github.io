import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import Broken from "./Broken.tsx";
import Projects from "./Projects.tsx";
import Models from "./Models.tsx";
import CalorieTracker from "./ProjectPages/CalorieTracker.tsx";
import ProjectTimeline from "./ProjectPages/ProjectTimeline.tsx";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<ProjectTimeline />} />
      <Route path="/Models" element={<Models />} />
      <Route path="/Projects/Calorie-Tracker" element={<CalorieTracker />} />
      <Route path="*" element={<Broken />} />
    </Routes>
  );
}

export default Main;
