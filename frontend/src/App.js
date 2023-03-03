import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      {/* Router to create different links */}
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Signup" element={<Signup/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
