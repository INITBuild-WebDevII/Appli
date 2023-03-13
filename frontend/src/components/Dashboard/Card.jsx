import "./Card.css";

function Card(props) {
  return (
    <li className="item">
      <p>{props.name}</p>
    </li>
  );
}
export default Card;
