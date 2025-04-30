import React from "react";
import { FaBars } from "react-icons/fa"; // Import the hamburger menu icon from React Icons
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, closeSidebar }) => {
  return (
    <div className="relative">
      <div
        className={`fixed top-16 left-0 h-[calc(100%-4rem)] w-64 bg-blue-300 text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <div className="py-4 px-6">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300"
                onClick={closeSidebar} // Close sidebar when Home is clicked
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/my-account"
                className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300"
                onClick={closeSidebar} // Close sidebar
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                to="/register-procedure"
                className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300"
                onClick={closeSidebar} // Close sidebar
              >
                Register Procedure
              </Link>
            </li>
            <li>
              <Link
                to="/download-view"
                className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300"
                onClick={closeSidebar} // Close sidebar
              >
                View/Download
              </Link>
            </li>
            <li>
              <Link
                to="/add-user"
                className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300"
                onClick={closeSidebar} // Close sidebar
              >
                Add User
              </Link>
            </li>
            <li>
              <Link
                to="/manage-user"
                className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300"
                onClick={closeSidebar} // Close sidebar
              >
                Manage User
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:bg-gray-500 px-2 py-1 rounded-md block transition duration-300"
                onClick={closeSidebar} // Close sidebar
              >
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
