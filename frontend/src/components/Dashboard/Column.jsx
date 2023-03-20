import "./Column.css";
import Card from "./Card";

function createCard(data) {
  return <Card name={data} />;
}

function openForm() {
  alert("Open Form");
}

function Column(title, companies, color) {

  return (
    <div className="category-column">
      <div style={{ backgroundColor: color }} className="category-heading">
        <p>{title}</p>
        <h1>{companies.length}</h1>
      </div>
      <div className="category-contain">
        <p>{title}</p>
        <button className="category-btn" type="submit" onClick={openForm}>
          +
        </button>
        <hr />
        <ul className="items-container">
          {/*Create List of Cards here */}
          {companies.map(createCard)}
        </ul>
      </div>
    </div>
  );
}

export default Column;
