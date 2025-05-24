import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import api from "../services/api";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  }); // States to toggle visibility for each password field

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { currentPassword, newPassword, confirmNewPassword } = formData;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      toast.error("All fields are required."); // Error notification
      return;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("New password and confirm password do not match."); // Error notification
      return;
    }

    try {
      const response = await api.post("/user/change-password", formData);
      toast.success(response.data.message);

      // Clear form fields after success
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to change password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type={showPassword.current ? "text" : "password"}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("current")}
              className="absolute right-3 top-8 text-gray-500"
            >
              {showPassword.current ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* New Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type={showPassword.new ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("new")}
              className="absolute right-3 top-8 text-gray-500"
            >
              {showPassword.new ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm New Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type={showPassword.confirm ? "text" : "password"}
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirm")}
              className="absolute right-3 top-8 text-gray-500"
            >
              {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md 
            hover:bg-blue-700 transition duration-200"
          >
            Change Password
          </button>
        </form>

        {/* Toastify Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default ChangePassword;
