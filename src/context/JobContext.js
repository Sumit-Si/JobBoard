import { createContext, useContext } from "react";

export const JobContext = createContext({
    jobsArr: [],
    savedJobs: [],
    addToSavedJob: (job) => {},
    removeSavedJob: (id) => {},
    
    theme: "winter",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const JobProvider = JobContext.Provider;

export const useJob = () => {
    return useContext(JobContext);
}