import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import Broken from "./Broken.tsx";
import Models from "./Models.tsx";
import CalorieTracker from "./ProjectPages/CalorieTracker.tsx";
import ProjectsPage from "./ProjectPages/ProjectsPage.tsx";
import { RobotArm } from "./ProjectPages/RobotArm/RobotArm.tsx";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/Models" element={<Models />} />
      <Route path="/Projects/Calorie-Tracker" element={<CalorieTracker />} />
      <Route path="/Projects/RobotArm" element={<RobotArm />} />
      <Route path="*" element={<Broken />} />
    </Routes>
  );
}

export default Main;
