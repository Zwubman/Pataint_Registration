import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Import the delete icon
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const DeleteUser = () => {
  const [email, setEmail] = useState(""); // State for email input

  // Function to handle email input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to delete the user
  const handleDelete = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please provide a valid email address."); // Error notification
      return;
    }

    // Simulate deleting a user (replace with your actual logic)
    console.log(`Deleting user with email: ${email}`);
    toast.success(`User with email "${email}" has been successfully deleted.`); // Success notification

    // Clear the email input after deletion
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Delete User</h2>
        <form onSubmit={handleDelete}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-500"
            />
          </div>

          {/* Delete Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <FaTrash className="text-xl" /> {/* Delete Icon */}
              <span>Delete User</span>
            </button>
          </div>
        </form>

        {/* Toastify Container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </div>
  );
};

export default DeleteUser;
