import React, { useRef } from "react";
import Container from "../components/Container/Container";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import SecondaryBtn from "../components/Buttons/SecondaryBtn";
import { LucideBoxSelect } from "lucide-react";
import JobModal from "../components/Modal/JobModal";

function JobDetails() {
    const jobModalRef = useRef(null);
    const handleOpenModal = () => {
        jobModalRef.current?.showModal();
    }
  return (
    <Container>
      <div className="py-10">
        {/* Breadcumbs  */}
        <h4 className="font-semibold text-base-content">
          <span className="text-base-content font-normal">Home</span> / Software
          Enginner
        </h4>

        {/* details  */}
        <div className="mt-8 flex gap-5 flex-col">
          <div>
            <h2 className="text-3xl mb-3 font-bold">Software Enginner</h2>
            <h4 className="text-sm text-base-content/80 mb-3">
              Tech Innovations Inc. - Remote
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              optio nisi id vel aspernatur harum asperiores, reiciendis,
              mollitia laborum numquam similique, ea corporis impedit cum quasi
              quam magni. Commodi beatae eos atque. Totam similique, eligendi
              voluptatibus asperiores dolor quia maxime.
            </p>
          </div>

          <div>
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
          </div>

          <div className="flex gap-3">
            <PrimaryBtn handleOpenModal={handleOpenModal}>Apply Now</PrimaryBtn>
            <SecondaryBtn>Save Job</SecondaryBtn>
          </div>
        </div>
        <JobModal jobModalRef={jobModalRef} />
      </div>
    </Container>
  );
}

export default JobDetails;
