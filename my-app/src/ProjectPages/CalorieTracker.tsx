import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CalorieTracker() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section
        className="Title"
        style={{ padding: "5vmin 10vw", width: "80vw" }}
      >
        <div style={{}}>
          <h1 style={{ fontSize: "9vmin", textAlign: "left", margin: 0 }}>
            Calorie Tracker
          </h1>
          <h2 style={{ margin: 0 }}>Tracks macros for users</h2>
        </div>
        <div>
          <h1>UNFINISED</h1>
          <Link
            style={{
              display: "flex",
              padding: "3vmin 4vmin",
              justifyContent: "center",
              alignItems: "center",
              gap: "1vmin",
              borderRadius: "100vmin",
              border: "2vmin solid #23657D",
              background: "#FFF",
              color: "#23657D",
              textAlign: "center",
              fontSize: "2.1vmin",
              fontWeight: "600",
              lineHeight: "normal",
              textDecoration: "none",
            }}
            to="/"
          >
            <h1> CLICK HERE TO LEAVE THIS PAGE</h1>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CalorieTracker;
