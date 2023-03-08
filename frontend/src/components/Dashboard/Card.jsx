import "./Card.css";

function Card(props) {
  return (
    <div className="item">
      <p>{props.name}</p>
    </div>
  );
}
export default Card;
