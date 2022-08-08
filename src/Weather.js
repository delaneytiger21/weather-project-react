import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday 03:00",
      temp: response.data.main.temp,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather.description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span className="temperature">{Math.round(weatherData.temp)}</span>
            <span className="unit"> °C | F </span>
          </div>
          <div className="col">
            <ul>
              <li>Humitdity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}mph</li>
            </ul>
          </div>
        </div>
      </div >
    )
  } else {
    let apiKey = "b94816859e932d5f9f24ad183de5858f"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading...";
}