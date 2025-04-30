import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import the hamburger menu icon from React Icons
import { Link } from "react-router-dom";

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
              <Link
              to = '/'
              className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
              to = '/my-account'
              className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                My Account
              </Link>
            </li>
            <li>
              <Link 
              to = '/register-procedure'
              className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Register Procedure
              </Link>
            </li>
            <li>
              <Link 
              to = '/download-view'
              className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                View/Download
              </Link>
            </li>
            <li>
              <Link 
              to = '/add-user'
              className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Add User
              </Link>
            </li>

            <li>
              <Link 
              to = '/manage-user'
              className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Manage User
              </Link>
            </li>
            <li>
              <Link
              to = '/contact'
              className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
