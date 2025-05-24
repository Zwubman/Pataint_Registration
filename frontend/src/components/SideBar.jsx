import React from "react";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaDownload,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa"; // Import relevant icons
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsAuthenticated,
  selectCurrentUser,
} from "../redux/features/authSlice";
import LogoutButton from "./LogoutButton";

const SideBar = ({ isOpen, closeSidebar }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);
  const isSuperAdmin = currentUser?.role === "SuperAdmin";

  const ContactLink = () => (
    <li>
      <Link
        to="/contact"
        className="flex items-center space-x-4 hover:bg-blue-600 
        px-4 py-2 rounded-md block transition duration-300"
        onClick={closeSidebar}
      >
        <FaEnvelope className="text-xl" />
        <span>Contact</span>
      </Link>
    </li>
  );

  return (
    <div className="relative">
      <div
        className={`fixed top-16 left-0 h-[calc(100%-4rem)] 
          w-64 bg-blue-500 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 shadow-lg flex flex-col`}
      >
        <div className="py-4 px-6 flex-grow">
          <ul className="space-y-4">
            {/* Home Link - Always visible */}
            <li>
              <Link
                to="/"
                className="flex items-center space-x-4 hover:bg-blue-600 
                px-4 py-2 rounded-md block transition duration-300"
                onClick={closeSidebar}
              >
                <FaHome className="text-xl" /> {/* Home Icon */}
                <span>Home</span>
              </Link>
            </li>

            {/* Show Contact here only when not authenticated */}
            {!isAuthenticated && <ContactLink />}

            {/* Protected Routes - Only visible when authenticated */}
            {isAuthenticated && (
              <>
                {/* My Account Link */}
                <li>
                  <Link
                    to="/my-account"
                    className="flex items-center space-x-4 hover:bg-blue-600 
                    px-4 py-2 rounded-md block transition duration-300"
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
                    className="flex items-center space-x-4 hover:bg-blue-600 
                    px-4 py-2 rounded-md block transition duration-300"
                    onClick={closeSidebar}
                  >
                    <FaClipboardList className="text-xl" />{" "}
                    {/* Register Procedure Icon */}
                    <span>Register Procedure</span>
                  </Link>
                </li>

                {/* View/Download Link */}
                <li>
                  <Link
                    to="/download-view"
                    className="flex items-center space-x-4 hover:bg-blue-600 
                    px-4 py-2 rounded-md block transition duration-300"
                    onClick={closeSidebar}
                  >
                    <FaDownload className="text-xl" />{" "}
                    {/* Download/View Icon */}
                    <span>View/Download</span>
                  </Link>
                </li>

                {/* Manage User Link - Only visible for SuperAdmin */}
                {isSuperAdmin && (
                  <li>
                    <Link
                      to="/manage-user"
                      className="flex items-center space-x-4 hover:bg-blue-600 
                      px-4 py-2 rounded-md block transition duration-300"
                      onClick={closeSidebar}
                    >
                      <FaUsers className="text-xl" /> {/* Manage User Icon */}
                      <span>Manage User</span>
                    </Link>
                  </li>
                )}

                {/* Contact Link - At bottom when authenticated */}
                <div className="pt-4 mt-4 border-t border-blue-400">
                  <ContactLink />
                </div>
              </>
            )}
          </ul>
        </div>

        {/* Profile Section and Logout - Only visible when authenticated */}
        {isAuthenticated && (
          <div className="mt-auto">
            {/* Profile Section */}
            <div className="p-4 border-t border-blue-400 bg-blue-600">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">
                    {currentUser?.email?.[0]?.toUpperCase() || "U"}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {currentUser?.email || "User"}
                  </p>
                  <p className="text-xs text-blue-200 truncate">
                    {currentUser?.role || "User Role"}
                  </p>
                </div>
              </div>
            </div>
            {/* Logout Button */}
            <div className="p-4 border-t border-blue-400">
              <LogoutButton onClick={closeSidebar} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
