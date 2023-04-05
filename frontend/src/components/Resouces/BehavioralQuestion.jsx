import "./BehavioralQuestion.css"
import BehavioralCards from "./BehavioralCards"
import LearnMore from "./LearnMore"
import { useState } from "react"

function BehavioralQuestion() {


    return(
    <div className="behavioral-question">
            <div className="behavioral-heading">
                <h4 className="behavioral-title">Behavioral Questions</h4>
                <p>Here is a few tips and tricks to acing those Behavioral Questions!</p>
                 <BehavioralCards  
                 title="Amazon STAR Method"  
                 para="The STAR method is a structured way of answering behavioral interview questions. STAR stands for Situation, Task, Action, and Results!"/>
                 <BehavioralCards  title="BAR Method"  para="The BAR method is used to construct a story when asked behavior questions. BAR stands for Background, Action, and Results."  />
                 <BehavioralCards  title="Most Common Questions"  para="Most Behavioral Questions have been asked many times with the common goal of understand the candidate. Here’s a list of the 30 most asked questions!"  />
                 <BehavioralCards  title="Knowing the Job"  para="Researching a company and its position can show the company that you care about what you are applying for when they ask!"  />
                 <BehavioralCards  title="Reviewing your work"  para="Reviewing your work and being prepared to talk about what you’ve accomplished can help you land that job!"  />
                 <BehavioralCards  title="Practice Makes Perfect"  para="Practicing common questions with a friend can help you to better prepare for when those common questions are asked!"  />

            </div>
    </div>)
}

export default BehavioralQuestion