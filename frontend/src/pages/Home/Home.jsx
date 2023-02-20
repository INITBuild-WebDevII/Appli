import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="background">
      <div className="section">
        <Navbar />
      </div>
      <div className="section">
        <h1>Track your applications</h1>
      </div>
      <div className="section">
        <h1>Find Jobs</h1>
      </div>
      <div className="section">
        <h1>Hey</h1>
      </div>
      <div className="section">
        <h1>Hey</h1>
      </div>
    </div>
  );
}

export default Home;
