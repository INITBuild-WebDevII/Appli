import "./BehavioralCards.css"
function BehavioralCards(props){
    return(
        <div className="behavioral-cards"> 
            <h1 className="h1-card">{props.title}</h1>
            <p className="p-card">{props.para}</p>
            <button className="btn-card">Learn More!</button>
        </div>
    )
}
export default BehavioralCards