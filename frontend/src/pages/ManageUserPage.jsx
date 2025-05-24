import React from "react";
import UserActions from "../components/ManageUser";
import { useOutletContext } from "react-router-dom";

const ManageUserPage = () => {
  const { closeSidebar } = useOutletContext();

  return (
    <>
      <UserActions closeSidebar={closeSidebar} />
    </>
  );
};

export default ManageUserPage;
