import { ImageDown } from "lucide-react";
import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const applyJobSchema = z.object({
  fullName: z
    .string()
    .trim()
    .nonempty("Username is required")
    .min(8, "FullName must be at least 8 characters long"),
  email: z.email("Invalid emailId").trim(),
  linkedinUrl: z
    .url("Invalid URL")
    .refine((url) => url.includes("linkedin.com"), {
      message: "Must be valid linkedin URL",
    })
    .trim(),
  resume: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Resume file is required",
    })
    .refine((file) => file?.size <= 10 * 1024 * 1024, {
      message: "Max file size is 10MB",
    })
    .refine(
      (file) =>
        ["application/pdf", "image/png", "image/jpeg"].includes(file?.type),
      {
        message: "Only PDF or image files (png and jpeg) are accepted",
      }
    ),
});

function JobModal({ jobModalRef }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(applyJobSchema),
  });

  const validateForm = (data) => {
    console.log("form submitted successfully");
    
    reset();
    jobModalRef.current?.close();
  }

  return (
    <dialog ref={jobModalRef} className="modal">
      <div className="modal-box max-w-lg">
        <form method="dialog" onSubmit={handleSubmit(validateForm)}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">Apply for this Job</h3>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost" onClick={() => jobModalRef.current?.close()}>✕</button>
          </div>
          <div className="flex gap-4 flex-col">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="fullName"
                className="text-sm block font-medium text-base-content"
              >
                Full Name
              </label>
              <input
                className={`input  w-full ${
                  errors.fullName ? "input-error" : "input-secondary"
                }`}
                id="fullName"
                {...register("fullName")}
                type="text"
                placeholder="eg: Sumit Singh"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm block font-medium text-base-content"
              >
                Email Address
              </label>
              <input
                className={`input  w-full ${
                  errors.email ? "input-error" : "input-secondary"
                }`}
                id="email"
                {...register("email")}
                type="email"
                placeholder="eg: sumit345@gmaill.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="linkedinURL"
                className="text-sm block font-medium text-base-content"
              >
                Linkedin Profile URL
              </label>
              <input
                className={`input  w-full ${
                  errors.linkedinUrl ? "input-error" : "input-secondary"
                }`}
                id="linkedinURL"
                {...register("linkedinUrl")}
                type="url"
                placeholder="eg: https://linkedin.com/in/yourprofile"
              />
              {errors.linkedinUrl && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.linkedinUrl.message}
                </p>
              )}
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
                        {...register("resume")}
                        type="file"
                        className={`input sr-only  w-full ${
                          errors.resume ? "input-error" : "input-secondary"
                        }`}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/tight">PNG, JPG, GIF up to 10MB</p>
                      {errors.resume && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.resume.message}
                        </p>
                      )}
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <SecondaryBtn>Cancel</SecondaryBtn>
              <PrimaryBtn type={"submit"}>Submit Application</PrimaryBtn>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default JobModal;
