import { Link } from "react-router-dom";
import "./About.css";
import Navbar from "../../components/Navbar";

function About() {
  return (
    <div className="about">
      <Navbar/>
      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      {/*
      <div className="members-container">
        <div className="member-card">
          <h1>Miguel</h1>
          <div>Product Owner</div>
        </div>
  </div>*/}
      <Link to="/" className="link">
        To Home
      </Link>
    </div>
  );
}

export default About;
