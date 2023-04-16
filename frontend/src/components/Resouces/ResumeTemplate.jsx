import "./ResumeTemplate.css"
import ResumeExample from "../../assets/resources/resumeExample.png"
import ResumePds from "../../assets/resources/resumeExample.pdf"
import ResumeDocx from "../../assets/resources/resumeExample.docx"

function ResumeTemplate(){
    return(
        <div className="resume-template">
            <div className="resume-border">
                <img className="resume-img" src={ResumeExample} alt="" />
            </div>
            <a className="pdf-link" href={ResumePds} download="Resume">
                <button className="copy-resume click">Get a copy</button> 
            </a>
            <a className="docx-link" href={ResumeDocx} download="Resume">
                <button className="recreate-resume click">Recreate</button>
            </a>
        </div>
    )
}

export default ResumeTemplate;