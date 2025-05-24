import React from "react";
import MyAccount from "../components/MyAccount";
import { useOutletContext } from "react-router-dom";

const MyAccountPage = () => {
  const { closeSidebar } = useOutletContext();

  return (
    <>
      <MyAccount closeSidebar={closeSidebar} />
    </>
  );
};

export default MyAccountPage;
