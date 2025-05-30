import React from "react";
import { Link } from "react-router-dom";

const MyAccount = ({ closeSidebar }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          My Account
        </h2>
        <div className="flex flex-col space-y-4">
          {/* Change Password Button */}
          <Link
            to="/change-password"
            className="block w-full py-3 px-6 bg-blue-600 text-white text-center 
            rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
            onClick={closeSidebar}
          >
            Change Password
          </Link>

          {/* Bind with Phone Button */}
          <Link
            to="/add-phone"
            className="block w-full py-3 px-6 bg-green-600 text-white text-center 
            rounded-md hover:bg-green-700 transition duration-200 font-semibold"
            onClick={closeSidebar}
          >
            Bind with Phone
          </Link>

          {/* Update Email Button */}
          <Link
            to="/update-email"
            className="block w-full py-3 px-6 bg-yellow-500 text-white text-center 
            rounded-md hover:bg-yellow-600 transition duration-200 font-semibold"
            onClick={closeSidebar}
          >
            Update Email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
