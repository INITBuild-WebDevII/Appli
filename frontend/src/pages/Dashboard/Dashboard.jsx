import { Link } from "react-router-dom";
import DashNavbar from "../../components/Dashboard/DashNavbar";
import Items from "../../components/Dashboard/Items";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashNavbar />
      <div className="main-contain">
        <div className="heading">
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
            <form action="/Dashboard" method="post">
              <p>To Apply</p>
              <button className="category-btn" type="submit"> + </button>
              <hr />
              <Items name="toApply"/>
            </form>
          </div>
        </div>

        <div className="category-phase">
          <div className="category-heading applied" >
            <p>Applied</p>
          </div>
          <div className="category-contain applied-contain">
            <form action="/Dashboard" method="post">
              <p>Applied</p>
              <button className="category-btn" type="submit"> + </button>
              <hr />
              <Items name="Applied"/>
            </form>
          </div>
        </div>

        <div className="category-phase">
          <div className="category-heading inProgress" >
            <p>In Progress</p>
          </div>

          <div className="category-contain inProgress-contain">
            <form action="/Dashboard" method="post">
              <p>In Progress</p>
              <button className="category-btn" type="submit"> + </button>
              <hr />
              <Items name="inProgress"/>
            </form>
          </div>
        </div>  
        
        <div className="category-phase">
          <div className="category-heading accepted" >
            <p>Accepted</p>
          </div>

          <div className="category-contain accepted-contain">
            <form action="/Dashboard" method="post">
              <p>Accepted</p>
              <button className="category-btn" type="submit"> + </button>
              <hr />
              <Items name="accepted"/>
            </form>
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
