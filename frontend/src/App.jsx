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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/download-view" element={<DownloadPage />} />
      <Route path="/service" element={<ServicePage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
