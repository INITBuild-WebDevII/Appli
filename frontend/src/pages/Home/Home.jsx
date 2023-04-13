import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CarouselCard from "../../components/Carousel";
import LandingSection from "./LandingSection";
import Footer from "../../components/Footer"
import dashboardImg from "../../assets/Dashboard.png"
import resourceGuy from "../../assets/ResourcesDesign.png"
import jobGuy from "../../assets/fucking-nerd.png"


function Home() {
  return (
    <div className="home-page">

      <div className="landing-section">
        <Navbar />
        <LandingSection />
      </div>

      <div className="first-section">
        <div className="section-content first-section-content">
          <h1 className="section-title">Track Your applications</h1>
          <p>
            Our dashboard helps you keep track of all your technical job
            applications in one place. Stay organized and on top of your job
            search with Appli.
          </p>
          <Link to="/Login" className="link redired-link">
            Get Started {`>`}
          </Link>
        </div>
        <img className="dash-img floating" src={dashboardImg} alt="" />
      </div>


      <div className="second-section">
        <div className="section-content">
          <img className="second-section-imgs" src={jobGuy} alt="" />
          <h1 className="section-title">Find Jobs</h1>
          <p>Our job search tool simplifies the process of finding new opportunities.
             Allowing users to easily filter though job postings and save listings for future reference</p>
          <Link to="/Jobs" className="link redired-link">
            View Jobs {`>`}
          </Link>
        </div>

        <div className="section-content">
          <img className="second-section-imgs" src={resourceGuy} alt="" srcset="" />
          <h1 className="section-title">Resources</h1>
          <p>Get the edge you need to ace your next technical interview with our resources,
             including LeetCode questions, resume templates, and interview tips</p>
          <Link to="/Resources" className="link redired-link">
              View Resources {`>`}
          </Link>
        </div>
      </div>


      <div className="third-section">
        <CarouselCard />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
