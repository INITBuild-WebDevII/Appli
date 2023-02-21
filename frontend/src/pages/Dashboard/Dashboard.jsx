import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dash-nav-bar">
        <img src="" alt="logo" className="logo-img" />
        <table>
          <tr>
            <td>
              <img src="" alt="Icon"/>
            </td>
            <td>
              <li className="dash-nav-bar-item">Dashboar</li>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="Icon" />
            </td>
            <td>
            <Link to="/" className="link dash-nav-bar-item">
               Find Jobs 
            </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="Icon" />
            </td>
            <td>
              <li className="dash-nav-bar-item">Resume</li>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="Icon" />
            </td>
            <td>
              <Link to="/Resources" className="link dash-nav-bar-item">
                Resources
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="Icon" />
            </td>
            <td>
              <Link to="/Profile" className="link dash-nav-bar-item">
                Profile
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img src="" alt="Icon" />
            </td>
            <td>
              <li className="dash-nav-bar-item">Setting</li>
            </td>
          </tr>
        </table>
        <button> + </button>
      </div>


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
