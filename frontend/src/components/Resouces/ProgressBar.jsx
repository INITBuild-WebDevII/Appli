import "./ProgressBar.css"

function ProgressBar (props){
    return( 
        <div className="container">
            <div className="progress-label">{props.percentage}%</div>
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{width:props.percentage + "%"}}> </div>
            </div>

        </div>
    )
}
export default ProgressBar