import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourceBtn from "../../components/Resouces/ResourceBtn";
import ResumeTemplate from "../../components/Resouces/ResumeTemplate";
import "./Resources.css";
import strong from "../../assets/strong.png"
import resumeicon from "../../assets/resumeicon.png"
import technicalicon from "../../assets/technicalicon.png"
import behavioralicon from "../../assets/behavioralicon.png"
import { useState } from "react";

function Resources() {
  const [material, setMaterial] = useState("resumeTemplate")


  return (
    <div  className="resources">
      <Navbar />
      <div className="content">
        <div>
          <img className="strong" src={strong} alt="strong"/>
          <div className="contenttext">
            <h1 className="contenth1">Resources to Ace that Application!</h1>
            <p>Appli offers you resources to ace that application such as resume templates, common technical and behavioral questions!</p>
          </div>
        </div>
        <div className="resource-icons">

          <ResourceBtn click={()=>setMaterial(`resumeTemplate`)} title="Resume Template"  src={resumeicon} />
          <ResourceBtn click={()=>setMaterial(`technicalQuestion`)} title="Technical Question"  src={technicalicon}/>
          <ResourceBtn click={()=>setMaterial(`behavioralQuestion`)} title="Behavioral Question"  src={behavioralicon} />
        
        </div>
        <div className="interview-resources">
            {material === "resumeTemplate" && <ResumeTemplate />}
            {/* {material === "technicalQuestion"}
            {material === "behavioralQuestion"} */}
            
        </div>
      </div>
      <Footer />
      <Link to="/" className="link">To Home</Link>
    </div>
  );
}

export default Resources;
