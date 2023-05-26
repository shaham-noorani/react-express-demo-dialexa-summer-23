import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function List({ city }) {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${city}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBreweries(data);
      });
  }, [city]);

  return (
    <div>
      {breweries.map((brewery) => {
        return <Card key={brewery.id} brewery={brewery}></Card>;
      })}
    </div>
  );
}
