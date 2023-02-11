import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/" className="link">
        To Home
      </Link>
    </div>
  );
}

export default Dashboard;
