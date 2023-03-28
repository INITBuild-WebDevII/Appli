import "./ResourceBtn.css";

function ResourceBtn(props) {
    return(
        <div className="resource-icon">
            <button onClick={props.click} className="btn-icon" >
                <img className="resource-img" src={props.src} alt={props.title}/>
            </button>
            <p className="btn-text">{props.title}</p>
        </div>
    );
}

export default ResourceBtn;