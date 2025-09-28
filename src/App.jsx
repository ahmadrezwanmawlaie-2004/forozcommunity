import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [state, setState] = useState({
    Opportunities: false,
    Home: false,
    About: false,
    OurVision: false,
    Login: false,
  });
  return (
    <div className="bg-[#E8E8E8] flex flex-col gap-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
