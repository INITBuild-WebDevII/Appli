import "./Home.css";
import Navbar from "../../components/Navbar";
import LandingSection from "./LandingSection";

function Home() {
  return (
    <div className="main">
      <Navbar />
      <div className="landing-section">
        <LandingSection />
      </div>
      <div className="first-section">
        <h1>Track your applications</h1>
        <p>
          Our dashboard helps you keep track of all your technical job
          applications in one place. Stay organized and on top of your job
          search with Appli.
        </p>
      </div>
      <div className="section">
        <h1>Find Jobs</h1>
        <h1>Resources</h1>
      </div>
      <div className="section">
        <h1>What Our Clients Say About Us</h1>
      </div>
      <div className="section">
        <h1>Hey</h1>
      </div>
    </div>
  );
}

export default Home;
