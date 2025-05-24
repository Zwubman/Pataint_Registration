import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import patientReducer from "./features/patientSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
