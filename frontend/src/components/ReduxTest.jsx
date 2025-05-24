import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCredentials,
  selectCurrentUser,
  selectIsAuthenticated,
} from "../redux/features/authSlice";
import { addPatient, selectAllPatients } from "../redux/features/patientSlice";

const ReduxTest = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const patients = useSelector(selectAllPatients);

  const testAuthLogin = () => {
    dispatch(
      setCredentials({
        user: { id: 1, name: "Test User", email: "test@example.com" },
        token: "test-token-123",
      })
    );
  };

  const testAddPatient = () => {
    dispatch(
      addPatient({
        id: Date.now(),
        Name: "Test Patient",
        MRN: "MRN123",
        Age: "30",
        Sex: "Male",
      })
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Redux Test Panel</h2>

      {/* Auth State */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Authentication State</h3>
        <div className="mb-2">
          <strong>Is Authenticated:</strong> {isAuthenticated ? "Yes" : "No"}
        </div>
        <div className="mb-2">
          <strong>Current User:</strong>{" "}
          {currentUser ? JSON.stringify(currentUser, null, 2) : "None"}
        </div>
        <button
          onClick={testAuthLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Test Login
        </button>
      </div>

      {/* Patient State */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Patient State</h3>
        <div className="mb-2">
          <strong>Number of Patients:</strong> {patients.length}
        </div>
        <div className="mb-2">
          <strong>Patients:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-1">
            {JSON.stringify(patients, null, 2)}
          </pre>
        </div>
        <button
          onClick={testAddPatient}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Test Patient
        </button>
      </div>
    </div>
  );
};

export default ReduxTest;
