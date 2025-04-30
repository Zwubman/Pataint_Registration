import React from "react";

const Service = () => {
  return (
    <div className="flex items-center justify-center px-4 bg-gray-100">
      <div className="max-w-5xl w-full mt-16 sm:mt-20">
        {" "}
        {/* Added top margin */}
        {/* Introductory Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8 flex flex-col items-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">
              Our Service
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-left">
              Welcome to the Doctor's Daily Patient Management App. This
              application is designed to streamline the process of patient
              registration, data management, and reporting, ensuring efficiency
              and accuracy for doctors and administrators.
            </p>
          </div>
        </div>
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-blue-500 text-center">
              Patient Registration
            </h3>
            <p className="text-gray-700 leading-relaxed text-left">
              Doctors can register patients treated daily, capturing detailed
              treatment histories. This feature ensures all patient records are
              organized securely, making access and management convenient.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-500 text-center">
              Excel File Access
            </h3>
            <p className="text-gray-700 leading-relaxed text-left">
              Doctors can retrieve all registered patient data in an Excel
              format. The organized file supports doctors in analyzing
              information and generating comprehensive reports effortlessly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-yellow-500 text-center">
              Excel File Download
            </h3>
            <p className="text-gray-700 leading-relaxed text-left">
              Doctors are enabled to download Excel files for submission to
              their Departmental Head (DN). This ensures accountability while
              streamlining the reporting process efficiently.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-red-500 text-center">
              Admin and Doctor Management
            </h3>
            <p className="text-gray-700 leading-relaxed text-left">
              The app is exclusively for administrators and authorized doctors.
              Only admins can add new doctors, maintaining strict access control
              and ensuring proper system usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
