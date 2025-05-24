import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "../redux/features/authSlice";

const LogoutButton = ({ onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Dispatch logout action to clear Redux state
    dispatch(logout());
    // Close the sidebar if onClick prop is provided
    if (onClick) {
      onClick();
    }
    // Navigate to login page
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="block w-full py-3 px-6 bg-red-600 text-white text-center rounded-md 
      hover:bg-red-700 transition duration-200 font-semibold flex items-center justify-center space-x-2"
    >
      <FaSignOutAlt className="text-xl" />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
