import React from "react";
import Container from "../components/Container/Container";
import SecondaryBtn from "../components/Buttons/SecondaryBtn";
import { useJob } from "../context";

function SavedJob() {
  const { savedJobs, removeSavedJob } = useJob();
  console.log(savedJobs, "savedJobs");

  return (
    <Container>
      <div className="py-10 px-5 h-full">
        <h2 className="font-semibold text-3xl mb-6 text-center">Saved jobs</h2>
        {/* table */}
        <div className="overflow-x-auto  bg-base-100">
          {savedJobs.length > 0 ? (
            <table className="table rounded-box border border-base-content/5">
              {/* head */}
              <thead>
                <tr>
                  <th>Job title</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Date posted</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {savedJobs.map((job) => (
                  <tr key={job.job_id}>
                    <th>{job.job_title}</th>
                    <td>{job.employer_name}</td>
                    <td>{job.job_is_remote ? "Remote" : "On Site"}</td>
                    <td>{job.job_posted_at}</td>
                    <td className="flex gap-4">
                      <SecondaryBtn>Active</SecondaryBtn>
                      <button
                        onClick={() => removeSavedJob(job.job_id)}
                        className="cursor-pointer text-error"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="bg-base-300 text-base-content/70 text-sm flex justify-center items-center p-5 mt-8 rounded-lg">
              <h2>Job Details Not Found</h2>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default SavedJob;
