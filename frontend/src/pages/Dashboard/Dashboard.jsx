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
          <h1 className="heading middle">My Applications</h1>
          <a className="heading right" href="/Profile">
            <img className="profile-img" src="" alt="" />
            Username
          </a>
        </div>

        {/*<h1 className="greeting">Hello, User</h1>*/}

        <div className="board-columns">
          <div className="category-column">
            <div className="category-heading toApply">
              <p>To Apply</p>
            </div>
            <div className="category-contain toApply-contain">
              <p>To Apply</p>
              <button className="category-btn" type="submit">
                +
              </button>
              <hr />
              <div className="items-container">
                <Items name="toApply" />
              </div>
            </div>
          </div>

          <div className="category-column">
            <div className="category-heading applied">
              <p>Applied</p>
            </div>
            <div className="category-contain applied-contain">
              <p>Applied</p>
              <button className="category-btn" type="submit">
                +
              </button>
              <hr />
              <div className="items-container">
                <Items name="Applied" />
              </div>
            </div>
          </div>

          <div className="category-column">
            <div className="category-heading inProgress">
              <p>In Progress</p>
            </div>

            <div className="category-contain inProgress-contain">
              <p>In Progress</p>
              <button className="category-btn" type="submit">
                +
              </button>
              <hr />
              <div className="items-container">
                <Items name="inProgress" />
              </div>
            </div>
          </div>

          <div className="category-column">
            <div className="category-heading accepted">
              <p>Accepted</p>
            </div>

            <div className="category-contain accepted-contain">
              <p>Accepted</p>
              <button className="category-btn" type="submit">
                +
              </button>
              <hr />
              <div className="items-container">
                <Items name="accepted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
