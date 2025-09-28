import logoH from "../assets/Logo-H.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="p-3 px-6">
        <div className="flex justify-between items-center ">
          <div>
            <img
              src={logoH}
              alt="Page-Logo"
              className="w-[180px] h-[100px] lg:w-[200px] lg:h-[100px]"
            />
          </div>
          <div className="hidden md:block lg:block xl:block">
            <nav>
              <ul className="flex gap-5 text-lg font-sans cursor-pointer items-center">
                <li
                  onClick={() => setState(true)}
                  className="hover:underline hover:decoration-solid  hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10 active:underline active:decoration-solid active:decoration-[rgb(184,207,227)] active:decoration-3 active:underline-offset-10"
                >
                  Opportuities <sup className="text-blue-400">+</sup>
                </li>
                <li className="hover:underline hover:decoration-solid hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10 active:underline active:decoration-solid active:decoration-[rgb(184,207,227)] active:decoration-3 active:underline-offset-10">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:underline hover:decoration-solid hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10 active:underline active:decoration-solid active:decoration-[rgb(184,207,227)] active:decoration-3 active:underline-offset-10">
                  About
                </li>
                <li className="hover:underline hover:decoration-solid hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10 active:underline active:decoration-solid active:decoration-[rgb(184,207,227)] active:decoration-3 active:underline-offset-10">
                  Our Vision
                </li>
                <button className="rounded-4xl text-white bg-[#062A7F] font-sans px-[22px] py-3 hover:bg-[#2154c9] active:bg-[#2154c9]">
                  <Link to="/login">Login</Link>
                </button>
              </ul>
            </nav>
          </div>
          <div className="block md:hidden lg:hidden xl:hidden">
            <button
              id="menu-btn"
              onClick={toggleMenu}
              class="block md:hidden focus:outline-none hover:bg-[#062A7F] p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {menu ? <MobileMenu /> : null}
          </div>
        </div>
        <hr className="bg-[#959191]  text-[#959191] border-solid border-[#959191] h-[2px] my-3" />
      </div>
      {state ? null : <Home />}
    </div>
  );
};
export default Navbar;

const MobileMenu = () => {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <AnimatePresence>
      {menu ? (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 md:w-[400px] lg:w-[400px] w-[200px] h-full bg-[#03143D] opacity-95 text-white"
        >
          <button
            id="close-btn"
            onClick={toggleMenu}
            className="absolute top-4 right-4 hover:text-2xl hover:font-bold active:text-2xl active:font-bold cursor-pointer"
          >
            ✕
          </button>
          <ul class="space-y-6 mt-10 p-10">
            <li>
              <a
                href="#"
                class="block hover:underline hover:decoration-solid hover:decoration-[white] hover:decoration-3 hover:underline-offset-10 active:underline active:decoration-solid active:decoration-[white] text-lg active:decoration-3 active:underline-offset-10"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block hover:underline hover:decoration-solid hover:decoration-[white] hover:decoration-3 hover:underline-offset-10 active:underline active:decoration-solid active:decoration-[white] text-lg active:decoration-3 active:underline-offset-10"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block hover:underline hover:decoration-solid hover:decoration-[white] hover:decoration-3 hover:underline-offset-10 active:underline active:decoration-solid active:decoration-[white] text-lg active:decoration-3 active:underline-offset-10"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block hover:underline hover:decoration-solid hover:decoration-[white] hover:decoration-3 hover:underline-offset-10 active:underline active:decoration-solid active:decoration-[white] text-lg active:decoration-3 active:underline-offset-10"
              >
                Contact
              </a>
            </li>
            <button className="rounded-4xl cursor-pointer w-full text-white bg-[#062A7F] font-sans px-[22px] py-3 hover:bg-[#2154c9] active:bg-[#2154c9]">
              Login
            </button>
          </ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
