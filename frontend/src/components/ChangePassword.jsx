import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = formData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required."); // Error notification
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match."); // Error notification
      return;
    }

    // Simulate successful password change (replace this with your actual logic)
    console.log("Password successfully changed.");
    toast.success("Password has been successfully changed."); // Success notification

    // Clear form fields after success
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Change Password</h2>
        <form onSubmit={handleSubmit}>
          {/* Current Password Field */}
          <div className="mb-4 relative">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type={showPassword.current ? "text" : "password"} // Toggle input type
              name="currentPassword"
              id="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("current")}
              className="absolute top-10 right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword.current ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* New Password Field */}
          <div className="mb-4 relative">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type={showPassword.new ? "text" : "password"} // Toggle input type
              name="newPassword"
              id="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("new")}
              className="absolute top-10 right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword.new ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm New Password Field */}
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type={showPassword.confirm ? "text" : "password"} // Toggle input type
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirm")}
              className="absolute top-10 right-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Change Password Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white 
              rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
            >
              Change Password
            </button>
          </div>
        </form>

        {/* Toastify Container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </div>
  );
};

export default ChangePassword;
