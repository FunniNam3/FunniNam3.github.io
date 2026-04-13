// ─────────────────────────────────────────────────────────────
//  Project data
//  Add image imports at the top of this file, then set the
//  `image` / `gallery` fields below.
//
//  Example:
//    import engine12Cover from "../assets/engine12-cover.png";
//    import engine12Screen1 from "../assets/engine12-screen1.png";
// ─────────────────────────────────────────────────────────────

export interface ProjectSection {
  title: string;
  body: string;
}

export interface Project {
  slug: string; // URL segment  →  /projects/:slug
  title: string;
  shortDescription: string; // shown on the card
  overview: string; // shown at the top of the detail page
  tags: string[];
  highlights?: string[]; // bullet-point callouts on the detail page
  sections?: ProjectSection[]; // extra content blocks (approach, challenges, etc.)
  image?: string; // cover image (card + detail hero)
  gallery?: string[]; // additional screenshots on the detail page
  github?: string;
  live?: string;
  comingSoon?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "engine-12",
    title: "Engine 12",
    shortDescription:
      "A custom 3D game engine written in C++, developed collaboratively through the Aggie Coding Club. Focuses on rendering architecture, ECS design, and cross-platform build pipelines.",
    overview:
      "Engine 12 is an open-source, collaborative game engine built from scratch in modern C++. The project was started within the Aggie Coding Club to give members hands-on experience with low-level graphics programming, software architecture, and team-based development practices. The engine targets real-time 3D rendering and is designed to be modular and extensible.",
    tags: ["C++", "OpenGL", "CMake", "ECS"],
    highlights: [
      "Entity-Component-System (ECS) architecture for cache-friendly game object management",
      "OpenGL rendering pipeline with support for Phong shading and texture mapping",
      "CMake-based cross-platform build system (Windows, Linux, macOS)",
      "Collaborative development across 10+ contributors with code-review workflow",
    ],
    sections: [
      {
        title: "Architecture",
        body: "The engine is structured around a strict ECS pattern. Systems iterate over component arrays rather than polymorphic object hierarchies, keeping hot data contiguous in memory and avoiding virtual dispatch overhead. A custom event bus decouples systems from one another.",
      },
      {
        title: "Rendering",
        body: "The renderer is built on top of OpenGL 4.6 with a forward-rendering pass. Geometry is batched per material to minimise draw calls. A simple scene graph handles transform hierarchies, and a basic material system lets assets declare shader inputs declaratively.",
      },
    ],
    github: "https://github.com/aggie-coding-club/Engine-12",
    // image: engine12Cover,
    // gallery: [engine12Screen1],
  },

  {
    slug: "build4good",
    title: "Build4Good Hackathon Site",
    shortDescription:
      "Official website for Texas A&M's Build4Good hackathon. Built with Next.js and Tailwind CSS for a fast, responsive experience, with Supabase powering registration and real-time data.",
    overview:
      "The Build4Good website serves as the primary public face and registration platform for Texas A&M's social-impact hackathon. The goal was a snappy, mobile-first site that could handle a surge of traffic on announcement day while providing organisers with a live dashboard of registrations.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    highlights: [
      "Server-side rendering via Next.js for fast initial load and good SEO",
      "Supabase Realtime used to stream live participant counts to the organiser dashboard",
      "Fully responsive layout, optimised for mobile-first browsing",
      "Deployed on Vercel with zero-downtime preview deployments per PR",
    ],
    sections: [
      {
        title: "Registration Flow",
        body: "Participants fill out a multi-step form whose state is persisted to Supabase so they can resume if they close the tab. On submission, a Supabase Edge Function sends a confirmation email and writes the record to the registrations table.",
      },
      {
        title: "Design",
        body: "The visual language mirrors the hackathon's mission: clean, optimistic, and approachable. Tailwind utility classes are composed into a small set of shared component variants to keep the codebase consistent across pages.",
      },
    ],
    github: "https://github.com/FunniNam3",
    live: "https://tacs.tamu.edu/b4g",
    // image: b4gCover,
  },

  {
    slug: "expression-robot",
    title: "Temperature-Responsive Expression Robot",
    shortDescription:
      "A desk-pet robot that changes its facial expression in real time based on ambient temperature — exploring how environment-responsive cues can create emotional human-computer interaction.",
    overview:
      "This project is a small screen-based robot designed as a desk accessory for office workers and students. It continuously reads ambient temperature via an Arduino-powered sensor and animates one of several facial expressions on its display in response — becoming visibly uncomfortable in heat and subdued in cold. The work is grounded in human-robot interaction research and interactive art, asking: how can environment-responsive expression help create a meaningful emotional connection between humans and technology?",
    tags: [
      "Arduino",
      "C",
      "Adafruit",
      "Autodesk Fusion",
      "Maya",
      "3D Printing",
    ],
    highlights: [
      "Temperature-driven expression state machine animating distinct facial responses across temperature ranges",
      "Built on Arduino and Adafruit hardware — no external single-board computer required",
      "Custom 3D-printed enclosure designed and dimensioned in Autodesk Fusion 360",
      "Magnetic hat accessory modelled in Maya 2024 and printed with embedded magnets for user customisation",
      "Presented to peers, receiving strong positive reactions for its personable and approachable character",
    ],
    sections: [
      {
        title: "Concept & Research Question",
        body: "The core question driving this project was: how can environment-responsive expression help create a meaningful or emotional interaction between humans and technology? The robot was conceived as a desk pet whose identity comes not from pre-scripted dialogue but from its visible, almost biological reaction to the world around it — a subtle form of personality that users can observe and interpret.",
      },
      {
        title: "Inspiration",
        body: "The project draws on several real-world precedents. NOMI, NIO's in-vehicle AI, uses smooth facial animations and head tilts to feel genuinely alive — it went viral for its personality alone. DASAI dashboard accessories mix LED light, sound, and cultural aesthetics to create objects people identify with rather than simply use. Duolingo's mascot strategy shows how strong character attachment drives daily engagement. The common thread: users respond more positively to devices that show clear, readable expressions. This project borrows that insight but grounds the expressiveness in environmental stimulus rather than scripted animation.",
      },
      {
        title: "Eliciting Temperature Response",
        body: "A temperature expression library was planned across specific ranges before any code was written. Each range maps to a distinct animated face on the display — from a content neutral expression at comfortable room temperature to increasingly distressed or lethargic states at the extremes. Arduino and Adafruit libraries handled sensor reading and display rendering, with expression changes triggered whenever temperature crossed a defined threshold.",
      },
      {
        title: "Designing the Exterior Casing",
        body: "The enclosure was planned by first sketching the physical dimensions of each ordered component, then modelling everything in Autodesk Fusion 360 to verify fit before committing to a print. This prevented costly reprints by catching clearance issues early. The final casing houses the display, sensor, and microcontroller, all secured with screws for serviceability.",
      },
      {
        title: "Magnetic Accessories",
        body: "To deepen the sense of ownership and empathy, the robot supports swappable magnetic accessories. A fedora-style hat was modelled in Maya 2024 with a flat bottom surface and printed with circular recesses to accept superglued magnets. The hat snaps onto the top of the enclosure and can be removed without tools, letting users personalise their robot and — as the research suggests — potentially strengthening their emotional attachment to it.",
      },
      {
        title: "Findings",
        body: "When presented, classmates responded with immediate positive reactions, describing the robot as cute and personable. The key takeaway is consistent with broader HRI research: expressiveness and environmental reactivity increase emotional human-computer empathy. The robot becomes personable not by mimicking scripted facial expressions, but by visibly responding to its surroundings in a subtle, almost biological way — demonstrating that the first language humans learn, emotion, is also one of the most effective interfaces.",
      },
      {
        title: "Future Directions",
        body: "Planned improvements include smoother animation transitions, a broader expression library for finer-grained temperature gradations, and enclosure variants in different colours and materials. Future research will investigate A/B testing with and without facial expressions to isolate the impact of expressiveness on empathy, and explore how users attribute personality traits to stimulus-driven reactive behaviours.",
      },
    ],
    // image: robotCover,
    // gallery: [robotScreen1, robotScreen2],
  },
];
