import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaUserMd } from "react-icons/fa"; // Import icons from React Icons

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false); // State to detect if the device is mobile

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      setIsMobile(/android|iphone|ipad|iPod|opera mini|iemobile|wpdesktop/i.test(userAgent));
    };
    checkMobile();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Admin
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-left mb-6">
          If you are a doctor and want to use this platform, please contact the admin for 
          assistance and access. Below are the necessary details to reach out to Doctor 
          Simegnew Enyew.
        </p>
        <div className="space-y-6">
          {/* Admin Information */}
          <div className="flex items-start space-x-4">
            <FaUserMd className="text-blue-500 text-xl" />
            <p className="text-gray-700 text-base leading-relaxed">
              <span className="font-semibold">Admin:</span> Doctor Simegnew Enyew
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-green-500 text-xl" />
            <p className="text-gray-700 text-base leading-relaxed">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:simegnewenyew@gmail.com"
                className="text-blue-500 hover:underline"
              >
                simegnewenyew@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-start space-x-4">
            {/* Clickable Phone Icon and Number */}
            {isMobile ? (
              <a
                href="tel:+251910777405"
                className="flex items-center space-x-4 text-blue-500 hover:underline"
              >
                <FaPhoneAlt className="text-yellow-500 text-xl" />
                <p className="text-gray-700 text-base leading-relaxed">
                  <span className="font-semibold">Phone:</span> +251910777405
                </p>
              </a>
            ) : (
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-yellow-500 text-xl" />
                <p className="text-gray-700 text-base leading-relaxed">
                  <span className="font-semibold">Phone:</span> +251910777405
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 mt-6 text-left">
          Doctor Simegnew Enyew is the sole administrator responsible for managing access to 
          this platform. Please contact him directly for account inquiries and support.
        </p>
      </div>
    </div>
  );
};

export default Contact;
