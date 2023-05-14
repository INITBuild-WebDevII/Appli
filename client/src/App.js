import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Jobs from "./pages/Jobs/Jobs";
import Signup from "./pages/Signup/Signup";
import Settings from "./pages/Settings/Settings";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const {user} = useAuthContext();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={user ? <Dashboard/>: <Navigate to="/Login"/>} />
          <Route path="/Resources" element={user ? <Resources/>: <Navigate to="/Login"/>} />
          <Route path="/Login" element={!user ? <Login />: <Navigate to="/Dashboard"/>} />            <Route path="/About" element={<About />} />
          <Route path="/Jobs" element={user ? <Jobs/>: <Navigate to="/Login"/>} />
          <Route path="/Signup" element={!user ?  <Signup/>: <Navigate to="/Dashboard"/>} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
