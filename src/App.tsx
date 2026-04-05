import hero from "./assets/hero.png";

function App() {
  const courseStyle = "bg-white/10 p-2 rounded-lg text-white/60";
  return (
    <div className="py-20 flex flex-col gap-10">
      <section id="hero" className="w-full flex p-6">
        <div className="w-1/2 flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Hi, I'm Ethan Nguyen</h1>
          <p className="text-(--p-color)">
            Full-Stack Developer & Computer Engineering Student at Texas A&M
            University. Bridging the gap between hardware systems and scalable
            software solutions
          </p>
          <div className="flex gap-3 font-semibold">
            <a
              className="text-xs p-3 w-fit h-fit rounded-md hover:scale-105 active:scale-95 transition duration-300 bg-linear-90 from-(--second-header) from-0% to-(--header) to-100%"
              href="https://docs.google.com/document/d/1msTHmNudJgS8PLMuBNoJVpGe64rI2kCZbaakOpVHzng/export?format=pdf"
            >
              Download Resume
            </a>
            <a
              className="text-xs p-3 w-fit h-fit rounded-md hover:scale-105 active:scale-95 transition duration-300 inset-ring-2 inset-ring-(--second-header)"
              href="https://github.com/FunniNam3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              className="text-xs p-3 w-fit h-fit rounded-md hover:scale-105 active:scale-95 transition duration-300 inset-ring-2 inset-ring-(--second-header)"
              href="https://www.linkedin.com/in/ethan-v-nguyen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          {" "}
          <img src={hero} alt="Headshot of Ethan Nguyen" />
        </div>
      </section>
      <section id="About" className="flex flex-col p-6 gap-4 bg-white/10">
        <h1 className="text-4xl text-center font-bold">About Me</h1>
        <p className="text-(--p-color) text-center mx-auto px-10">
          I am a versatile embedded systems engineer with a passion for systems
          design blah blah blah please hire me
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
                BS in Computer Engineering (Aug 2023 - May 2027)
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Relevant Courses</h4>
              <ul className="flex flex-wrap gap-4 px-6">
                <li className={courseStyle}>● Discrete Mathamatics</li>
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
    </div>
  );
}

export default App;
