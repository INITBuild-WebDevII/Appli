import "./Column.css";
import Card from "./Card";

function createCard(data) {
  return <Card name={data} />;
}

function Column(props) {
  const companyList = props.list;
  const title = props.title;

  return (
    <div className="category-column">
      <div style={{ backgroundColor: props.color }} className="category-heading">
        <p>{title}</p>
        <h1>{companyList.length}</h1>
      </div>
      <div className="category-contain">
        <p>{title}</p>
        <button className="category-btn" type="submit">
          +
        </button>
        <hr />
        <div className="items-container">
          {/*Create List of Cards here */}
          {companyList.map(createCard)}
        </div>
      </div>
    </div>
  );
}

export default Column;
