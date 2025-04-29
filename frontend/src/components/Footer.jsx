import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-2">
            Medical Data Registration App
          </h4>
          <p className="text-sm">
            Your trusted platform for secure and efficient medical data
            management.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm mb-6 md:mb-0">
          <a
            href="#privacy"
            className="hover:text-gray-300 transition duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-gray-300 transition duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition duration-200"
          >
            Contact Us
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition duration-200"
          >
            About
          </a>
        </div>

        {/* Contact Details */}
        <div className="text-sm text-center md:text-right">
          <p className="font-semibold">Contact Me:</p>
          <p>Email: simegnewenyew@gmail.com</p>
          <p>Phone: +25110777405</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Medical Data Registration App. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
