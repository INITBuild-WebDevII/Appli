import { Link } from "react-router-dom";
import "./DashNavbar.css";

function DashNavbar(){
    return(
        <nav className="dashboard-navbar">
        <img src="" alt="logo" className="logo-img" />
        <table>
          <tr>
            <td>
              <img className="navbar-item" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item">Dashboar</li>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item" src="" alt="Icon"/>
            </td>
            <td>
            <Link to="/" className="link navbar-item">
                Find Jobs 
            </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item">Resume</li>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item" src="" alt="Icon"/>
            </td>
            <td>
              <Link to="/Resources" className="link navbar-item">
                Resources
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item" src="" alt="Icon"/>
            </td>
            <td>
              <Link to="/Profile" className="link navbar-item">
                Profile
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item">Setting</li>
            </td>
          </tr>
        </table>
        <button> + </button>

        <div className="calendar">
          <p>Calendar</p>
        </div>
      </nav>
    );
}
export default DashNavbar;