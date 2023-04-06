import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CarouselCard from "../../components/CarouselCard";
import LandingSection from "./LandingSection";
import Footer from "../../components/Footer"
import dashboardImg from "../../assets/dashboard-example.png"
import resourceGuy from "../../assets/ResourcesDesign.png"


function Home() {
  return (
    <div className="main">

      <div className="landing-section">
        <Navbar />
        <LandingSection />
      </div>

      <div className="first-section">
        <div className="section-text">
          <h1 className="section-headings">Track Your applications</h1>
          <p>
            Our dashboard helps you keep track of all your technical job
            applications in one place. Stay organized and on top of your job
            search with Appli.
          </p>
          <Link to="/Login" className="link redired-link">
            Get Started {`>`}
          </Link>
        </div>
        <img className="dash-img" src={dashboardImg} alt="" />
      </div>


      <div className="second-section">
        <div className="section-text">
          <h1 className="section-headings">Find Jobs</h1>
          <p>Our job search tool simplifies the process of finding new opportunities.
             Allowing users to easily filter though job postings and save listings for future reference</p>
          <Link to="/Jobs" className="link redired-link">
            View Jobs {`>`}
          </Link>
        </div>

        <div className="section-text right-float">
          <img src={resourceGuy} alt="" srcset="" />
          <h1 className="section-headings">Resources</h1>
          <p>Get the edge you need to ace your next technical interview with our resources,
             including LeetCode questions, resume templates, and interview tips</p>
          <Link to="/Resources" className="link redired-link">
              View Resources {`>`}
          </Link>
        </div>
      </div>


      <div className="third-section">
        <h1>What Our Clients Say About Us</h1>
        <CarouselCard />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
