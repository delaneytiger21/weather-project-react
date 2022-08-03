import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container" >
        <Weather />
        <footer>
          Built by Delaney Tiger, open-sourced on <a href="https://github.com/delaneytiger21/weather-project-react" target="_blank" rel="noreferrer">Github</a> and hosted on <a href="https://stupendous-brigadeiros-5caf4d.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
      </div>
    </div>
  );
}


