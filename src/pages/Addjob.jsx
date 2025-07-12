import React from "react";
import Navbar from "../components/Home/Navbar";
import Form from "../components/Addjob/Form";

const Addjob = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-blue-50 flex justify-center">
        <Form />
      </div>
    </>
  );
};

export default Addjob;
