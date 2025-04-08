import React from "react";
import "./App.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Main from "./Main.tsx";

function App() {
  document.title = "Ethan Nguyen - Portfolio";
  document.bgColor = "#FDF3E6";
  return (
    <div className="App">
      <link rel="stylesheet"></link>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
