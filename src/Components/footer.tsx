import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const hover =
    " hover:text-(--link-hover) hover:scale-105 active:scale-95 transition-all duration-300";
  return (
    <footer className="mt-6 p-6 flex flex-col gap-10">
      <div className="flex justify-between gap-5">
        <div className="text-left shrink max-w-1/2">
          <h1 className="text-3xl font-bold">Ethan Nguyen</h1>
          <p className="text-(--p-color) text-sm">
            Embedded Engineer & Computer Engineering Student at Texas A&M
            University. Bridging the gap between hardware systems and scalable
            software solutions
          </p>
        </div>
        <div className="flex grow shrink-0 justify-between w-1/2 max-w-120">
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
      </div>
      <div className="flex border-t-2 border-white/10 pt-5">
        <div className="flex gap-3 w-1/3">
          <Link
            to="https://www.linkedin.com/in/ethan-v-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-white/10 p-2 w-fit h-fit rounded-lg hover:scale-105 active:scale-95 transition duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link
            to="https://github.com/FunniNam3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-white/10 p-2 w-fit h-fit rounded-lg hover:scale-105 active:scale-95 transition duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </Link>

          <Link
            to="mailto:nguyen.ev03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-white/10 p-2 w-fit h-fit rounded-lg hover:scale-105 active:scale-95 transition duration-300"
          >
            <FaRegEnvelope className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-xs text-center h-fit my-auto w-1/3 text-(--p-color)">
          © 2026 Ethan Nguyen. All rights reserved
        </p>
      </div>
    </footer>
  );
}
