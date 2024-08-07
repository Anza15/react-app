import React, { useState } from "react";
import "./weathertemperature.css";

export default function weathertemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="weathertemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <button className="unit-button" onClick={showFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weathertemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <button className="unit-button" onClick={showCelsius}>
            °C
          </button>{" "}
          | °F
        </span>
      </div>
    );
  }
}