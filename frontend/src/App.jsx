import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
// import NavBar from "./components/NavBar";
// import PictureSight from "./components/PictureSight";
// import Footer from "./components/Footer";
// import SignupForm from "./components/SignupForm";
// import LogIn from "./components/LogIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
