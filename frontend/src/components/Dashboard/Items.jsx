import "./Items.css";

let toApply = ["Hello", "World", "Name"];

function Items(prop) {
    return(
        <div className="category-items">
            {toApply.map((item)=>{
                return (
                <div className="item">
                    <p>{item}</p>
                </div>
            )})}
        </div>
    )
};
export default Items