import React from "react";
import Navbar from "../components/Home/Navbar";
import jobs from "../assets/jobs.json";
import JobCard from "../components/Home/JobCard";
import Jobhome from "../components/Jobs/Jobhome";

const Jobs = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-50">
        <Jobhome />
      </div>
    </>
  );
};

export default Jobs;
