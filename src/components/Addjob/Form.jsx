import React from "react";

const Form = () => {
  return (
    <section className="my-24 h-auto border container w-2/4 bg-white rounded shadow-lg pb-10">
      <div className="flex flex-col justify-start items-start space-y-5 px-7">
        <h1 className="text-3xl font-bold text-black self-center mt-7">
          Add Job
        </h1>
        <div className="flex flex-col space-y-1 w-full">
          <label for="type" className="text-gray-800 font-bold">
            Job Type
          </label>
          <select
            id="type"
            name="type"
            className="rounded border w-full py-2 text-xm text-left px-3"
            required
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="w-full space-y-1">
          <label for="Jobname" className="text-gray-800 font-bold">
            Job Listing Name
          </label>
          <input
            type="text"
            id="jobtype"
            className="w-full border rounded py-2 px-3"
            placeholder="eg. Front end Developer"
          ></input>
        </div>
        <div className="w-full h-full space-y-1">
          <label for="job_description" className="text-gray-800 font-bold">
            Description
          </label>
          <textarea
            type="description"
            id="job_desc"
            className="w-full border rounded py-2 px-3"
            placeholder="Add any job duties, expectations, requirements etc"
            rows="4"
          ></textarea>
        </div>
        <div className="space-y-1 w-full">
          <label for="salary" className="text-gray-800 font-bold">
            Salary
          </label>
          <select
            id="salary"
            name="salary"
            className="rounded border w-full py-2 text-xm text-left px-3"
            required
          >
            <option value="Under $50K">Under $50K</option>
            <option value="$50K - $60K">$50K - $60K</option>
            <option value="$60K - $70K">$60K - $70K</option>
            <option value="$70K - $80K">$70K - $80K</option>
            <option value="$80K - $90K">$80K - $90K</option>
            <option value="$90K - $100K">$90K - $100K</option>
            <option value="$100K - $125K">$100K - $125K</option>
            <option value="$125K - $150K">$125K - $150K</option>
            <option value="$150K - $175K">$150K - $175K</option>
            <option value="$175K - $200K">$175K - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </select>
        </div>
        <div className="w-full space-y-1">
          <label for="location" className="text-gray-800 font-bold">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full border rounded py-2 px-3"
            placeholder="Company Location"
          ></input>
        </div>
        <span className="text-gray-900 font-bold text-xl">Company Info</span>
        <div className="w-full space-y-1">
          <label for="company_name" className="text-gray-800 font-bold">
            Company Name
          </label>
          <input
            type="text"
            id="company_name"
            className="w-full border rounded py-2 px-3"
            placeholder="Company Name"
          ></input>
        </div>
        <div className="w-full h-full space-y-1">
          <label for="company_description" className="text-gray-800 font-bold">
            Company Description
          </label>
          <textarea
            type="description"
            id="company_desc"
            className="w-full border rounded py-2 px-3"
            placeholder="What does your company do?"
            rows="4"
          ></textarea>
        </div>
        <div className="w-full space-y-1">
          <label for="company_name" className="text-gray-800 font-bold">
            Contact Email
          </label>
          <input
            type="email"
            id="company_email"
            className="w-full border rounded py-2 px-3"
            placeholder="Email address for applicants"
            required
          ></input>
        </div>
        <div className="w-full space-y-1">
          <label for="company_name" className="text-gray-800 font-bold">
            Contact phone
          </label>
          <input
            type="phone"
            id="company_phone"
            className="w-full border rounded py-2 px-3"
            placeholder="Optional phone for applicants"
          ></input>
        </div>
        <button
          type="submit"
          className="w-full rounded-3xl bg-indigo-600 py-2 text-white font-bold hover:bg-indigo-800 transition-colors duration-300"
        >
          Add Job
        </button>
      </div>
    </section>
  );
};

export default Form;
