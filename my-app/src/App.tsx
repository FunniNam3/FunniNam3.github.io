import React from "react";
import headShot from "./headshot.png";
import "./App.css";

function App() {
  document.title = "Ethan Nguyen - Portfolio";
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <header className="App-header">
        <div className="Headshot">
          <img src={headShot} alt="Headshot" className="Headshot"></img>
          <h1 className="Headshot">Ethan Nguyen</h1>
        </div>
        <div className="Social-Wrapper">
          <div className="Social">
            <i className="fa fa-linkedin"></i> Linkedin
          </div>
          <div className="Social">
            <i className="fa fa-github"></i> Github
          </div>
        </div>
      </header>

      <div className="AboutMe">
        <h1 className="AboutMe">About Me</h1>
        <h2 className="AboutMe">Professional</h2>
        <p className="AboutMe">
          Computer Engineering undergraduate at Texas A&M with a strong
          foundation in software development, and problem-solving. Passionate
          about building scalable applications and improving software
          performance through coding, testing, and debugging
        </p>
        <h2 className="AboutMe">Personal</h2>
        <p className="PersonalAbt">
          Viet College Student that loves to rock climb and solve problems
        </p>
      </div>
    </div>
  );
}

export default App;
