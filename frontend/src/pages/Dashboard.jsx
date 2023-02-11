import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Link to="/" className="link">
        To Home
      </Link>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
