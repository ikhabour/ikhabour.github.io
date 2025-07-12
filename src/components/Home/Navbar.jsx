import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 h-20 w-full border-indigo-500 border-b">
      <div className="flex items-center justify-between">
        <div className="flex flex-row justify-start gap-3 px-20 py-4">
          <NavLink to="/" className="flex flex-row">
            <img src={logo} className="w-auto h-10 mt-1" />
            <p className="text-white text-[25px] font-bold mt-1 ml-2">
              React Jobs
            </p>
          </NavLink>
        </div>
        <div className="flex flex-row justify-end space-x-5 mr-[50px] w-auto h-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded ${
                isActive
                  ? "bg-black text-white"
                  : "hover:bg-gray-900 text-white transition-colors duration-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `px-4 py-2 rounded ${
                isActive
                  ? "bg-black text-white"
                  : "hover:bg-gray-900 text-white transition-colors duration-300"
              }`
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/addjob"
            className={({ isActive }) =>
              `px-4 py-2 rounded ${
                isActive
                  ? "bg-black text-white"
                  : "hover:bg-gray-900 text-white transition-colors duration-300"
              }`
            }
          >
            Add Job
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
