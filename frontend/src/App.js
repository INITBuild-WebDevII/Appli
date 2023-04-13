import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Jobs from "./pages/Job/Jobs";




function App() {
  const {user} = useAuthContext();
  
  return (
    <div className="App">
      {/* Router to create different links */}
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={user ? <Dashboard/>: <Navigate to="/Login"/>} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Login" element={!user ? <Login />: <Navigate to="/Dashboard"/>} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/About" element={<About />} />
            <Route path="/Signup" element={!user ?  <Signup/>: <Navigate to="/Dashboard"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
