import React from "react";
import Home from "./pages/Home";
import Addjob from "./pages/Addjob";
import Jobs from "./pages/Jobs";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/addjob" element={<Addjob />} />
    </Routes>
  );
};

export default App;
