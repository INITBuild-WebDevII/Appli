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
                        <p className="blind75-question">{question}</p>
                    )
                })}
            </div>
        </div>
    )
}
export default Blind75Dropdown