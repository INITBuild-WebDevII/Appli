import "./BehavioralCards.css"
import LearnMore from "./LearnMore"
import { useState } from "react"

function BehavioralCards(props){

    return(
        <div className="behavioral-cards"> 
            <h1 className="card-title">{props.title}</h1>
            <p className="card-body">{props.body}</p>
            <button className="card-btn click" onClick={props.updateState}>
                Learn More!</button>
        </div>
    )
}
export default BehavioralCards