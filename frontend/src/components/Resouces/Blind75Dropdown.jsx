import { useState } from "react"
import "./Blind75Dropdown.css"

function Blind75Dropdown({unit}){
    const [dropdown, setDropdown] = useState(false)

    return(
        <div className="dropdown">
            <div className="data-structure-type">
                <button className="dropdown-btn" onClick={()=>{setDropdown(!dropdown)}}>
                    <li className="list click">{unit.dataStructure}</li>
                </button>
            </div>
            <div className="dropdown-menu">
                {dropdown && unit.questions.map((question)=>{
                    return(
                        <a className="leetcode-link" target="_blank" href={question.link}><p className="blind75-question">{question.name}</p></a>
                        
                    )
                })}
            </div>
        </div>
    )
}
export default Blind75Dropdown