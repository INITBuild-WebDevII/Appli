import "./LandingSection.css";
import rectangleImg from "../../assets/Rectangle.png";
import landingPageCards from "../../assets/LandingPageCards.png";
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <div className="hero">
      <img className="rectangle" src={rectangleImg} />
      <img className="cards" src={landingPageCards} />
      <div className="intro">
        <h1 id="title">Ace your Applications</h1>
        <p id="description">
          Appli is the best platform for people to find tech jobs, manage your
          applications, and ace those interviews!
        </p>
        <Link to="/Login" className="link">
          <button className="sign-up-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingSection;
