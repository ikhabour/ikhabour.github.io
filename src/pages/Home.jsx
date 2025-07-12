import React from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import CardWrapper from "../components/Home/CardWrapper";
import RecentJobs from "../components/Home/RecentJobs";
import ViewAllJobs from "../components/Home/ViewAllJobs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardWrapper />
      <RecentJobs />
      <ViewAllJobs />
    </>
  );
};

export default Home;
