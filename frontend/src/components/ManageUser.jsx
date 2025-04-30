import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaTrash } from "react-icons/fa"; // Import icons

const UserActions = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 px-4">
      {/* Add User Button */}
      <Link
        to="/add-user"
        className="flex items-center justify-center w-full sm:w-2/3 md:w-1/3 py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-semibold space-x-2"
      >
        <FaUserPlus className="text-lg sm:text-xl" />
        <span className="text-sm sm:text-base">Add User</span>
      </Link>

      {/* Delete User Button */}
      <Link
        to="/delete-user"
        className="flex items-center justify-center w-full sm:w-2/3 md:w-1/3 py-3 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 font-semibold space-x-2"
      >
        <FaTrash className="text-lg sm:text-xl" />
        <span className="text-sm sm:text-base">Delete User</span>
      </Link>
    </div>
  );
};

export default UserActions;
