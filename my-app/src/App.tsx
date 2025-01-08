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
        <div className="AboutMe">
          <h1 className="AboutMe">About Me</h1>
          <p>Hello world</p>
        </div>
      </header>
      <div className="Social-Wrapper">
        <div className="Social">
          <i className="fa fa-linkedin"></i> Linkedin
        </div>
        <div className="Social">
          <i className="fa fa-github"></i> Github
        </div>
      </div>
    </div>
  );
}

export default App;
