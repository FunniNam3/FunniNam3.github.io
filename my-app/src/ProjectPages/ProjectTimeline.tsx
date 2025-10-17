import { useState, useEffect } from "react";
import { Timeline, TimelineItemData } from "./Timeline/Timeline.tsx";

export default function ProjectTimeline() {
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
    </section>
  );
}
