import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Us Page</h1>
      <Link to="/" className="link">
        To Home
      </Link>
    </div>
  );
}

export default About;
