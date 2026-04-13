import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./App.tsx";
import Layout from "./Layout.tsx";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
