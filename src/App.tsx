import hero from "./assets/hero.png";

function App() {
  return (
    <div className="py-20 flex flex-col gap-10">
      <section id="hero" className="w-full flex">
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
              href=""
            >
              Github
            </a>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3">
          {" "}
          <img src={hero} alt="Balls" />
        </div>
      </section>
    </div>
  );
}

export default App;
