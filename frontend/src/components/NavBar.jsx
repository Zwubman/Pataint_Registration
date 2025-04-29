import React from "react";
import { FaHome, FaUser, FaServicestack, FaDownload } from "react-icons/fa"; // Import icons from React Icons

const NavBar = () => {
  return (
    <div className="bg-blue-600 fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 shadow-lg z-50">
      <div className="flex items-center space-x-6">
        <button className="text-white text-2xl font-semibold py-2 px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2">
          <FaHome className="w-6 h-6" />
          <span>Home</span>
        </button>
        <button className="text-white text-2xl font-semibold py-2 px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2">
          <FaUser className="w-6 h-6" />
          <span>My Account</span>
        </button>
        <button className="text-white text-2xl font-semibold py-2 px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2">
          <FaServicestack className="w-6 h-6" />
          <span>Service</span>
        </button>
        <button className="text-white text-2xl font-semibold py-2 px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2">
          <FaDownload className="w-6 h-6" />
          <span>Download/View</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
