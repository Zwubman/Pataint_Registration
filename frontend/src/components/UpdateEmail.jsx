import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
import api from "../services/api";

const UpdateEmail = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !confirmEmail) {
      toast.error("All fields are required");
      return;
    }

    if (email !== confirmEmail) {
      toast.error("Emails do not match");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await api.post("/user/update-email", { email });
      toast.success(response.data.message);
      // Clear form fields after success
      setEmail("");
      setConfirmEmail("");
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to update email");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Email</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
            <label className="block text-sm font-medium text-gray-700">
                  New Email
                </label>
                <input
                  type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm New Email
            </label>
            <input
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              required
                />
              </div>

              <button
                type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md 
            hover:bg-blue-700 transition duration-200"
              >
            Update Email
              </button>
            </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default UpdateEmail;
