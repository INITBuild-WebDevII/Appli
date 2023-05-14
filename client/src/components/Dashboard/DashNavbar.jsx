import { Link } from "react-router-dom";
import "./DashNavbar.css";
import logo from "../../assets/logo-letter.png";
import { SlHome } from "react-icons/sl";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { AiOutlineFileText } from "react-icons/ai";
import { BsChatLeft, BsPerson } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import Calendar from "react-calendar";
import { useState } from "react";

function DashNavbar() {
  const [date, setDate] = useState(new Date());

  return (
    <nav className="dashboard-navbar">
      <img src={logo} alt="logo" className="logo-img" />
      <table className="navbar-table">
        <tr className="click">
          <td>
            <SlHome
              color="white"
              size={"2em"}
              className="navbar-item click icon"
              src=""
              alt="Icon"
            />
          </td>
          <td>
            <Link to="/Dashboard" className="link navbar-item click">
              Dashboard
            </Link>
          </td>
        </tr>
        <tr className="click">
          <td>
            <HiOutlineSquares2X2
              stroke="white"
              size={"2em"}
              className="navbar-item click icon find-icon"
              src=""
              alt="Icon"
            />
          </td>
          <td>
            <Link to="/Jobs" className="link navbar-item click">
              Find Jobs
            </Link>
          </td>
        </tr>
        <tr className="click">
          <td>
            <AiOutlineFileText
              stroke="white"
              fill="white"
              size={"2em"}
              className="navbar-item click icon"
              src=""
              alt="Icon"
            />
          </td>
          <td>
            <li className="navbar-item click">Resume</li>
          </td>
        </tr>
        <tr className="click">
          <td>
            <BsChatLeft
              stroke="white"
              fill="white"
              size={"2em"}
              className="navbar-item click icon resources-icon"
              src=""
              alt="Icon"
            />
          </td>
          <td>
            <Link to="/Resources" className="link navbar-item click">
              Resources
            </Link>
          </td>
        </tr>
        <tr className="click">
          <td>
            <BsPerson
              stroke="white"
              fill="white"
              size={"2em"}
              className="navbar-item click icon"
              src=""
              alt="Icon"
            />
          </td>
          <td>
            <Link to="/" className="link navbar-item click">
              Profile
            </Link>
          </td>
        </tr>
        <tr className="click">
          <td>
            <CiSettings
              stroke="white"
              fill="white"
              size={"2em"}
              className="navbar-item click icon settings-icon"
              src=""
              alt="Icon"
            />
          </td>
          <td>
            <Link to="/Settings" className="link navbar-item click">
              Settings
            </Link>
          </td>
        </tr>
      </table>
      {/*}
      <div className="calendar">
        <p>Calendar</p>
        <Calendar
          className="calendar1"
          onChange={setDate}
          value={date}
          selectRange={true}
        />
  </div>*/}
    </nav>
  );
}
export default DashNavbar;
