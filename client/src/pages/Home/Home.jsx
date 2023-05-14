import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import CarouselCard from "../../components/Carousel";
import Footer from "../../components/Footer";
import dashboardImg from "../../assets/Dashboard.png";
import resourceGuy from "../../assets/ResourcesDesign.png";
import jobGuy from "../../assets/FindJobsGuy.png";
import footerBackground from "../../assets/footer-background.png";
import rectangleImg from "../../assets/Rectangle.png";
import landingPageCards from "../../assets/LandingPageCards.png";

function Home() {
  return (
    <div className="home-page">
      <div className="landing-section">
        <Navbar />
        <div className="hero">
          <img className="rectangle" src={rectangleImg} alt="rectangle background"/>
          <img className="cards" src={landingPageCards} alt="landing page cards"/>
          <div className="intro">
            <h1 id="title">Ace Your Applications</h1>
            <p id="description">
              Appli is the best platform for people to find tech jobs, manage
              your applications, and ace those interviews!
            </p>
            <Link to="/Signup" className="link">
              <button className="sign-up-button">
                <span>Create Account</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="first-section">
        <div className="section-content first-section-content">
          <h1 className="section-title">Track Your Applications</h1>
          <p>
            Our dashboard helps you keep track of all your technical job
            applications in one place. Stay organized and on top of your job
            search with Appli.
          </p>
          <Link to="/Login" className="link redired-link">
            Get Started {`>`}
          </Link>
        </div>
        <img className="dash-img floating" src={dashboardImg} alt="floating dashboard" />
      </div>

      <div className="second-section">
        <div className="section-content">
          <img className="second-section-imgs" src={jobGuy} alt="Job Search Guy" />
          <h1 className="section-title">Find Jobs</h1>
          <p>
            Our job search tool simplifies the process of finding new
            opportunities. Allowing users to easily filter through job postings
            and save listings for future reference.
          </p>
          <Link to="/Jobs" className="link redired-link">
            View Jobs {`>`}
          </Link>
        </div>

        <div className="section-content">
          <img
            className="second-section-imgs"
            src={resourceGuy}
            alt="Resources Guy"
          />
          <h1 className="section-title">Resources</h1>
          <p>
            Get the edge you need to ace your next technical interview with our
            free resources, including LeetCode questions, resume templates, and
            interview tips.
          </p>
          <Link to="/Resources" className="link redired-link">
            View Resources {`>`}
          </Link>
        </div>
      </div>

      <div className="third-section">
        <CarouselCard />
      </div>

      <div style={{ backgroundImage: `url(${footerBackground})` }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
