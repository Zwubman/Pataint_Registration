import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS

const UpdateEmail = () => {
  const [currentEmail, setCurrentEmail] = useState(""); // State for current email
  const [newEmail, setNewEmail] = useState(""); // State for new email
  const [isLoading, setIsLoading] = useState(true); // State for loading

  // Simulate fetching current email from database
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        // Simulate an API call to fetch current email
        const emailFromDatabase = "current.email@example.com"; // Placeholder
        setCurrentEmail(emailFromDatabase);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch email", error);
        toast.error("Failed to fetch current email");
        setIsLoading(false);
      }
    };
    fetchEmail();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newEmail) {
      toast.error("New email cannot be empty!");
      return;
    }

    // Simulate updating email in the database
    console.log(`Updated email to: ${newEmail}`);
    toast.success("Email updated successfully!");
    setCurrentEmail(newEmail); // Update the current email state
    setNewEmail(""); // Clear the input field
  };

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Update Your Email
        </h2>
        {isLoading ? (
          <p className="text-center text-gray-600">Loading current email...</p>
        ) : (
          <>
            <p className="text-center text-gray-700 mb-4">
              Your current email is:{" "}
              <span className="font-semibold text-gray-800">{currentEmail}</span>
            </p>
            <p className="text-center text-gray-600 mb-6">
              Please enter a new email address to update your account email.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New Email Input Field */}
              <div>
                <label
                  htmlFor="newEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Email
                </label>
                <input
                  type="email"
                  id="newEmail"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter your new email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Change Email Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Change Email
              </button>
            </form>
          </>
        )}

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default UpdateEmail;
