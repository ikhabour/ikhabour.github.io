import React from "react";
import { NavLink } from "react-router";

const ViewAllJobs = () => {
  return (
    <div className="h-36 flex justify-center items-center">
      <NavLink
        to="/jobs"
        className="bg-black w-auto text-white px-32 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 "
      >
        View All Jobs
      </NavLink>
    </div>
  );
};

export default ViewAllJobs;
