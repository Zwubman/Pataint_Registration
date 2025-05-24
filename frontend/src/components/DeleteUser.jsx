import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from "../services/api";

const DeleteUser = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    try {
      setIsDeleting(true);
      // Send email in the format expected by the backend
      await deleteUser(email);
      toast.success("User deleted successfully!");
      setEmail("");
      // Redirect to view all users after successful deletion
      setTimeout(() => {
        navigate("/view-all-users");
      }, 2000);
    } catch (error) {
      // Check if the error response contains a message
      const errorMessage =
        error.response?.data?.message || error.response?.data?.error;
      if (errorMessage && errorMessage.includes("not found")) {
        toast.error(`User with email "${email}" not found`);
      } else {
        toast.error(errorMessage || "Failed to delete user");
      }
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Delete User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isDeleting}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
              shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              placeholder="Enter user email to delete"
            />
          </div>

          <button
            type="submit"
            disabled={isDeleting}
            className={`w-full flex justify-center py-2 px-4 border border-transparent 
            rounded-md shadow-sm text-sm font-medium text-white
            ${
              isDeleting
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            }`}
          >
            {isDeleting ? "Deleting..." : "Delete User"}
          </button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default DeleteUser;
