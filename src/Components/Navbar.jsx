import logoH from "../assets/Logo-H.svg";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
        <div>
          <img
            src={logoH}
            alt="Page-Logo"
            className="w-[220px] h-[100px] lg:w-[240px] lg:h-[100px]"
          />
        </div>
        <div className="hidden md:block lg:block xl:block">
          <nav>
            <ul className="flex gap-5 text-lg font-sans cursor-pointer items-center">
              <li className="hover:underline hover:decoration-solid  hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10">
                Opportuities <sup className="text-blue-400">+</sup>
              </li>
              <li className="hover:underline hover:decoration-solid hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10">
                Home
              </li>
              <li className="hover:underline hover:decoration-solid hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10">
                About
              </li>
              <li className="hover:underline hover:decoration-solid hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10">
                Our Vision
              </li>
              <button className="rounded-4xl text-white bg-[#062A7F] font-sans px-[22px] py-3 hover:bg-[#2154c9]">
                Login
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
    <div>
      {menu ? (
        <div
          id="menu"
          class="fixed top-0 left-0 w-[400px] h-full bg-[#03143D] opacity-95 text-white"
        >
          <button
            id="close-btn"
            onClick={toggleMenu}
            class="absolute top-4 right-4 hover:text-2xl hover:font-bold cursor-pointer"
          >
            ✕
          </button>
          <ul class="space-y-6 mt-10 p-10">
            <li>
              <a
                href="#"
                class="block hover:underline hover:decoration-solid hover:decoration-[white] text-lg hover:decoration-3 hover:underline-offset-10"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block hover:underline hover:decoration-solid hover:decoration-[white] text-lg hover:decoration-3 hover:underline-offset-10"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block hover:underline hover:decoration-solid hover:decoration-[white] text-lg hover:decoration-3 hover:underline-offset-10"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block hover:underline hover:decoration-solid hover:decoration-[white] text-lg hover:decoration-3 hover:underline-offset-10"
              >
                Contact
              </a>
            </li>
            <button className="rounded-4xl cursor-pointer w-full text-white bg-[#062A7F] font-sans px-[22px] py-3 hover:bg-[#2154c9]">
              Login
            </button>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
