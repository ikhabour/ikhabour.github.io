import React from "react";

const ViewAllJobs = () => {
  return (
    <div className="h-36 flex justify-center items-center">
      <a
        href="/jobs"
        className="bg-black w-auto text-white px-32 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 "
      >
        View All Jobs
      </a>
    </div>
  );
};

export default ViewAllJobs;
