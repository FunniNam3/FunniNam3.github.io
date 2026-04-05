import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const hover =
    " hover:text-(--link-hover) hover:scale-105 active:scale-95 transition-all duration-300";
  return (
    <nav className="flex p-6 justify-between items-center">
      <Link to="/" className={"text-2xl font-bold" + hover}>
        Ethan
      </Link>

      <div className="flex gap-5 text-white/60 text-base">
        <Link to="/" className={hover}>
          Home
        </Link>
        <Link to="/about" className={hover}>
          About
        </Link>
        <Link to="/skills" className={hover}>
          Skills
        </Link>
        <Link to="/experience" className={hover}>
          Experience
        </Link>
        <Link to="/projects" className={hover}>
          Projects
        </Link>
        <Link to="/contact" className={hover}>
          Contact
        </Link>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/FunniNam3"
          target="_blank"
          rel="noopener noreferrer"
          className={
            "p-2 border rounded-full hover:text-(--link-hover)" + hover
          }
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/ethan-v-nguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className={
            "p-2 border rounded-full hover:text-(--link-hover)" + hover
          }
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
