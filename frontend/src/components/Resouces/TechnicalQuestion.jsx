import "./TechnicalQuestion.css"
import ProgressBar from "./ProgressBar"

function TechnicalQuestion(){
    const blind75 = ["Array and Hashing","Two Pointers","Sliding Windows","Stack","Binary Search","Linked List",
"Trees","Tries","Heap/Priority Queue","Backtracking","Graphs","Advanced Graphs","1-D Dynamic Programming",
"2-D Dynamic Programming","Greedy","Intervals","Math & Geometry","Bit Manipulation"]
    return(
        <div className="technical-question">
            <div className="technical-heading">
                <h4 className="technical-title">Blind 75</h4>
                <p>Blind 75 is a list of 75 most frequently asked leetcode questions!</p>
            </div>
            <ul className="question-list">
                {blind75.map((element)=>{
                    const randomNumber= Math.floor(Math.random() * 100)
                    return(
                        <div className="element">
                            <li className="list click">{element}</li>
                            <ProgressBar percentage={randomNumber}/>
                        </div>
                    )})}
                    <li style={{visibility: "hidden"}} className="element" >.</li>
            </ul>
        </div>
    )
}
export default TechnicalQuestion