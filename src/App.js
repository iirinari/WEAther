import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Bamberg" />
        <footer>
          <a href="https://github.com/iirinari/W-a" target="_blank"
            rel="noreferrer">Open-source code, by Iryna Rishko</a>
        </footer>
      </div>
    </div>
  );
}


