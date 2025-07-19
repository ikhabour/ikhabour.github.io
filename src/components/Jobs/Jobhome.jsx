import React from "react";
import JobCard from "../Home/JobCard";
import jobs from "../../assets/jobs.json";

const Jobhome = () => {
  return (
    <section className="px-7 py-8">
      <div className="flex flex-row justify-center items-center">
        <h1 className="text-3xl font-bold text-indigo-600 mt-4">Browse Jobs</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 gap-2">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              type={job.type}
              title={job.title}
              description={job.description}
              salary={job.salary}
              location={job.location}
              jobid={job.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobhome;
