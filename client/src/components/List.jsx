import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function List({ city }) {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    if (city === "") {
      fetch(`http://localhost:3001/api/allBreweries`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBreweries(data);
        });
    } else {
      fetch(`http://localhost:3001/api/breweriesByCity/${city}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBreweries(data);
        });
    }
  }, [city]);

  return (
    <div>
      {breweries.map((brewery) => {
        return <Card key={brewery.id} brewery={brewery}></Card>;
      })}
    </div>
  );
}
