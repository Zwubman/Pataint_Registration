import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
import { bindPhoneNumber } from "../services/api";

const AddPhone = () => {
  const [countryCode, setCountryCode] = useState("+251"); // Default value set to Ethiopia's country code
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number input
  const [isLoading, setIsLoading] = useState(false);

  const validatePhoneNumber = (number) => {
    // Remove any spaces or special characters
    const cleanNumber = number.replace(/[^\d]/g, "");

    // Basic validation for Ethiopian numbers (9 digits after country code)
    if (countryCode === "+251" && cleanNumber.length !== 9) {
      return false;
    }

    // General validation for other countries (minimum 7 digits)
    return cleanNumber.length >= 7;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number and country selection
    if (!countryCode) {
      toast.error("Please select a country!");
      return;
    }

    if (!phoneNumber) {
      toast.error("Phone number cannot be empty!");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      toast.error("Please enter a valid phone number!");
      return;
    }

    // Format the phone number with country code
    const formattedPhone = `${countryCode}${phoneNumber.replace(/[^\d]/g, "")}`;

    try {
      setIsLoading(true);
      await bindPhoneNumber({ phone: formattedPhone });
      toast.success("Phone number added successfully!");
      setPhoneNumber(""); // Reset form
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to add phone number";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const countries = [
    { code: "+1", name: "United States/Canada" },
    { code: "+44", name: "United Kingdom" },
    { code: "+61", name: "Australia" },
    { code: "+91", name: "India" },
    { code: "+81", name: "Japan" },
    { code: "+251", name: "Ethiopia" },
  ];

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Add Phone Number
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Country Select Field */}
          <div>
            <label
              htmlFor="countryCode"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            >
              <option value="" disabled>
                Select country
              </option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
          </div>

          {/* Phone Number Input Field */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder={
                countryCode === "+251" ? "9XXXXXXXX" : "Enter phone number"
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            />
            {countryCode === "+251" && (
              <p className="mt-1 text-sm text-gray-500">
                For Ethiopian numbers, enter 9 digits without the country code
              </p>
            )}
          </div>

          {/* Add Phone Button */}
          <button
            type="submit"
            className={`w-full ${
              isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white py-2 px-4 rounded-md transition duration-200`}
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Phone"}
          </button>
        </form>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default AddPhone;
