import React, { useState } from "react";

export default function WeatherData(props) {
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
      <div className="WeatherData">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit"> C |
          <a href="/" onClick={showFahrenheit}> F</a>
        </span>
      </div>
    );
  } else {
    let convertToFahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherData">
        <span className="temperature">{Math.round(convertToFahrenheit)}</span>
        <span className="unit"><a href="/" onClick={showCelsius}> C </a>| F</span>
      </div>
    );
  }
}
