import React from "react";
import pepsmoke from "../assets/pep-smoke.svg";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center p-4 bg-green-200 bg-gradient-to-r from-green-200 to-green-600">
      <img src={pepsmoke} alt="logo" className="" />
      <button className="bg-[#427B24] text-white border-black border-2 rounded-full px-6 py-2 text-lg hover:bg-opacity-80 transition duration-300 ease-in-out">
        Buy
      </button>
    </header>
  );
};

export default Header;
