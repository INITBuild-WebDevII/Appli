import DashNavbar from "../../components/Dashboard/DashNavbar";
import Column from "../../components/Dashboard/Column";
import "./Dashboard.css";

function Dashboard() {
  // dummy data
  let toApply = ["Intel", "Apple", "Tesla"];
  let applied = ["Amazon", "Google", "Microsoft", "UKG", "Kaseya", "Twitter", "Oracle", "Cisco", "Capital One"];
  let inProgress = ["IBM", "Meta"];
  let accepted = ["Twitch"];

  return (
    <div className="dashboard">
      <DashNavbar />
      <div className="main-contain">
        <div className="heading">
          <h1 className="heading middle">My Applications</h1>
          <a className="heading right" href="/Profile">
            <img className="profile-img" src="" alt="" />
            Username
          </a>
        </div>

        {/*<h1 className="greeting">Hello, User</h1>*/}

        <div className="board-columns">
          <Column title="To Apply" color="#66b6ff" list={toApply} />
          <Column title="Applied" color="#54bb5a" list={applied} />
          <Column title="In Progress" color="#f4b870" list={inProgress} />
          <Column title="Accepted" color="#ff6798" list={accepted} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
