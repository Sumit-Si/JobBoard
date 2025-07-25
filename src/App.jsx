import React, { useEffect, useState } from 'react'
import { JobProvider, useJob } from './context/JobContext'
import {Header,Footer} from './components/';
import { Outlet } from 'react-router-dom';

function App() {
  const {jobsArr,savedJobs} = useJob();

  const [theme,setTheme] = useState("winter");
  const [jobs,setJobs] = useState(jobsArr);
  const [saveJobs,setSaveJobs] = useState(savedJobs);

  const darkTheme = () => {
    setTheme("night");
  }

  const lightTheme = () => {
    setTheme("winter");
  }

  const addToSavedJob = (job) => {
    // setSaveJobs((prev) => [...prev,])
  }

  const removeSavedJob = (id) => {

  }

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme","")
    document.querySelector("html").setAttribute("data-theme",theme)
  },[theme])

  // useEffect(() => {
    
  // },[theme])



  return (
    <JobProvider value={{theme,darkTheme,lightTheme,jobs,savedJobs,addToSavedJob,removeSavedJob}}>
      <div className='w-full h-full'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </JobProvider>
  )
}

export default App