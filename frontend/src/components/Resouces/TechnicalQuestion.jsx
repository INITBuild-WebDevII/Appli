import "./TechnicalQuestion.css"

function TechnicalQuestion(){
    return(
        <div className="technical-question">
            <div className="technical-heading">
                <h4 className="technical-title">Blind 75</h4>
                <p>Blind 75 is a list of 75 most frequently asked leetcode questions!</p>
            </div>
            <ul className="question-list">
                <div className="element">
                    <li className="list">Array and Hashing</li>
                    <input type="range" name="progress" min="0" max="10"></input>
                </div>
                <li className="element">Two Pointers</li>
                <li className="element">Sliding Windows</li>
                <li className="element">Stack</li>
                <li className="element">Binary Search</li>
                <li className="element">Linked List</li>
                <li className="element">Trees</li>
                <li className="element">Tries</li>
                <li className="element">Heap/Priority Queue</li>
                <li className="element">Backtracking</li>
                <li className="element">Graphs</li>
                <li className="element">Advanced Graphs</li>
                <li className="element">1-D Dynamic Programming</li>
                <li className="element">2-D Dynamic Programming</li>
                <li className="element">Greedy</li>
                <li className="element">Intervals</li>
                <li className="element">Math & Geometry</li>
                <li className="element">Bit Manipulation</li>
                <li className="last-element">Congrats</li>
            </ul>
        </div>
    )
}
export default TechnicalQuestion