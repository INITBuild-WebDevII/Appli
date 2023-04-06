import "./BehavioralQuestion.css"
import BehavioralCards from "./BehavioralCards"
import LearnMore from "./LearnMore"
import { useState } from "react"

function BehavioralQuestion() {
    // Would like to put the Behavioral cards collection into the databases
    const cardsCollection = [
        {
            title: "Amazon STAR Method", 
            body:"The STAR method is a structured way of answering behavioral interview questions. STAR stands for Situation, Task, Action, and Results!"
        },
        {
            title:"BAR Method",
            body: "The BAR method is used to construct a story when asked behavior questions. BAR stands for Background, Action, and Results."
        },
        {
            title:"Most Common Questions",
            body:"Most Behavioral Questions have been asked many times with the common goal of understand the candidate. Here’s a list of the 30 most asked questions!"
        },
        {
            title:"Knowing the Job",
            body:"Researching a company and its position can show the company that you care about what you are applying for when they ask!"
        },
        {
            title:"Reviewing your work",
            body:"Reviewing your work and being prepared to talk about what you’ve accomplished can help you land that job!"
        },
        {
            title:"Practice Makes Perfect",
            body:"Practicing common questions with a friend can help you to better prepare for when those common questions are asked!"
        }
    ]
    const [continueReading, setContinueReading] = useState(false)
    const [activeCard, setActiveCard] = useState()
    
    function updateClick(value,index){
        setContinueReading(value)
        setActiveCard(index)
    }
    return(
    <div className="behavioral-question">
            <div className="behavioral-heading">

                <h4 className="behavioral-title">Behavioral Questions</h4>
                <p>Here is a few tips and tricks to acing those Behavioral Questions!</p>
                 
                {cardsCollection.map((card, index)=>{
                    return(<BehavioralCards 
                        title={card.title} body={card.body} updateState={()=>{updateClick(true,index)}} />)
                })}
                {continueReading && cardsCollection.map(()=>{
                    return(<LearnMore title={cardsCollection[activeCard].title} body={cardsCollection[activeCard].body} updateState={()=>{updateClick(false)}} />)
                })}
            </div>
    </div>)
}

export default BehavioralQuestion