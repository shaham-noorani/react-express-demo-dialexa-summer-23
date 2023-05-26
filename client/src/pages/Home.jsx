import { useState } from "react";
import Filter from "../components/Filter";
import List from "../components/List";

const cities = ["Houston", "Dallas", "Austin"];

export default function Home() {
  const [city, setCity] = useState("Houston");

  return (
    <div className="container">
      <br />
      <Filter cities={cities} city={city} setCity={setCity} />
      <List city={city}></List>
    </div>
  );
}
