import { useEffect, useState } from "react";
import axiosInstance from "../libs/axios";
import { useParams } from "react-router-dom";
import { useJob } from "../context";
import useSearchJob from "./useSearchJob";

const useJobDetails = () => {
  const {jobList} = useSearchJob()    // to be removed
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();


  const fetchJobDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      // const res = await axiosInstance.get("/job-details", {
      //   params: {
      //     job_id: id,
      //   },
      // });
      // console.log(res, "res");

      // static data ---------------------------
      const jobs = jobList;
      console.log(jobs,"jobs static");

      const filterById = jobs.length > 0 && jobs.filter(j => j.job_id === id);
      console.log(filterById,"filterId"); 
      

      // const res = {
      //   status: 200,
      //   data: [
      //     {
      //       job_id: "Ls-6cWEGqm7U9hWVAAAAAA==",
      //       job_title:
      //         "Software Developer (ReactJS & DotNet) in Faridabad, Noida, Palwal, Ballabgarh",
      //       employer_name: "Digital Shahi Pvt. Ltd.",
      //       employer_logo:
      //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWyCpzRZ6S9RfgnCPHVAl-ZvAtgIQtGlpta5D&s=0",
      //       employer_website: null,
      //       job_publisher: "LinkedIn",
      //       job_employment_type: "Full-time",
      //       job_employment_types: ["FULLTIME"],
      //       job_apply_link:
      //         "https://in.linkedin.com/jobs/view/software-developer-reactjs-dotnet-in-faridabad-noida-palwal-ballabgarh-at-digital-shahi-pvt-ltd-4275806323?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      //       job_apply_is_direct: false,
      //       apply_options: [
      //         {
      //           publisher: "LinkedIn",
      //           apply_link:
      //             "https://in.linkedin.com/jobs/view/software-developer-reactjs-dotnet-in-faridabad-noida-palwal-ballabgarh-at-digital-shahi-pvt-ltd-4275806323?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
      //           is_direct: false,
      //         },
      //       ],
      //       job_description:
      //         "As a Software Developer at Digital Shahi Pvt. Ltd., you will have the opportunity to work on cutting-edge technologies such as ReactJS, DotNet, MongoDB, MERN stack, and Node.js. Join our dynamic team and be a part of revolutionizing the digital landscape!\n\nKey Responsibilities\n• Develop and maintain high-quality software solutions using ReactJS and DotNet technologies.\n• Collaborate with cross-functional teams to design and implement user-friendly interfaces and applications.\n• Optimize application performance by implementing best practices in coding, testing, and debugging.\n• Work on integration with MongoDB and Node.js to create seamless end-to-end solutions.\n• Stay updated on the latest trends and technologies in software development to continuously improve our products.\n• Contribute to the overall architecture and design of software applications to ensure scalability and reliability.\n• Participate in code reviews, brainstorming sessions, and technical discussions to drive innovation and excellence in our projects.\n\nIf you are a passionate and skilled Software Developer with expertise in ReactJS, DotNet, and related technologies, we would love to have you on board! Join us at Digital Shahi Pvt. Ltd. and be a part of our exciting journey towards digital excellence.\n\nAbout Company: At Digital Shahi, we are a leading software development company dedicated to delivering innovative and cutting-edge solutions that help businesses achieve their J curve through our digital expertise. We believe in harnessing the power of technology to transform organizations into thriving digital empires.",
      //       job_is_remote: null,
      //       job_posted_at: "3 days ago",
      //       job_posted_at_timestamp: 1753401600,
      //       job_posted_at_datetime_utc: "2025-07-25T00:00:00.000Z",
      //       job_location: "India",
      //       job_city: null,
      //       job_state: null,
      //       job_country: "IN",
      //       job_latitude: 20.593684,
      //       job_longitude: 78.96288,
      //       job_benefits: null,
      //       job_google_link:
      //         "https://www.google.com/search?q=jobs&gl=us&hl=en&udm=8#vhid=vt%3D20/docid%3DLs-6cWEGqm7U9hWVAAAAAA%3D%3D&vssid=jobs-detail-viewer",
      //       job_salary: null,
      //       job_min_salary: null,
      //       job_max_salary: null,
      //       job_salary_period: null,
      //       job_highlights: {},
      //       job_onet_soc: "15113400",
      //       job_onet_job_zone: "3",
      //     },
      //   ],
      // };

      // if (res.status === 200) {
        // console.log(res, "res");
        // const { data } = res.data;
        // const data = res.data;
        const data = filterById
        setJob(data); 
      // }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch job details"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchJobDetails();
    }
  }, [id]);

  return { job, loading, error };
};

export default useJobDetails;
