import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-letter.png";
import letters from "../assets/appli-letters.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar(prop) {
  return (
    <nav className={prop.position}>
      <div className="logo">
        <img src={logo} alt="logo" id="logo" />
        <img id="letters" src={letters} />
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
      <button class="burger-menu" id="burger-menu">
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}

export default Navbar;
