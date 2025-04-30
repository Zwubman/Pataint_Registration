import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa"; // Import necessary icons
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const AddUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate adding user (replace with your actual logic)
    console.log("User Added:", formData);
    toast.success(`User with email "${formData.email}" has been successfully added.`); // Success notification

    // Clear the form after submission
    setFormData({ email: "", password: "" });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle visibility state
  };

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Add User</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Password Field with Eye Icon */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-10 right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button with Add User Icon */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 font-semibold flex items-center justify-center space-x-2"
            >
              <FaUserPlus className="text-xl" />
              <span>Add User</span>
            </button>
          </div>
        </form>

        {/* Toastify Container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </div>
  );
};

export default AddUser;
