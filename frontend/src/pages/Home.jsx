import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/Dashboard" className="link">
        To Dashboard
      </Link>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
