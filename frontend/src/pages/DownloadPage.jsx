import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/features/authSlice";
import { getAllPatients, downloadPatientsExcel } from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DownloadPage = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    fetchPatients();
  }, [isAuthenticated, navigate]);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const data = await getAllPatients();
      setPatients(data);
      setError(null);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to fetch patients";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      setLoading(true);
      const blob = await downloadPatientsExcel();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `patients-${Date.now()}.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success("File downloaded successfully!");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Failed to download Excel file";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="w-full px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleDownload}
          disabled={loading || patients.length === 0}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 
         disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2
           w-1/4 sm:w-auto"
        >
          <FaDownload />
          {loading ? "Downloading..." : "Download Excel"}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                {[
                  "No",
                  "Name",
                  "MRN",
                  "Age",
                  "Sex",
                  "Clinical Presentation",
                  "Diagnosis",
                  "Imaging Finding",
                  "Surgeon",
                  "Assistant",
                  "Anesthesia",
                  "Nurse",
                  "Duration of Surgery",
                  "Duration of Anesthesia",
                  "Outcome of Patient",
                  "Remark",
                ].map((heading) => (
                  <th key={heading} className="px-4 py-3 border text-left">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{patient.No}</td>
                  <td className="px-4 py-2 border">{patient.Name}</td>
                  <td className="px-4 py-2 border">{patient.MRN}</td>
                  <td className="px-4 py-2 border">{patient.Age}</td>
                  <td className="px-4 py-2 border">{patient.Sex}</td>
                  <td className="px-4 py-2 border">
                    {patient.ClinicalPresentation}
                  </td>
                  <td className="px-4 py-2 border">{patient.Diagnosis}</td>
                  <td className="px-4 py-2 border">{patient.ImagingFinding}</td>
                  <td className="px-4 py-2 border">{patient.Surgeon}</td>
                  <td className="px-4 py-2 border">{patient.Asistant}</td>
                  <td className="px-4 py-2 border">{patient.Ansthesia}</td>
                  <td className="px-4 py-2 border">{patient.Nurse}</td>
                  <td className="px-4 py-2 border">
                    {patient.DurationOfSurgery}
                  </td>
                  <td className="px-4 py-2 border">
                    {patient.DurationOfAnsthesia}
                  </td>
                  <td className="px-4 py-2 border">
                    {patient.OutcomeOfPatient}
                  </td>
                  <td className="px-4 py-2 border">{patient.Remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {patients.length === 0 && (
            <div className="text-center py-4 text-gray-500">
              No patient records found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DownloadPage;
