import React from "react";
import "./Weather.css"

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Austin</h1>
      <ul>
        <li>Wednesday 03:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy" />
          100°F
        </div>
        <div className="col-6">
          <ul>
            <li>Humitdity: 71%</li>
            <li>Wind: 12 mph</li>
          </ul>
        </div>
      </div>




    </div>
  )
}