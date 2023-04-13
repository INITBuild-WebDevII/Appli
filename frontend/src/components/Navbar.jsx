import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-letter.png";
import letters from "../assets/appli-letters.png";

function Navbar(prop) {
  return (
    <nav className={prop.position}>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" id="logo" />
          <img id="letters" src={letters} />
        </a>
      </div>

      <ul>
        <li>
          <Link to="/Dashboard" className="link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Resources" className="link">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/Jobs" className="link">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/About" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/Login" className="link">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
