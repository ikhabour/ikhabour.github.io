import React from "react";
import Navbar from "../components/Home/Navbar";
import { NavLink, useParams } from "react-router";
import jobs from "../assets/jobs.json";
import NotFound from "./NotFound";

const JobListingPage = () => {
  const { jobid } = useParams();

  let job = jobs.find((job) => job.id === jobid);

  window.scrollTo(0, 0);

  if (!job) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="container flex flex-row items-center justify-start h-[65px]">
        <NavLink
          to="/jobs"
          className="text-indigo-500 ml-20 hover:text-indigo-700"
        >
          Back to Job Listings
        </NavLink>
      </div>
      <section className="bg-blue-50 h-auto">
        <div className="container m-auto ">
          <div className="w-full flex flex-row justify-center items-center">
            <div className="w-[75%] space-y-5 mb-60">
              <div className="flex flex-col mt-10 w-[90%] bg-white h-40 ml-11 rounded-xl shadow-md space-y-4 px-6 py-3">
                <span className="text-gray-500">{job.type}</span>
                <h1 className="text-3xl font-bold">{job.title}</h1>
                <span className="text-red-500">{job.location}</span>
              </div>
              <div className="w-[90%] bg-white flex flex-col mt-10 ml-11 rounded-xl shadow-md h-60 p-5">
                <h1 className="font-bold text-indigo-800 text-lg">
                  Job Description
                </h1>
                <p className="mt-3 mb-5">{job.description}</p>
                <h1 className="font-bold text-indigo-800 text-lg">Salary</h1>
                <span className="mt-3">{job.salary} / Year</span>
              </div>
            </div>
            <div className="w-[30%] mr-5 flex flex-col">
              <div className=" bg-white rounded-xl h-auto shadow-md mt-7 flex flex-col justify-start items-start px-5 py-5">
                <h1 className="font-bold text-xl mb-6">Company Info</h1>
                <h2 className="mb-3 text-2xl">{job.company.name}</h2>
                <p>{job.company.description}</p>
                <div className="border-t-[1px] w-full mt-3 space-y-3">
                  <h1 className="text-xl mt-3">Contact Email:</h1>
                  <p className="bg-indigo-200 font-bold py-1 px-2 w-[95%]">
                    {job.company.contactEmail}
                  </p>
                  <h1 className="text-xl">Contact Phone:</h1>
                  <p className="bg-indigo-200 font-bold py-1 px-2 w-[95%]">
                    {job.company.contactPhone}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md mt-5 h-auto flex flex-col justify-start items-start py-5 px-6">
                <h1 className="text-xl font-bold mb-5">Manage Job</h1>
                <button className="mb-5 ml-2 w-[95%] bg-indigo-600 rounded-2xl h-10 text-white font-bold hover:bg-indigo-700 transition-colors duration-300">
                  Edit Job
                </button>
                <button className="ml-2 w-[95%] bg-red-500 rounded-2xl h-10 text-white font-bold hover:bg-red-600 transition-colors duration-300">
                  Delete Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListingPage;
