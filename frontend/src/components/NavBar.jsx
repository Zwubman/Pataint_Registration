import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaServicestack, FaDownload, FaBars } from "react-icons/fa"; // Import icons from React Icons
import SideBar from "./SideBar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsOpen(false); // Close the sidebar
  };

  return (
    <div className="bg-blue-600 fixed top-0 left-0 w-full h-16 flex items-center justify-between px-3 sm:px-6 shadow-lg z-50">
      <SideBar isOpen={isOpen} closeSidebar={closeSidebar} /> {/* Pass state and handler */}
      <div className="flex w-full justify-start items-center">
        <button
          className="text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2"
          onClick={toggleSidebar} // Toggle sidebar on button click
        >
          <FaBars size={24} />
        </button>
        <Link
          to="/"
          className="text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2"
          onClick={closeSidebar} // Close sidebar when Home is clicked
        >
          <FaHome className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Home</span>
        </Link>
        <Link
          to="/service"
          className="text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2"
          onClick={closeSidebar} // Close sidebar when Service is clicked
        >
          <FaServicestack className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Service</span>
        </Link>
        <Link
          to="/download-view"
          className="text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2"
          onClick={closeSidebar} // Close sidebar when Download/View is clicked
        >
          <FaDownload className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Download/View</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
