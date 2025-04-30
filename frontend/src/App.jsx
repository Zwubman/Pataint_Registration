import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import DownloadPage from "./pages/DownloadPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import ManageAccountPage from "./pages/MyAccountPage";
import AddUserPage from "./pages/AddUserPage";
import ManageUserPage from "./pages/ManageUserPage";
import NoServicePage from "./pages/NoServicePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import DeleteUserPage from "./pages/DeleteUserPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import AddPhonePage from "./pages/AddPhonePage";
import UpdateEmailPage from "./pages/UpdateEmailPage";
import RegisterProcedurePage from "./pages/RegisterProcedurePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/download-view" element={<DownloadPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/my-account" element={<ManageAccountPage />} />
      <Route path="/add-user" element={<AddUserPage />} />
      <Route path="/delete-user" element={<DeleteUserPage />} />
      <Route path="/manage-user" element={<ManageUserPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/add-phone" element={<AddPhonePage />} />
      <Route path="/update-email" element={<UpdateEmailPage />} />
      <Route path="/register-procedure" element={<RegisterProcedurePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="*" element={<NoServicePage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
