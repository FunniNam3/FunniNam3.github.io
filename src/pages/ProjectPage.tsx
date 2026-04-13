import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects.ts";
import {
  FaArrowLeft,
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

/* ─────────────────────────────────────────────────────────── */
/*  ProjectPage                                                */
/* ─────────────────────────────────────────────────────────── */
export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  // ── 404 ──────────────────────────────────────────────────
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-10 text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-(--p-color)">No project found for "{slug}".</p>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm p-3 rounded-md inset-ring-2 inset-ring-(--second-header) hover:scale-105 active:scale-95 transition duration-300"
        >
          <FaArrowLeft /> Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 flex flex-col gap-10">
      {/* ── Back nav ─────────────────────────────────────── */}
      <Link
        to="/"
        className="flex items-center gap-2 text-sm text-white/50 hover:text-(--second-header) transition w-fit"
      >
        <FaArrowLeft /> All projects
      </Link>

      {/* ── Hero image ───────────────────────────────────── */}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} cover`}
          className="w-full max-h-80 object-cover rounded-2xl border border-white/10"
        />
      ) : (
        <div className="w-full h-52 rounded-2xl bg-(--containerBG) border border-white/10 flex items-center justify-center">
          <span className="text-white/20 text-sm uppercase tracking-widest">
            {project.title}
          </span>
        </div>
      )}

      {/* ── Header ───────────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>

        {/* Tags */}
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-(--containerBG) text-(--second-header) border border-(--second-header)/40"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* External links */}
        <div className="flex gap-4 items-center">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm p-3 rounded-md inset-ring-2 inset-ring-(--second-header) hover:scale-105 active:scale-95 transition duration-300 font-semibold"
            >
              <FaGithub /> View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm p-3 rounded-md bg-linear-90 from-(--second-header) from-0% to-(--header) to-100% hover:scale-105 active:scale-95 transition duration-300 font-semibold"
            >
              <FaArrowUpRightFromSquare /> Live Site
            </a>
          )}
          {project.comingSoon && (
            <span className="text-sm px-3 py-2 rounded-md bg-(--second-header)/10 text-(--second-header) border border-(--second-header)/30 italic">
              Detailed page coming soon
            </span>
          )}
        </div>
      </div>

      {/* ── Overview ─────────────────────────────────────── */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-(--header)">Overview</h2>
        <p className="text-(--p-color) leading-relaxed">{project.overview}</p>
      </div>

      {/* ── Highlights ───────────────────────────────────── */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="border border-(--second-header)/30 rounded-2xl p-6 bg-(--containerBG) flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-(--header)">Highlights</h2>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-(--p-color) text-sm">
                <span className="text-(--second-header) mt-0.5 shrink-0">
                  ▸
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Content sections ─────────────────────────────── */}
      {project.sections && project.sections.length > 0 && (
        <div className="flex flex-col gap-8">
          {project.sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-(--header) border-b border-white/10 pb-2">
                {section.title}
              </h2>
              <p className="text-(--p-color) leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* ── Gallery ──────────────────────────────────────── */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-(--header)">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full rounded-xl border border-white/10 object-cover"
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Bottom back link ─────────────────────────────── */}
      <Link
        to="/"
        className="flex items-center gap-2 text-sm text-white/50 hover:text-(--second-header) transition w-fit mt-4"
      >
        <FaArrowLeft /> Back to all projects
      </Link>
    </div>
  );
}
