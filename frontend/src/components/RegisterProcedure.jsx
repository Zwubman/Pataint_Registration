import React, { useState } from "react";

const RegisterProcedure = () => {
  const [formData, setFormData] = useState({
    No: "",
    Name: "",
    MRN: "",
    Age: "",
    Sex: "",
    ClinicalPresentation: "",
    Diagnosis: "",
    ImagingFinding: "",
    Surgeon: "",
    Asistant: "",
    Ansthesia: "",
    Nurse: "",
    DurationOfSurgery: "",
    DurationOfAnsthesia: "",
    OutcomeOfPatient: "",
    Remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add form submission logic here
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8 my-10 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Register Patient Procedure
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* No */}
          <div>
            <label
              htmlFor="No"
              className="block text-sm font-medium text-gray-700"
            >
              No
            </label>
            <input
              type="number"
              name="No"
              id="No"
              value={formData.No}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="Name"
              id="Name"
              value={formData.Name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* MRN */}
          <div>
            <label
              htmlFor="MRN"
              className="block text-sm font-medium text-gray-700"
            >
              MRN
            </label>
            <input
              type="text"
              name="MRN"
              id="MRN"
              value={formData.MRN}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Age */}
          <div>
            <label
              htmlFor="Age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              name="Age"
              id="Age"
              value={formData.Age}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Sex */}
          <div>
            <label
              htmlFor="Sex"
              className="block text-sm font-medium text-gray-700"
            >
              Sex
            </label>
            <select
              name="Sex"
              id="Sex"
              value={formData.Sex}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Clinical Presentation */}
          <div>
            <label
              htmlFor="ClinicalPresentation"
              className="block text-sm font-medium text-gray-700"
            >
              Clinical Presentation
            </label>
            <textarea
              name="ClinicalPresentation"
              id="ClinicalPresentation"
              value={formData.ClinicalPresentation}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Diagnosis */}
          <div>
            <label
              htmlFor="Diagnosis"
              className="block text-sm font-medium text-gray-700"
            >
              Diagnosis
            </label>
            <textarea
              name="Diagnosis"
              id="Diagnosis"
              value={formData.Diagnosis}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Imaging Finding */}
          <div>
            <label
              htmlFor="ImagingFinding"
              className="block text-sm font-medium text-gray-700"
            >
              Imaging Finding
            </label>
            <textarea
              name="ImagingFinding"
              id="ImagingFinding"
              value={formData.ImagingFinding}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Surgeon */}
          <div>
            <label
              htmlFor="Surgeon"
              className="block text-sm font-medium text-gray-700"
            >
              Surgeon
            </label>
            <input
              type="text"
              name="Surgeon"
              id="Surgeon"
              value={formData.Surgeon}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Assistant */}
          <div>
            <label
              htmlFor="Asistant"
              className="block text-sm font-medium text-gray-700"
            >
              Assistant
            </label>
            <input
              type="text"
              name="Asistant"
              id="Asistant"
              value={formData.Asistant}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Anesthesia */}
          <div>
            <label
              htmlFor="Ansthesia"
              className="block text-sm font-medium text-gray-700"
            >
              Anesthesia
            </label>
            <input
              type="text"
              name="Ansthesia"
              id="Ansthesia"
              value={formData.Ansthesia}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Nurse */}
          <div>
            <label
              htmlFor="Nurse"
              className="block text-sm font-medium text-gray-700"
            >
              Nurse
            </label>
            <input
              type="text"
              name="Nurse"
              id="Nurse"
              value={formData.Nurse}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Duration of Surgery */}
          <div>
            <label
              htmlFor="DurationOfSurgery"
              className="block text-sm font-medium text-gray-700"
            >
              Duration of Surgery
            </label>
            <input
              type="date"
              name="DurationOfSurgery"
              id="DurationOfSurgery"
              value={formData.DurationOfSurgery}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Duration of Anesthesia */}
          <div>
            <label
              htmlFor="DurationOfAnsthesia"
              className="block text-sm font-medium text-gray-700"
            >
              Duration of Anesthesia
            </label>
            <input
              type="date"
              name="DurationOfAnsthesia"
              id="DurationOfAnsthesia"
              value={formData.DurationOfAnsthesia}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          {/* Outcome of Patient */}
          <div>
            <label
              htmlFor="OutcomeOfPatient"
              className="block text-sm font-medium text-gray-700"
            >
              Outcome of Patient
            </label>
            <textarea
              name="OutcomeOfPatient"
              id="OutcomeOfPatient"
              value={formData.OutcomeOfPatient}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Remark */}
          <div>
            <label
              htmlFor="Remark"
              className="block text-sm font-medium text-gray-700"
            >
              Remark
            </label>
            <textarea
              name="Remark"
              id="Remark"
              value={formData.Remark}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 
              rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full sm:w-1/3 py-3 px-6 bg-blue-600 text-white 
            rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Register Procedure
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterProcedure;
