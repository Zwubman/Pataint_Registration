import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaTrash, FaUsers } from "react-icons/fa"; // Icons

const UserActions = ({ closeSidebar }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          User Management
        </h2>

        <div className="flex flex-col space-y-4">
          {/* View Users */}
          <Link
            to="/view-all-users"
            className="flex items-center justify-center w-full py-3 px-6 
            bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-semibold space-x-2"
            onClick={closeSidebar}
          >
            <FaUsers className="text-lg" />
            <span>View Users</span>
          </Link>

          {/* Add User */}
          <Link
            to="/add-user"
            className="flex items-center justify-center w-full py-3 px-6 
            bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200 font-semibold space-x-2"
            onClick={closeSidebar}
          >
            <FaUserPlus className="text-lg" />
            <span>Add User</span>
          </Link>

          {/* Delete User */}
          <Link
            to="/delete-user"
            className="flex items-center justify-center w-full py-3 px-6 
            bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 font-semibold space-x-2"
            onClick={closeSidebar}
          >
            <FaTrash className="text-lg" />
            <span>Delete User</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserActions;
