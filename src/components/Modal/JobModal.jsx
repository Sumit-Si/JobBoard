import { ImageDown } from "lucide-react";
import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn"
import SecondaryBtn from "../Buttons/SecondaryBtn"

function JobModal({ jobModalRef }) {
  return (
    <dialog ref={jobModalRef} className="modal">
      <div className="modal-box max-w-lg">
        <form method="dialog">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">Apply for this Job</h3>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost">✕</button>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName" className="text-sm block font-medium text-base-content">
                Full Name
              </label>
              <input
                className="input input-neutral w-full"
                id="fullName"
                type="text"
                placeholder="eg: Sumit Singh"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm block font-medium text-base-content">
                Email Address
              </label>
              <input
                className="input input-neutral w-full"
                id="email"
                type="email"
                placeholder="eg: sumit345@gmaill.com"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="linkedinURL" className="text-sm block font-medium text-base-content">
                Linkedin Profile URL
              </label>
              <input
                className="input input-neutral w-full"
                id="linkedinURL"
                type="url"
                placeholder="eg: https://linkedin.com/in/yourprofile"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-base-content"
              >
                Resume
              </label>
              <div className="flex justify-center rounded-lg border border-dashed border-base-content/40 px-6 py-10">
                <div className="flex flex-col items-center text-center">
                  <ImageDown className="text-secondary" />
                  <div className="mt-4 flex text-sm/tight text-base-content">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-semibold text-secondary  hover:text-secondary/80"
                    >
                      <span>Upload a file</span>
                      <input
                        id="resume"
                        name="file-upload"
                        type="file"
                        className="sr-only w-full input"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/tight">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <SecondaryBtn>Cancel</SecondaryBtn>
              <PrimaryBtn>Submit Application</PrimaryBtn>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default JobModal;
