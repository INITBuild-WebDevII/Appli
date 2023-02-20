import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="dash-nav-bar">
        <ul>
          <li className="dash-nav-bar-item">Dashboar</li>
          <li className="dash-nav-bar-item">Find Jobs</li>
          <li className="dash-nav-bar-item">Resume</li>
          <li className="dash-nav-bar-item">Resource</li>
          <li className="dash-nav-bar-item">Profile</li>
          <li className="dash-nav-bar-item">Setting</li>
        </ul>
      </div>

      <div>
        <h1>My Applications</h1>
      </div>
      <h2>Hello, Danny</h2>
      <Link to="/" className="link">
        To Home
      </Link>
    </div>
  );
}

export default Dashboard;
