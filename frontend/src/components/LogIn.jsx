import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual email and password for validation
    const correctEmail = "example@email.com";
    const correctPassword = "123456";

    if (email !== correctEmail || password !== correctPassword) {
      setError("Incorrect email or password.");
    } else {
      setError("");
      console.log("Login successful!");
      // Add login logic, e.g., redirect to a dashboard
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 my-20 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Error Notification */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Log In
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            SignUp here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
