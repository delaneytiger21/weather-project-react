import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherData from "./WeatherData.js"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-1">
          <WeatherIcon code={props.data.icon} />
        </div>
        <div className="col-5">
          <WeatherData celsius={props.data.temp} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humitdity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
