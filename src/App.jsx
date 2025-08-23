import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePageFooter from "./Components/HomePageFooter";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-[#E8E8E8]">
      <Navbar />
      <HomePageFooter />
    </div>
  );
}

export default App;
