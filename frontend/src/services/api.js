import axios from "axios";
import { store } from "../redux/store";
import { logout } from "../redux/features/authSlice";

const api = axios.create({
  baseURL: "http://localhost:8080", // Backend server URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Check if token is actually expired
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          const isExpired = Date.now() >= payload.exp * 1000;

          if (!isExpired) {
            // Token is still valid, retry the request
            return api(originalRequest);
          }
        } catch (e) {
          // Invalid token format
          console.error("Invalid token format:", e);
        }
      }

      // If we get here, token is expired or invalid
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const loginUser = async (credentials) => {
  const response = await api.post("/user/signin", credentials);
  return response.data;
};

// User management API calls
export const registerUser = async (userData) => {
  const response = await api.post("/user/add-user", userData);
  return response.data;
};

export const deleteUser = async (email) => {
  try {
    const response = await api.delete("/user/delete-user", {
      data: { email },
    });
    return response.data;
  } catch (error) {
    // If the error has a response from the server
    if (error.response) {
      // If the server sent an error message, throw it
      const errorMessage =
        error.response.data.message || error.response.data.error;
      throw new Error(errorMessage || "Failed to delete user");
    }
    // If there's no response (network error, etc)
    throw new Error("Failed to connect to the server");
  }
};

export const getAllUsers = async () => {
  try {
    const response = await api.get("/user/get-all");
    // Check if the response has the expected structure
    if (
      response.data &&
      (Array.isArray(response.data) || Array.isArray(response.data.users))
    ) {
      return Array.isArray(response.data) ? response.data : response.data.users;
    }
    throw new Error("Invalid response format from server");
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    throw error;
  }
};

// Patient API calls
export const registerPatient = async (patientData) => {
  const response = await api.post("/pataint/register", patientData);
  return response.data;
};

export const getAllPatients = async () => {
  const response = await api.get("/pataint/getAll");
  return response.data;
};

export const downloadPatientsExcel = async () => {
  const response = await api.get("/pataint/download", {
    responseType: "blob",
  });
  return response.data;
};

// User profile API calls
export const changePassword = async (passwordData) => {
  const response = await api.post("/user/change-password", passwordData);
  return response.data;
};

export const bindPhoneNumber = async (phoneData) => {
  const response = await api.post("/user/add-phone", phoneData);
  return response.data;
};

export const updateEmail = async (emailData) => {
  const response = await api.put("/user/update-email", emailData);
  return response.data;
};

export default api;
