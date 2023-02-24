import { Link } from "react-router-dom";
import "./DashNavbar.css";

function DashNavbar(){
    return(
        <nav className="dashboard-navbar">
        <img src="" alt="logo" className="logo-img" />
        <table>
          <tr>
            <td>
              <img className="navbar-item click" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item click">Dashboar</li>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item click" src="" alt="Icon"/>
            </td>
            <td>
            <Link to="/" className="link navbar-item click">
                Find Jobs 
            </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item click" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item click">Resume</li>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item click" src="" alt="Icon"/>
            </td>
            <td>
              <Link to="/Resources" className="link navbar-item click">
                Resources
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item click" src="" alt="Icon"/>
            </td>
            <td>
              <Link to="/Profile" className="link navbar-item click">
                Profile
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img className="navbar-item click" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item click">Setting</li>
            </td>
          </tr>
        </table>
        <button className="click"> + </button>

        <div className="calendar">
          <p>Calendar</p>
        </div>
      </nav>
    );
}
export default DashNavbar;