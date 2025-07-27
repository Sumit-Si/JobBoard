import React from "react";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import { Link } from "react-router-dom";

function Job({ job }) {
  return (
    <div className="grid justify-between grid-cols-1 sm:grid-cols-4 gap-5">
      <div id="job-info" className="sm:col-span-3 order-2 sm:order-1">
        <h4 className="text-sm text-base-content/80">
          Posted {job.job_posted_at}
        </h4>
        <Link to={`/details/${job?.job_id}`}><h3 className="font-bold hover:text-primary/80 duration-200">{job.job_title}</h3></Link>
        <h4 className="text-sm text-base-content/80 mb-4">
          {job.employer_name} {job.job_is_remote && -(<span>Remote</span>)}
        </h4>

        <SecondaryBtn>Apply</SecondaryBtn>
      </div>
      <div
        id="job-img"
        className="sm:order-2 order-1 flex sm:justify-end justify-center items-center"
      >
        <img
          className="sm:w-full sm:h-full w-3/5 rounded-lg"
          src={job.employer_logo}
          alt="company-image"
        />
      </div>
    </div>
  );
}

export default Job;
