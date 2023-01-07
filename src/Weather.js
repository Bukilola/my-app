import React, { useState } from "react";
import axios from "axios";
export default function SearchEngine() {
  let [city, setCity] = useState();
  let [weather, setWeather] = useState();
  function showTemperature(event) {
    event.preventDefault();
    setWeather(`It is currently 10°C in ${city}`);
  }
  function showCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={showTemperature}>
        <input type="text" placeholder="Enter a city" onChange={showCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{weather}</h2>
    </div>
  );
}
