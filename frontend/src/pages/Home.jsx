import { Link } from "react-router-dom";
import Item from "../components/Item";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/Dashboard" className="link">
        To Dashboard
      </Link>
      <Item />
    </div>
  );
}

export default Home;
