import { Link } from "react-router-dom";
import DashNavbar from "../../components/Dashboard/DashNavbar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashNavbar />
      <div className="main-contain">
        <div className="heading">
          <p className="heading left">Search</p>
          <h2 className="heading middle">My Applications</h2>
          <a className="heading right" href="/Profile">
            <img className="profile-img" src="" alt=""/>
            Username
          </a>
        </div>

        <h1>Hello, Danny</h1>

        <div className="process-categories toApply" >
          <p>To Apply</p>
        </div>
        <div className="process-categories applied" >
          <p>Applied</p>
        </div>
        <div className="process-categories inProgress" >
          <p>In Progress</p>
        </div>
        <div className="process-categories accepted" >
          <p>Accepted</p>
        </div>
        <Link to="/" className="link">
        To Home
        </Link>
      </div>
      
    </div>
  );
}

export default Dashboard;
