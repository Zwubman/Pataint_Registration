import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet context={{ closeSidebar }} />
    </>
  );
};

export default MainLayout;
