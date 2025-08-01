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
        <Link className="w-fit block" to={`/details/${job?.job_id}`}>
          <h3 className="font-bold hover:text-primary/80 duration-200">
            {job.job_title}
          </h3>
        </Link>
        <h4 className="text-sm text-base-content/80">
          {job.employer_name}{" "}
          {job.job_location && <span>- {job.job_location}</span>}{" "}
          {job.job_is_remote && <span>- Remote</span>}
        </h4>
        {job.job_employment_types.length > 0 && (
          <div className="flex gap-1 items-center mt-2">
            {job.job_employment_types.map((jobType, index) => (
              <h4
                key={index}
                className="text-xs ring ring-primary/80 text-primary/80 py-1 font-semibold px-3 rounded-lg tracking-wider capitalize"
              >
                {String(jobType).toLowerCase()}
              </h4>
            ))}
          </div>
        )}

        <div className="mt-8">
          <SecondaryBtn>Apply</SecondaryBtn>
        </div>
      </div>
      <div
        id="job-img"
        className="sm:order-2 order-1 flex sm:justify-end justify-center items-center"
      >
        <img
          className="sm:w-full sm:h-full w-3/5 rounded-lg"
          src={job.employer_logo || "https://placehold.co/400"}
          alt="company-image"
        />
      </div>
    </div>
  );
}

export default Job;
