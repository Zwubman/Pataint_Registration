import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import the hamburger menu icon from React Icons

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className="relative">
      {/* Hamburger menu button */}
      <button
        className="text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-6 rounded-full hover:bg-black transition duration-300 flex items-center space-x-2"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100%-4rem)] w-64 bg-blue-300 text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <div className="py-4 px-6">
          <ul className="space-y-4">
            <li>
              <a href="#home" className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                My Account
              </a>
            </li>
            <li>
              <a href="#services" className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Register Procedure
              </a>
            </li>
            <li>
              <a href="#services" className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                View/Download
              </a>
            </li>
            <li>
              <a href="#services" className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Add User
              </a>
            </li>

            <li>
              <a href="#services" className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Magage User
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
