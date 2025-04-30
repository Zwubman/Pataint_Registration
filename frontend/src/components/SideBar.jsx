import React from "react";
import { FaHome, FaUser, FaClipboardList, FaDownload, FaUsers, FaEnvelope } from "react-icons/fa"; // Import relevant icons
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, closeSidebar }) => {
  return (
    <div className="relative">
      <div
        className={`fixed top-16 left-0 h-[calc(100%-4rem)] w-64 bg-blue-500 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 shadow-lg`}
      >
        <div className="py-4 px-6">
          <ul className="space-y-4">
            {/* Home Link */}
            <li>
              <Link
                to="/"
                className="flex items-center space-x-4 hover:bg-blue-600 px-4 py-2 rounded-md block transition duration-300"
                onClick={closeSidebar}
              >
                <FaHome className="text-xl" /> {/* Home Icon */}
                <span>Home</span>
              </Link>
            </li>
            {/* My Account Link */}
            <li>
              <Link
                to="/my-account"
                className="flex items-center space-x-4 hover:bg-blue-600 px-4 py-2 rounded-md block transition duration-300"
                onClick={closeSidebar}
              >
                <FaUser className="text-xl" /> {/* My Account Icon */}
                <span>My Account</span>
              </Link>
            </li>
            {/* Register Procedure Link */}
            <li>
              <Link
                to="/register-procedure"
                className="flex items-center space-x-4 hover:bg-blue-600 px-4 py-2 rounded-md block transition duration-300"
                onClick={closeSidebar}
              >
                <FaClipboardList className="text-xl" /> {/* Register Procedure Icon */}
                <span>Register Procedure</span>
              </Link>
            </li>
            {/* View/Download Link */}
            <li>
              <Link
                to="/download-view"
                className="flex items-center space-x-4 hover:bg-blue-600 px-4 py-2 rounded-md block transition duration-300"
                onClick={closeSidebar}
              >
                <FaDownload className="text-xl" /> {/* Download/View Icon */}
                <span>View/Download</span>
              </Link>
            </li>
            {/* Manage User Link */}
            <li>
              <Link
                to="/manage-user"
                className="flex items-center space-x-4 hover:bg-blue-600 px-4 py-2 rounded-md block transition duration-300"
                onClick={closeSidebar}
              >
                <FaUsers className="text-xl" /> {/* Manage User Icon */}
                <span>Manage User</span>
              </Link>
            </li>
            {/* Contact Link */}
            <li>
              <Link
                to="/contact"
                className="flex items-center space-x-4 hover:bg-blue-600 px-4 py-2 rounded-md block transition duration-300"
                onClick={closeSidebar}
              >
                <FaEnvelope className="text-xl" /> {/* Contact Icon */}
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
