import React, { useState } from "react";

export default function WeatherData(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
  }


  if (unit === "fahrenheit") {
    return (
      <div className="WeatherData">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit"><a href="/" onClick={showCelsius}> C </a>| F</span>
      </div>
    );
  } else {
    let celsius = (props.fahrenheit - 32) * 5 / 9;
    return (
      <div className="WeatherData">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit"> C |
          <a href="/" onClick={showFahrenheit}> F</a>
        </span>
      </div>
    );
  }
}
