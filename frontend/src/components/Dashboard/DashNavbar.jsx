import { Link } from "react-router-dom";
import "./DashNavbar.css";
import logo from "../../assets/logo-letter.png";
import {SlHome} from "react-icons/sl"
import {HiOutlineSquares2X2} from "react-icons/hi2";
import {AiOutlineFileText} from "react-icons/ai";
import {BsChatLeft, BsPerson} from "react-icons/bs";
import {CiSettings} from "react-icons/ci";


function DashNavbar(){
    return(
        <nav className="dashboard-navbar">
        <img src={logo} alt="logo" className="logo-img" />
        <table>
          <tr>
            <td>
              <SlHome color="white" size={"2em"} className="navbar-item click icon" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item click">Dashboard</li>
            </td>
          </tr>
          <tr>
            <td>
              <HiOutlineSquares2X2 stroke="white"  size={"2em"} className="navbar-item click icon find-icon" src="" alt="Icon"/>
            </td>
            <td>
            <Link to="/" className="link navbar-item click">
                Find Jobs 
            </Link>
            </td>
          </tr>
          <tr>
            <td>
              <AiOutlineFileText stroke="white" fill="white" size={"2em"} className="navbar-item click icon" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item click">Resume</li>
            </td>
          </tr>
          <tr>
            <td>
              <BsChatLeft stroke="white" fill="white" size={"2em"} className="navbar-item click icon resources-icon" src="" alt="Icon"/>
            </td>
            <td>
              <Link to="/Resources" className="link navbar-item click">
                Resources
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <BsPerson stroke="white" fill="white" size={"2em"} className="navbar-item click icon" src="" alt="Icon"/>
            </td>
            <td>
              <Link to="/Profile" className="link navbar-item click">
                Profile
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <CiSettings stroke="white" fill="white" size={"2em"} className="navbar-item click icon settings-icon" src="" alt="Icon"/>
            </td>
            <td>
              <li className="navbar-item click">Settings</li>
            </td>
          </tr>
        </table>

        <div className="calendar">
          <p>Calendar</p>
        </div>
      </nav>
    );
}
export default DashNavbar;