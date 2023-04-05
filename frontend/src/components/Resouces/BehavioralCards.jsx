import "./BehavioralCards.css"
import LearnMore from "./LearnMore"
import { useState } from "react"

function BehavioralCards(props){

    const [continueReading, setContinueReading] = useState(false)

    return(
        <div className="behavioral-cards"> 
            <h1 className="h1-card">{props.title}</h1>
            <p className="p-card">{props.para}</p>
            <button className="btn-card click" onClick={()=>{
                setContinueReading(true)
            }}>Learn More!</button>
            {continueReading == true && <LearnMore />}
        </div>
    )
}
export default BehavioralCards