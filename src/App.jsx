import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePageFooter from "./Components/HomePageFooter";
import Navbar from "./Components/Navbar";
import HomeBody from "./Components/HomeBody";
function App() {
  return (
    <div className="bg-[#E8E8E8] flex flex-col gap-10">
      <Navbar />
      <HomeBody />
      <HomePageFooter />
    </div>
  );
}

export default App;
