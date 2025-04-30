import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for detecting active paths
import {
  FaHome,
  FaServicestack,
  FaBars,
  FaSignInAlt,
  FaEnvelope,
} from "react-icons/fa"; // Import icons from React Icons
import SideBar from "./SideBar";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for sidebar visibility
  const location = useLocation(); // Detect current route

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsOpen(false); // Close the sidebar
  };

  const isActive = (path) => location.pathname === path; // Check if a specific link is active

  return (
    <div className="bg-blue-600 fixed top-0 left-0 w-full h-16 flex items-center justify-between px-1 sm:px-6 shadow-lg z-50">
      {/* Sidebar */}
      <SideBar isOpen={isOpen} closeSidebar={closeSidebar} />

      {/* Navigation Links */}
      <div className="flex items-center justify-between w-full">
        {/* Left Links */}
        <div className="flex items-center">
          {/* Sidebar Toggle Button (Menu Icon) */}
          <button
            className="text-white hover:bg-black text-sm sm:text-lg font-semibold py-2 px-1 sm:px-6 rounded-full transition duration-300 flex items-center" // Removed hover:bg-black
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>

          {/* Home Link */}
          <Link
            to="/"
            className={`${
              isActive("/") ? "bg-black" : "bg-blue-600"
            } text-white text-sm sm:text-lg font-semibold py-2 px-1 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center `}
            onClick={closeSidebar}
          >
            <FaHome className="w-4 h-4 sm:w-6 sm:h-6" />
            <span>Home</span>
          </Link>

          {/* Service Link */}
          <Link
            to="/service"
            className={`${
              isActive("/service") ? "bg-black" : "bg-blue-600"
            } text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2`}
            onClick={closeSidebar}
          >
            <FaServicestack className="w-4 h-4 sm:w-6 sm:h-6" />
            <span>Service</span>
          </Link>

          {/* Contact Link */}
          <Link
            to="/contact"
            className={`${
              isActive("/contact") ? "bg-black" : "bg-blue-600"
            } text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2`}
            onClick={closeSidebar}
          >
            <FaEnvelope className="text-xl" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Right Link: Login */}
        <Link
          to="/login"
          className={`${
            isActive("/login") ? "bg-black" : "bg-blue-600"
          } text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2`}
          onClick={closeSidebar}
        >
          <FaSignInAlt className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
