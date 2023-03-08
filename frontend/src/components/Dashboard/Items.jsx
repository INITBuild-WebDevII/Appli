import "./Items.css";

let toApply = ["Amazon", "Google", "Microsoft", "", "", ""];

function Items(prop) {
  return (
    <div className="category-items">
      {toApply.map((item) => {
        return (
          <div className="item">
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Items;
