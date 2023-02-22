import { Link } from "react-router-dom";
import DashNavbar from "../../components/Dashboard/DashNavbar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashNavbar />
      <div className="main-contain">
        <div className="heading">
          <form action="/" method="get">
            <input className="search" type="search" value="Search" name="lookUp" />
          </form>
          <h2 className="heading middle">My Applications</h2>
          <a className="heading right" href="/Profile">
            <img className="profile-img" src="" alt=""/>
            Username
          </a>
        </div>

        <h1 className="greeting">Hello, User</h1>

        <div className="category-phase">
          <div className="category-heading toApply" >
            <p>To Apply</p>
          </div>
          <div className="category-contain toApply-contain">
            <p>To Apply</p>
            <button className="category-btn"> + </button>
            <hr />
            <div className="toApply-item item"></div>
            <div className="toApply-item item"></div>
            <div className="toApply-item item"></div>
            <div className="toApply-item item"></div>
          </div>
        </div>

        <div className="category-phase">
          <div className="category-heading applied" >
            <p>Applied</p>
          </div>
          <div className="category-contain applied-contain">
            <p>Applied</p>
            <button className="category-btn"> + </button>
            <hr />
            <div className="applied-item item"></div>
            <div className="applied-item item"></div>
            
          </div>
        </div>

        <div className="category-phase">
          <div className="category-heading inProgress" >
            <p>In Progress</p>
          </div>

          <div className="category-contain inProgress-contain">
            <p>In Progress</p>
            <button className="category-btn"> + </button>
            <hr />
            <div className="inProgress-item item"></div>
            <div className="inProgress-item item"></div>
            <div className="inProgress-item item"></div>
          </div>
        </div>
        
        <div className="category-phase">
          <div className="category-heading accepted" >
            <p>Accepted</p>
          </div>

          <div className="category-contain accepted-contain">
            <p>Accepted</p>
            <button className="category-btn"> + </button>
            <hr />
            <div className="accepted-item item"></div>
          </div>
        </div>

        <Link to="/" className="link home">
        To Home
        </Link>
      </div>
      
    </div>
  );
}

export default Dashboard;
