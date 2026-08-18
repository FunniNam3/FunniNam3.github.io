import { useState } from "react";
import { Timeline, type TimelineItemData } from "./Timeline/Timeline.tsx";
import { Link } from "react-router-dom";
import timelineData from "./TimelineData.json";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const [data] = useState<TimelineItemData[]>(
    timelineData as TimelineItemData[],
  );

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
