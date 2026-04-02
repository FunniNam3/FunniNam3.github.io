import { useState, useEffect } from "react";
import { Timeline, TimelineItemData } from "./Timeline/Timeline.tsx";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const [data, setData] = useState<TimelineItemData[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/TimelineData.json");
        if (!response.ok) throw new Error(`Failed to load TimelineData.json`);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Error loading timeline data:", err);
      }
    }

    loadData();
  }, []);

  return (
    <section className="ProjectTimeline">
      <h1 className="Projects">Projects</h1>
      <Timeline data={data} />
      <div className="PageDivider"></div>
      <div className="InProgressProjects">
        <h2 className="Projects">In Progess Projects</h2>
        <Link className="InProgress" to={"/Projects/RobotArm"}>
          <h3>Arduino robot arm</h3>
          <h4>Started: Late October 2025</h4>
        </Link>
      </div>
    </section>
  );
}
