export default function Filter(props) {
  function createCityRadioButton(item) {
    return (
      <div key={item} style={{ marginBottom: "20px" }}>
        <input
          type="radio"
          name={item}
          id={item}
          checked={item === props.city}
          onChange={(e) => props?.setCity(item)}
        />
        {item}
      </div>
    );
  }

  return (
    <div className="container">
      <a
        href="#"
        role="button"
        className="outline"
        style={{ width: "15vw", marginBottom: "2vh" }}
        onClick={() => props?.setCity("")}
      >
        All
      </a>
      <fieldset>
        {props.cities.map((item) => createCityRadioButton(item))}
      </fieldset>
    </div>
  );
}
