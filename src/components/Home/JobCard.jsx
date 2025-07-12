import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const JobCard = ({ type, title, description, salary, location, jobid }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let jobdesc = description;
  if (!showFullDescription) {
    jobdesc = jobdesc.substring(0, 90) + "...";
  }

  return (
    <div className=" relative h-[325px] bg-white mt-7 w-[390px] rounded-xl shadow-md flex flex-col">
      <h2 className="text-gray-400 px-3 pt-3">{type}</h2>
      <div className="mt-3 px-3">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="mt-4 text-sm">{jobdesc}</p>
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 text-sm"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
      </div>
      <p className="absolute bottom-[69px] left-3 text-sm text-indigo-500">
        {salary}
      </p>
      <div className="absolute w-full h-15 bottom-4 space-y-3 flex flex-row justify-between items-center mt-6 border-t-2">
        <p className="text-red-500 ml-3">{location}</p>
        <NavLink
          to={`/jobs/${jobid}`}
          className="mr-2 w-auto h-auto bg-indigo-500 p-2 rounded-lg text-white text-sm hover:bg-indigo-600 transition-colors duration-300"
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default JobCard;
