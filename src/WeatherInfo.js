import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col">
          <img src={props.data.icon} alt={props.data.description} />
          <span className="temperature">{Math.round(props.data.temp)}</span>
          <span className="unit"> °C | F </span>
        </div>
        <div className="col">
          <ul>
            <li>Humitdity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
