import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import RobotArm from "./Projects/RobotArm.tsx";
import Layout from "./Layout.tsx";
import NotFound from "./NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="projects">
            <Route path="robotarm" element={<RobotArm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
