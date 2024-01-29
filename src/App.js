import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modules from "./components/Modules/Modules";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Update path for Modules */}
          <Route path="/modules" element={<Modules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
