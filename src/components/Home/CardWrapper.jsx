import React from "react";
import Card from "./Card";

const CardWrapper = () => {
  return (
    <div className="w-full h-60 flex flex-row gap-7 justify-center items-center">
      <Card
        title="For Developers"
        description="Browse our React jobs and start your career today"
        button="Browse Jobs"
        buttonbg="bg-black"
        buttonhover="bg-gray-800"
        cardbg="bg-indigo-50"
        link="/jobs"
      />
      <Card
        title="For Employers"
        description="List your jobs to find the perfect developer for the role"
        button="Add Job"
        buttonbg="bg-indigo-500"
        buttonhover="bg-indigo-600"
        cardbg="bg-indigo-100"
        link="/addjob"
      />
    </div>
  );
};

export default CardWrapper;
