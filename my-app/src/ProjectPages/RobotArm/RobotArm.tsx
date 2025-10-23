import { Timeline, TimelineItemData } from "../Timeline/Timeline.tsx";
import "./RobotArm.css";

// interface TimelineItemData {
//   title: string;
//   date: string;
//   description: string;
//   type?: string;
//   selector?: string;
//   tags?: string[];
//   imgPath?: string;
//   links?: TimelineLink[];
// }

const data: TimelineItemData[] = [
  {
    title: "Joints",
    date: "October 23rd 2025",
    description:
      "Learned how to use joints in Fusion to model robot arm. I already have prior experience in Fusion but I hadn't learned how to use joints till now.",
    imgPath: "/Robot Arm/Joints.gif",
    selector: "faHexagonNodes",
    type: "Opposite",
  },
  {
    title: "Initial Steps",
    date: "October 20th 2025",
    selector: "faPlug",
    description:
      "Learned how to use a stepper motor from Elegoo Starter Kit. First time using Arduino so I bought a kit from Elegoo inorder to learn how to use an Arduino and connect it to a stepper motor.",
    imgPath: "/Robot Arm/Stepper.png",
  },
];

export function RobotArm() {
  return (
    <section className="RobotArm">
      <div className="Title">
        <h1>Robot Arm</h1>
        <h3 style={{ maxWidth: "70vw" }}>
          This page shows the keeps track of the days I spend on this project
          and the progress I make each day
        </h3>
      </div>
      <div className="Body">
        <Timeline data={data} />
      </div>
    </section>
  );
}
