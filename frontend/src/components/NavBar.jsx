import React from "react";
import { FaHome, FaUser, FaServicestack, FaDownload } from "react-icons/fa"; // Import icons from React Icons
import SideBar from "./SideBar";

const NavBar = () => {
  return (
    <div className="bg-blue-600 fixed top-0 left-0 w-full h-16 flex items-center justify-between px-3 sm:px-6 shadow-lg z-50">
      <div className="flex w-full justify-start items-center">
        <SideBar  />
        <button className="text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2">
          <FaHome className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Home</span>
        </button>
        <button className="text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2">
          <FaServicestack className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Service</span>
        </button>
        <button className="text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2">
          <FaDownload className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Download/View</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
