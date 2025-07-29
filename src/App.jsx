import React, { useEffect, useState } from "react";
import { JobProvider, useJob } from "./context/JobContext";
import { Header, Footer } from "./components/";
import { Outlet } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || []
  );

  const darkTheme = () => {
    setTheme("night");
  };

  const lightTheme = () => {
    setTheme("winter");
  };

  const addToSavedJob = (job) => {
    console.log(job, "job get");

    setSavedJobs((prev) => [...prev, job]);
  };

  const removeSavedJob = (id) => {
    if (id) {
      setSavedJobs((prev) => prev.filter((prevVal) => prevVal.job_id !== id));
    }
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", "");
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"));
    if (theme) {
      setTheme(theme);
    }
    if (savedJobs) setSavedJobs(savedJobs);
  }, []);

  return (
    <JobProvider
      value={{
        theme,
        darkTheme,
        lightTheme,
        jobs,
        savedJobs,
        addToSavedJob,
        removeSavedJob,
      }}
    >
      <div className="w-full min-h-screen relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </JobProvider>
  );
}

export default App;
