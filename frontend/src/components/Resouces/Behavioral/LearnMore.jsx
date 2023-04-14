import "./LearnMore.css"

function LearnMore (props) {
    return(
        <div className="learn-more-popup">
            <h1 className="popup-title">{props.title}</h1>
            <p className="popup-body">{props.body}</p>
            <button onClick={props.updateState} className="popup-btn click">Done</button>
        </div>
    )
}
export default LearnMore