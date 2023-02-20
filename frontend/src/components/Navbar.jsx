import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>Appli</h1>
      <ul>
        <Link to="/Dashboard" className="link">
          Dashboard
        </Link>
        <Link to="/Resources" className="link">
          Resources
        </Link>
        <Link to="/" className="link">
          Jobs
        </Link>
        <Link to="/About" className="link">
          About
        </Link>
        <Link to="/Login" className="link">
          Sign In
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
