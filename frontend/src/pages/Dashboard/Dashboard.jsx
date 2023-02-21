import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dash-nav-bar">
        <ul>
          <li className="dash-nav-bar-item">Dashboar</li>
          <Link to="/" className="link dash-nav-bar-item">
          Find Jobs 
          </Link>
          <li className="dash-nav-bar-item">Resume</li>
          <Link to="/Resources" className="link dash-nav-bar-item">
          Resources
        </Link>
          <li className="dash-nav-bar-item">Profile</li>
          <li className="dash-nav-bar-item">Setting</li>
        </ul>
      </div>

      <div className="container">
        <div className="heading">
          <p className="heading left">hello</p>
          <h1 className="heading middle">My Applications</h1>
          <p className="heading right">User</p>
        </div>
        <h2>Hello, Danny</h2>
      </div>
      <Link to="/" className="link">
        To Home
      </Link>
    </div>
  );
}

export default Dashboard;
