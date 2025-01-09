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

      <section className="AboutMe">
        <h1 className="AboutMe">About Me</h1>
        <h2 className="AboutMe">Professional</h2>
        <p className="ProfAbt">
          Computer Engineering undergraduate at Texas A&M with a strong
          foundation in software development, and problem-solving. Passionate
          about building scalable applications and improving software
          performance through coding, testing, and debugging
        </p>
        <h2 className="AboutMe">Personal</h2>
        <p className="PersonalAbt">
          Viet College Student that loves to rock climb and solve problems
        </p>
      </section>

      <section className="Experience-Container">
        <h1 className="Experience-Container">Experience</h1>
        <ul className="Experience-Container">
          <li className="Experience">
            <div className="Experience">
              <h2 className="Experience">Yokogawa’s US Technology Center</h2>
              <h2 className="ExLocat">Spring, TX</h2>
            </div>
            <div className="Experience">
              <h3 className="Experience">
                Information Technology (IT) Specialist Intern
              </h3>
              <h3 className="ExDate">May 2024 – August 2024</h3>
            </div>
            <ul>
              <li>
                Designed and implemented an inventory management app using Power
                Apps, Power BI, Power Automate, and Microsoft SharePoint,
                improving asset tracking and management for 2100+ devices, and
                developed a Workshop Management App to streamline space
                allocation and track workers' hours, increasing project
                efficiency
              </li>
              <li>
                Developed automated scripts using Microsoft Automate to
                streamline device provisioning, reducing setup time by 60% and
                improving IT operational efficiency
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
