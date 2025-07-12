import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import jobs from "../../assets/jobs.json";

const RecentJobs = () => {
  const recentJobs = jobs.slice(0, 3);
  console.log(jobs);

  return (
    <section className="bg-blue-50 h-[470px] w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold text-indigo-600 mt-4">Recent Jobs</h1>
      <div className="w-full h-full flex flex-row justify-center gap-10">
        {recentJobs.map((job) => (
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
    </section>
  );
};

export default RecentJobs;
