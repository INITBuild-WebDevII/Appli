import { Link } from "react-router-dom";
import "./DashNavbar.css";

function DashNavbar(){
    return(
        <nav className="dash-nav-bar">
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

          <div className="calendar">
            <p>Calendar</p>
          </div>
      </nav>
    );
}
export default DashNavbar;