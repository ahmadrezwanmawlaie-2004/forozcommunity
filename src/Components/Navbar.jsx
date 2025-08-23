import logoH from "../assets/Logo-H.svg";
const Navbar = () => {
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
              <li className="hover:underline hover:decoration-solid hover:decoration-[rgb(184,207,227)] hover:decoration-3 hover:underline-offset-10">
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
        <div className="block md:hidden lg:hidden xl:hidden">Good For you</div>
      </div>
    </div>
  );
};
export default Navbar;
