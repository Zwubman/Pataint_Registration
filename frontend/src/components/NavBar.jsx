import React from "react";

const NavBar = () => {
  return (
    <div className=" bg-blue-500 w-full h-16 flex items-center justify-end px-4">
      <button className="text-white p-4 ml-2 hover:bg-black rounded-xl text-xl  ">
        Home
      </button>
      <button className="text-white p-4 hover:bg-black rounded-xl text-xl">
        My Account
      </button>
      <button className="text-white text-xl hover:bg-black rounded-xl p-4 ">
        Service
      </button>
      <button className="text-white text-xl hover:bg-black rounded-xl p-4 ">
        Download/View
      </button>
    </div>
  );
};

export default NavBar;
