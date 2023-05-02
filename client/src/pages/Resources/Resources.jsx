import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourceBtn from "../../components/Resouces/ResourceBtn";
import ResumeTemplate from "../../components/Resouces/ResumeTemplate";
import TechnicalQuestion from "../../components/Resouces/TechnicalQuestion";
import BehavioralQuestion from "../../components/Resouces/Behavioral/BehavioralQuestion"
import "./Resources.css";
import strong from "../../assets/resources/strong.png"
import resumeicon from "../../assets/resources/resumeicon.png"
import technicalicon from "../../assets/resources/technicalicon.png"
import behavioralicon from "../../assets/resources/behavioralicon.png"
import { useState } from "react";

function Resources() {
  const [material, setMaterial] = useState("resumeTemplate")

  return (
    <div  className="resources">
      <Navbar position="relative"/>
      <div className="resource-content">
        <div>
          <img className="strong" src={strong} alt="strong"/>
          <div className="contenttext">
            <h1 className="contenth1">Resources to Ace that Application!</h1>
            <p>Appli offers you resources to ace that application such as resume templates, common technical and behavioral questions!</p>
          </div>
        </div>
        <div className="resource-icons">

          <ResourceBtn click={()=>setMaterial(`resumeTemplate`)} title="Resume Template"  src={resumeicon} />
          <ResourceBtn click={()=>setMaterial(`technicalQuestion`)} title="Technical Questions"  src={technicalicon}/>
          <ResourceBtn click={()=>setMaterial(`behavioralQuestion`)} title="Behavioral Questions"  src={behavioralicon} />
        
        </div>
        <div className="interview-resources">
            {material === "resumeTemplate" && <ResumeTemplate />}
            {material === "technicalQuestion" && <TechnicalQuestion />}
            {material === "behavioralQuestion" && <BehavioralQuestion />}
            
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
