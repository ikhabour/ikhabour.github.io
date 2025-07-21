import React from "react";
import Navbar from "../components/Home/Navbar";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start min-h-screen mt-36 space-y-6">
        <p className="text-6xl font-bold">404 Not Found</p>
        <p className="text-lg">This page does not exist</p>
        <NavLink
          to="/"
          className="bg-indigo-600 px-3 py-2 rounded-lg text-white hover:bg-indigo-800 transition-colors duration-300"
        >
          Go back
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
