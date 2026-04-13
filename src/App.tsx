import { type ReactElement } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import hero from "./assets/hero.png";
import {
  FaCode,
  FaMicrochip,
  FaLayerGroup,
  FaCloud,
  FaPenRuler,
  FaGithub,
  FaLinkedin,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa6";
import { PROJECTS } from "./data/projects";
import type { Project } from "./data/projects";

export default function HomePage() {
  return (
    <div className="py-20 flex flex-col gap-10">
      <Hero />
      <About />
      <TechArsenal />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Hero                                                       */
/* ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="w-full flex p-6">
      <div className="w-1/2 flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Hi, I'm Ethan Nguyen</h1>
        <p className="text-(--p-color)">
          Full-Stack Developer & Computer Engineering Student at Texas A&M
          University. Bridging the gap between hardware systems and scalable
          software solutions.
        </p>
        <div className="flex gap-3 font-semibold">
          <a
            className="text-xs p-3 w-fit h-fit rounded-md hover:scale-105 active:scale-95 transition duration-300 bg-linear-90 from-(--second-header) from-0% to-(--header) to-100%"
            href="https://docs.google.com/document/d/1msTHmNudJgS8PLMuBNoJVpGe64rI2kCZbaakOpVHzng/export?format=pdf"
          >
            Download Resume
          </a>
          <a
            className="text-xs p-3 w-fit h-fit rounded-md hover:scale-105 active:scale-95 transition duration-300 inset-ring-2 inset-ring-(--second-header) flex items-center gap-2"
            href="https://github.com/FunniNam3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            className="text-xs p-3 w-fit h-fit rounded-md hover:scale-105 active:scale-95 transition duration-300 inset-ring-2 inset-ring-(--second-header) flex items-center gap-2"
            href="https://www.linkedin.com/in/ethan-v-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={hero}
          alt="Headshot of Ethan Nguyen"
          className="rounded-2xl max-w-xs object-cover"
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  About                                                      */
/* ─────────────────────────────────────────────────────────── */
function About() {
  const courseStyle = "bg-white/10 p-2 rounded-lg text-white/60";

  return (
    <section id="about" className="flex flex-col p-6 gap-4 bg-white/10">
      <h1 className="text-4xl text-center font-bold">About Me</h1>
      <p className="text-(--p-color) text-center mx-auto px-10">
        I am a versatile embedded systems engineer with a passion for systems
        design — building everything from low-level firmware to full-stack web
        applications. I love connecting hardware and software in meaningful
        ways.
      </p>
      <div
        id="education"
        className="border border-(--second-header) p-6 bg-(--primary) rounded-2xl flex flex-col gap-6"
      >
        <h2 className="text-xl font-semibold border-b-2 border-white/20 text-(--header) pb-6">
          Education Details
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold">
              Texas A&M University (College Station, TX)
            </h3>
            <p className="text-(--second-header) text-base font-semibold">
              BS in Computer Engineering (Aug 2023 – May 2027)
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold">Relevant Courses</h4>
            <ul className="flex flex-wrap gap-4 px-6">
              <li className={courseStyle}>● Discrete Mathematics</li>
              <li className={courseStyle}>● Data Structures & Algorithms</li>
              <li className={courseStyle}>● Database Systems</li>
              <li className={courseStyle}>● Programming Languages</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Campus Leadership</h4>
            <p className="text-white/60 border-l-3 px-2 border-(--header)">
              Treasurer @ Texas A&M Computing Society (ACM chapter)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Tech Arsenal                                               */
/* ─────────────────────────────────────────────────────────── */
function TechContainer({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: ReactElement<any, any>;
}) {
  return (
    <div className="flex flex-col gap-3 p-3 bg-(--containerBG) max-w-70 rounded-2xl">
      <div className="flex gap-2 max-w-3/4">
        <div className="p-2 aspect-square w-12 h-auto m-auto rounded-xl bg-(--second-header)/20">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-wrap">{title}</h2>
      </div>
      <ul className="flex flex-wrap gap-3 w-full px-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-(--primary) text-(--second-header) text-xs font-light px-3 py-2 rounded-full border border-(--second-header)"
          >
            ● {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechArsenal() {
  const iconClass = "m-auto text-(--second-header) w-full h-auto";

  return (
    <section
      id="tech"
      className="relative pt-6 px-6 flex flex-col gap-10 pb-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-center">Technical Arsenal</h1>
        <p className="text-(--p-color) text-center px-6">
          A comprehensive toolkit spanning embedded systems, full-stack
          development, and game engines.
        </p>
      </div>

      <div className="flex flex-wrap gap-10">
        <TechContainer
          title="Hardware & Embedded"
          items={["Arduino", "Raspberry Pi", "PCB Design", "Verilog"]}
          icon={<FaMicrochip className={iconClass} />}
        />
        <TechContainer
          title="Programming Languages"
          items={[
            "C",
            "C++",
            "C#",
            "Java",
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "TypeScript",
            "SQL",
          ]}
          icon={<FaCode className={iconClass} />}
        />
        <TechContainer
          title="Frameworks & Libraries"
          items={["React", "Node.js", "Flask", "OpenGL", "Tailwind CSS"]}
          icon={<FaLayerGroup className={iconClass} />}
        />
        <TechContainer
          title="Cloud & Databases"
          items={["AWS", "Azure", "MongoDB", "PostgreSQL"]}
          icon={<FaCloud className={iconClass} />}
        />
        <TechContainer
          title="Design & Tools"
          items={[
            "Figma",
            "Autodesk Fusion",
            "Git",
            "GitHub",
            "Maya",
            "Blender",
          ]}
          icon={<FaPenRuler className={iconClass} />}
        />
      </div>

      {/* fade-out bottom edge */}
      <div className="absolute bg-linear-0 from-(--primary) from-0% to-transparent to-100% h-10 w-full left-0 bottom-0" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Projects                                                   */
/* ─────────────────────────────────────────────────────────── */

function ProjectImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-40 rounded-xl bg-(--primary) border border-white/10 flex items-center justify-center">
      <span className="text-white/20 text-xs uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    // The whole card is a router link to the detail page
    <Link
      to={`/projects/${project.slug}`}
      className="flex flex-col bg-(--containerBG) rounded-2xl border border-white/10 hover:border-(--second-header)/50 transition duration-300 overflow-hidden group"
    >
      {/* ── Image / placeholder ── */}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-40 object-cover group-hover:scale-[1.02] transition duration-300"
        />
      ) : (
        <div className="px-5 pt-5">
          <ProjectImagePlaceholder label={project.title} />
        </div>
      )}

      {/* ── Body ── */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-lg font-semibold group-hover:text-(--second-header) transition">
          {project.title}
        </h3>
        <p className="text-(--p-color) text-sm flex-1">
          {project.shortDescription}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-(--primary) text-(--second-header) border border-(--second-header)/40"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* ── Footer hints ── */}
        <div className="flex gap-3 pt-1 items-center">
          {project.github && (
            <span
              onClick={(e) => {
                e.preventDefault();
                window.open(project.github, "_blank");
              }}
              className="flex items-center gap-1 text-xs text-white/60 hover:text-(--second-header) transition cursor-pointer"
            >
              <FaGithub /> Code
            </span>
          )}
          {project.live && (
            <span
              onClick={(e) => {
                e.preventDefault();
                window.open(project.live, "_blank");
              }}
              className="flex items-center gap-1 text-xs text-white/60 hover:text-(--second-header) transition cursor-pointer"
            >
              <FaArrowUpRightFromSquare /> Live
            </span>
          )}
          {project.comingSoon && (
            <span className="text-xs px-2 py-1 rounded-full bg-(--second-header)/10 text-(--second-header) border border-(--second-header)/30 italic">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">Projects</h1>
        <p className="text-(--p-color) text-center px-6">
          A selection of things I've built — from game engines to hackathon
          sites to robots.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Experience                                                 */
/* ─────────────────────────────────────────────────────────── */
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "Some Cool Company",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Built and maintained REST APIs using Node.js and Express.",
      "Reduced query latency by 30% through database index optimisation.",
      "Collaborated with cross-functional teams in an Agile environment.",
    ],
  },
  {
    role: "Treasurer",
    company: "Texas A&M Computing Society (ACM)",
    period: "Sep 2023 – Present",
    bullets: [
      "Managed a $15 000 annual budget across events and sponsorships.",
      "Coordinated logistics for hackathons with 200+ participants.",
    ],
  },
];

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="flex gap-4 p-5 bg-(--containerBG) rounded-2xl border border-white/10">
      <div className="mt-1 p-2 rounded-xl bg-(--second-header)/20 h-fit">
        <FaBriefcase className="text-(--second-header) w-5 h-5" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="font-semibold text-lg">{item.role}</h3>
            <p className="text-(--second-header) text-sm font-medium">
              {item.company}
            </p>
          </div>
          <span className="text-white/40 text-xs shrink-0">{item.period}</span>
        </div>
        <ul className="flex flex-col gap-1 pl-1">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-(--p-color) text-sm flex gap-2">
              <span className="text-(--second-header) mt-0.5">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6 p-6 bg-white/5">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">Experience</h1>
        <p className="text-(--p-color) text-center px-6">
          Where I've put my skills to work.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((item) => (
          <ExperienceCard key={item.role} item={item} />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Contact                                                    */
/* ─────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col gap-6 p-6 items-center text-center"
    >
      <h1 className="text-3xl font-bold">Get In Touch</h1>
      <p className="text-(--p-color) max-w-md">
        Whether you have a project in mind, a role to fill, or just want to say
        hi — my inbox is always open.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:ethannguyen@example.com"
          className="flex items-center gap-2 text-sm p-3 rounded-md hover:scale-105 active:scale-95 transition duration-300 bg-linear-90 from-(--second-header) from-0% to-(--header) to-100% font-semibold"
        >
          <FaEnvelope /> Say Hello
        </a>
        <a
          href="https://www.linkedin.com/in/ethan-v-nguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm p-3 rounded-md hover:scale-105 active:scale-95 transition duration-300 inset-ring-2 inset-ring-(--second-header) font-semibold"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/FunniNam3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm p-3 rounded-md hover:scale-105 active:scale-95 transition duration-300 inset-ring-2 inset-ring-(--second-header) font-semibold"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
}
