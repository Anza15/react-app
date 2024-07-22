import React from "react";
import weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://github.com/Anza15"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          Anza Mukhithi and is{" "}
          <a href="https://github.com/Anza15/reactapp" target="_blaank">
            open-sourced on GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://reactapp-fkyu.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Render
          </a>
        </footer>
      </div>
    </div>
  );
}