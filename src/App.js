import React, { useState } from "react";
import { countryData } from "./dataset";
import "./styles.css";

var countries = Object.keys(countryData);

export default function App() {
  const [selectedContinent, setContinent] = useState("Asia");

  function getContinent(continents) {
    setContinent(continents);
  }

  return (
    <div className="App">
      <h1>The Sisterhood of Travelling Maps</h1>
      <h2>Let's find the next destination of your adventure saga!</h2>
      <div>
        {countries.map((continents) => {
          return (
            <button className="btn" onClick={() => getContinent(continents)}>
              {continents}
            </button>
          );
        })}
      </div>
      {countryData[selectedContinent].map((country) => {
        return (
          <div className="country-card">
            <div className="photo">
              <img src={country.photo} alt="country image"></img>
            </div>
            <div className="country-info">
              <h1>{country.name}</h1>
              <h3>Capital : {country.capital}</h3>

              <div className="description">
                <p>{country.description}</p>{" "}
              </div>
              {/* <hr /> */}
            </div>
          </div>
        );
      })}
      <footer>
        <small>
          Made with ❤️ by <a href="">Varuni</a>
        </small>
      </footer>
    </div>
  );
}
