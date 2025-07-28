import React, { useRef } from "react";
import Container from "../components/Container/Container";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import SecondaryBtn from "../components/Buttons/SecondaryBtn";
import { LucideBoxSelect } from "lucide-react";
import JobModal from "../components/Modal/JobModal";
import useJobDetails from "../hooks/useJobDetails";
import { useJob } from "../context/JobContext";

function JobDetails() {
  const { job, loading, error } = useJobDetails();
  const {savedJobs,addToSavedJob} = useJob();
  const jobModalRef = useRef(null);
  const handleOpenModal = () => {
    jobModalRef.current?.showModal();
  };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error: {error}</h2>;

  console.log(job, "job");

  const handleClick = (e) => {
    console.log("clicked inside details");
    
  }

  return (
    <Container>
      <div className="py-10 px-5">
        {/* Breadcumbs  */}
        <h4 className="font-semibold text-base-content">
          <span className="text-base-content font-normal">Home</span> / Software
          Enginner
        </h4>

        {/* details  */}
        {job.length > 0 ? (
          job.map((j) => (
            <div className="mt-8 flex gap-5 flex-col">
              <div>
                <h4 className="text-sm text-base-content/80 mb-1">
                  Posted {j.job_posted_at}
                </h4>
                <h2 className="text-3xl mb-3 font-bold">{j.job_title}</h2>
                <div className="mb-3 flex flex-col gap-0.5">
                  <h4 className="text-sm text-base-content/80">
                    {j.employer_name} {j.job_is_remote && <span>- Remote</span>}
                  </h4>
                  <h4 className="text-sm text-base-content">
                    <span className="font-semibold">Location:</span>{" "}
                    {j.job_location}
                  </h4>
                  {j.job_employment_types.length > 0 && (
                    <div className="flex gap-1 items-center mt-2">
                      {j.job_employment_types.map((jobType, index) => (
                        <h4
                          key={index}
                          className="text-xs ring ring-primary/80 text-primary/80 py-1 font-semibold px-3 rounded-lg tracking-wider capitalize"
                        >
                          {String(jobType).toLowerCase()}
                        </h4>
                      ))}
                    </div>
                  )}
                </div>

                <p>{j.job_description}</p>
              </div>

              {/* <div>
                <h2 className="mb-3 text-xl font-bold">Responsibilities</h2>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-2">
                    <LucideBoxSelect />
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laborum, error?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <LucideBoxSelect />
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laborum, error?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <LucideBoxSelect />
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laborum, error?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <LucideBoxSelect />
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laborum, error?
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-bold">Requirements</h2>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-2">
                    <LucideBoxSelect />
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laborum, error?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <LucideBoxSelect />
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laborum, error?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <LucideBoxSelect />
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laborum, error?
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <LucideBoxSelect />
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laborum, error?
                    </span>
                  </li>
                </ul>
              </div> */}

              <div className="flex gap-3">
                <PrimaryBtn handleOpenModal={handleOpenModal}>
                  Apply Now
                </PrimaryBtn>
                <SecondaryBtn handleClick={handleClick}>Save Job</SecondaryBtn>
              </div>
            </div>
          ))
        ) : (
          <h2>Job Details Not Found</h2>
        )}

        <JobModal jobModalRef={jobModalRef} />
      </div>
    </Container>
  );
}

export default JobDetails;
