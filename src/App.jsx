import React from "react";
import Home from "./pages/Home";
import Addjob from "./pages/Addjob";
import Jobs from "./pages/Jobs";
import { Route, Routes } from "react-router-dom";
import JobListingPage from "./pages/JobListingPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:jobid" element={<JobListingPage />} />
      <Route path="/addjob" element={<Addjob />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
