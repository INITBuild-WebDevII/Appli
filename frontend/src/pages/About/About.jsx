import "./About.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import miguelPic from "../../assets/about/miguel.png";
import nicolePic from "../../assets/about/nic.png";
import julianPic from "../../assets/about/jul.png";
import alexPic from "../../assets/about/alex.png";
import dannyPic from "../../assets/about/danny.png";
import camiPic from "../../assets/about/cami.png";

function About() {
  return (
    <div className="about-page">
      <Navbar position="relative"/>
      <div className="about">
        {/*<div style={{ height: "250px" }}></div>
        <div className="about-banner">
          <img className="banner" src={aboutBanner3} />
          <h2 className="about-left">
            We are a team of engineers at FIU <br />
            who created this website <br />
            to help other engineers <br />
            with getting internships and jobs!
          </h2>
          <h1 className="about-us">About Us</h1> 
  </div>*/}

        <div className="team-border">
          <h1 id="team-title">Meet Our Team!</h1>
          <h1 id="team-info">
            Our team has collaborated over a 10 week period to create this
            website to present to different companies at FIU!
          </h1>

          <div className="team-list-container">
            <div className="team-list">
              <div className="member-card">
                <a
                  href="https://www.linkedin.com/in/miguel-sablan/"
                  target="_blank"
                >
                  <img className="team-photo" src={miguelPic} />
                  <h3>Miguel Sablan</h3>
                  <div>Product Owner & Full-Stack Developer</div>
                </a>
              </div>
              <div className="member-card">
                <a
                  href="https://www.linkedin.com/in/nicole-gentil-0a594b185/"
                  target="_blank"
                >
                  <img className="team-photo" src={nicolePic} />
                  <h3>Nicole Gentil</h3>
                  <div>Full-Stack Developer</div>
                </a>
              </div>
              <div className="member-card">
                <a
                  href="https://www.linkedin.com/in/julianarias2023/"
                  target="_blank"
                >
                  <img className="team-photo" src={julianPic} />
                  <h3>Julian Arias</h3>
                  <div>Back-End Lead</div>
                </a>
              </div>
            </div>

            <div className="team-list">
              <div className="member-card">
                <img className="team-photo" src={dannyPic} />
                <h3>Danny Lawrence</h3>
                <div>UI-UX Designer & Full-Stack Developer</div>
              </div>
              <div className="member-card">
                <a href="https://www.linkedin.com/in/camicopoa" target="_blank">
                  <img className="team-photo" src={camiPic} />
                  <h3>Maria Camila</h3>
                  <div>Front-End Developer</div>
                </a>
              </div>
              <div className="member-card">
                <a
                  href="https://www.linkedin.com/in/chirinos-alexander"
                  target="_blank"
                >
                  <img className="team-photo" src={alexPic} />
                  <h3>Alexander Chirinos</h3>
                  <div>Back-End Assistant</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
