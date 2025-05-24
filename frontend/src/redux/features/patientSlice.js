import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: [],
  currentPatient: null,
  isLoading: false,
  error: null,
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatients: (state, action) => {
      state.patients = action.payload;
      state.error = null;
    },
    setCurrentPatient: (state, action) => {
      state.currentPatient = action.payload;
      state.error = null;
    },
    addPatient: (state, action) => {
      state.patients.push(action.payload);
      state.error = null;
    },
    updatePatient: (state, action) => {
      const index = state.patients.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.patients[index] = action.payload;
      }
      if (state.currentPatient?.id === action.payload.id) {
        state.currentPatient = action.payload;
      }
      state.error = null;
    },
    deletePatient: (state, action) => {
      state.patients = state.patients.filter((p) => p.id !== action.payload);
      if (state.currentPatient?.id === action.payload) {
        state.currentPatient = null;
      }
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  setPatients,
  setCurrentPatient,
  addPatient,
  updatePatient,
  deletePatient,
  setLoading,
  setError,
} = patientSlice.actions;

export default patientSlice.reducer;

// Selectors
export const selectAllPatients = (state) => state.patient.patients;
export const selectCurrentPatient = (state) => state.patient.currentPatient;
export const selectPatientError = (state) => state.patient.error;
export const selectPatientLoading = (state) => state.patient.isLoading;
