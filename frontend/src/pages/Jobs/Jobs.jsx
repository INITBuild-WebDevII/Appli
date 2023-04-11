import { Link } from "react-router-dom";

function Jobs() {
  return (
    <div>
      <h1>Jobs Page</h1>
      <Link to="/" className="link">
        To Home
      </Link>
    </div>
  );
}

export default Jobs;
