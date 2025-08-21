import logoH from "../assets/Logo-H.svg";
import locationIcon from "../assets/locationIcon.png";
const HomePageFooter = () => {
  return (
    <div className="bg-[#03143D]">
      <div className="grid grid-cols-2 gap-5 w-full">
        <div className="flex flex-col p-10">
          <div>
            <img
              src={logoH}
              alt="Foroz Logo"
              className="w-[150px] h-[50px] mb-4 cursor-pointer"
            />
          </div>
          <div>
            <h3 className="text-white text-3xl cursor-pointer">Stay Update</h3>
            <p className="text-white text-sm cursor-pointer">
              Sign up to stay in the loop on all things Passage, from
              announcements, to new opportunities and programs.
            </p>
          </div>
        </div>
        <div className="flex flex-col cursor-pointer md:flex md:flex-row lg:flex lg:flex-row p-10 gap-5 font-sans text-white ">
          <p>Opportunites</p>
          <p>Get Involved</p>
          <p>Company</p>
          <p>Support</p>
        </div>
      </div>
      <div className="p-10 pt-0 flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-start lg:justify-start">
        <input
          type="email"
          className="w-full cursor-pointer md:w-1/2 lg:w-1/3 p-2 rounded-md bg-white text-black"
          placeholder="Your E-mail"
          aria-label="Recipient's email"
          aria-describedby="button-addon2"
        />
        <button
          className="text-white max-w-16 max-h-10 bg-black p-2 rounded-md ml-2 hover:bg-gray-800 transition-colors duration-300"
          type="button"
          id="button-addon2"
        >
          I'm in
        </button>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 pl-10 pb-5 cursor-pointer">
        <p className="text-white">© 2025 Foroz Inc. All Rights Reserved.</p>
        <p className="text-white">Privacy Policy</p>
        <p className="text-white">Terms of Service</p>
        <p className="text-white">Withdrawal Policy</p>
      </div>
      <div className="flex pl-10">
        <img src={locationIcon} alt="Location Icon" className="w-6 h-6" />
        <p className="text-white text-2xl cursor-pointer">Kabul, Afghanistan</p>
      </div>
      <div>
        <p class="text-center cursor-pointer text-[#969494] mt-2 pt-5">
          Terms and conditions apply. All trademarks and logos and brand names
          are the property of their respective owners.
        </p>
      </div>
    </div>
  );
};
export default HomePageFooter;
