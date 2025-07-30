import axiosInstance from "../libs/axios";
import { useEffect, useState } from "react";

const useSearchJob = (filters) => {
  console.log(filters, "useSearch");

  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchJob = async () => {
    try {
      setLoading(true);
      setError(null);

      // const res = await axiosInstance.get("/search", {
      //   params: {
      //     query: filters?.searchVal || "developer",
      //     page: page,
      //     num_pages: 1,
      //     country: "in",
      //     date_posted: filters?.datePostedVal || "all",
      //   },
      // });

      const res = {
        status: 200,
        data: {
          data: [
            {
              job_id: "Ls-6cWEGqm7U9hWVAAAAAA==",
              job_title:
                "Software Developer (ReactJS & DotNet) in Faridabad, Noida, Palwal, Ballabgarh",
              employer_name: "Digital Shahi Pvt. Ltd.",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1sjVzkDRXD1cjEUQrVDH3wR62nbN7FbdeHuA&s=0",
              employer_website: null,
              job_publisher: "LinkedIn",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://in.linkedin.com/jobs/view/software-developer-reactjs-dotnet-in-faridabad-noida-palwal-ballabgarh-at-digital-shahi-pvt-ltd-4275806323?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "LinkedIn",
                  apply_link:
                    "https://in.linkedin.com/jobs/view/software-developer-reactjs-dotnet-in-faridabad-noida-palwal-ballabgarh-at-digital-shahi-pvt-ltd-4275806323?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
              ],
              job_description:
                "As a Software Developer at Digital Shahi Pvt. Ltd., you will have the opportunity to work on cutting-edge technologies such as ReactJS, DotNet, MongoDB, MERN stack, and Node.js. Join our dynamic team and be a part of revolutionizing the digital landscape!\n\nKey Responsibilities\n• Develop and maintain high-quality software solutions using ReactJS and DotNet technologies.\n• Collaborate with cross-functional teams to design and implement user-friendly interfaces and applications.\n• Optimize application performance by implementing best practices in coding, testing, and debugging.\n• Work on integration with MongoDB and Node.js to create seamless end-to-end solutions.\n• Stay updated on the latest trends and technologies in software development to continuously improve our products.\n• Contribute to the overall architecture and design of software applications to ensure scalability and reliability.\n• Participate in code reviews, brainstorming sessions, and technical discussions to drive innovation and excellence in our projects.\n\nIf you are a passionate and skilled Software Developer with expertise in ReactJS, DotNet, and related technologies, we would love to have you on board! Join us at Digital Shahi Pvt. Ltd. and be a part of our exciting journey towards digital excellence.\n\nAbout Company: At Digital Shahi, we are a leading software development company dedicated to delivering innovative and cutting-edge solutions that help businesses achieve their J curve through our digital expertise. We believe in harnessing the power of technology to transform organizations into thriving digital empires.",
              job_is_remote: false,
              job_posted_at: "2 days ago",
              job_posted_at_timestamp: 1753401600,
              job_posted_at_datetime_utc: "2025-07-25T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3DLs-6cWEGqm7U9hWVAAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113400",
              job_onet_job_zone: "3",
            },
            {
              job_id: "Y098dR2tBpBVA3bFAAAAAA==",
              job_title: "Senior / Lead Fullstack Developer",
              employer_name: "iSchoolConnect",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdxiElaNIHb942a-h4fVViM1JU4cA_P5pY3Zz&s=0",
              employer_website: "https://ischoolconnect.com",
              job_publisher: "LinkedIn",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://in.linkedin.com/jobs/view/senior-lead-fullstack-developer-at-ischoolconnect-4270196931?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "LinkedIn",
                  apply_link:
                    "https://in.linkedin.com/jobs/view/senior-lead-fullstack-developer-at-ischoolconnect-4270196931?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "BeBee",
                  apply_link:
                    "https://in.bebee.com/job/2f64e6032b7c3acfe867b68bba0d796a?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Expertini",
                  apply_link:
                    "https://in.expertini.com/jobs/job/senior-developer-tech-lead-india-amplifai-315-47348714/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Kit Job",
                  apply_link:
                    "https://www.kitjob.in/job/165141356/senior-lead-fullstack-developer-i-935-mumbai/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
              ],
              job_description:
                "iSchoolConnect is an online platform that makes the University Admissions process hassle-free, fun and accessible to students around the globe. Using our unique AI technology, we allow students to apply to multiple universities with a single application. iSchoolConnect also connects with institutions worldwide and aids them in the transformation of their end-to-end admission processes using our various cutting-edge use cases.\n\nDesignation : Senior Fullstack Developer\n\nWe are seeking an experienced and highly skilled Senior Full Stack Developer to join our growing development team. The ideal candidate will have extensive experience in building scalable, high-performance web applications and will be responsible for delivering robust backend services and modern, user-friendly frontend solutions. This role will also involve working with cloud services, databases, and ensuring the technical success of projects from inception to deployment.\n\nResponsibilities\n• End-to-End Development: Lead the development and maintenance of both frontend and backend applications. Write clean, scalable, and efficient code for web applications.\n• Backend Development: Develop RESTful APIs and microservices using technologies like Node.js, Express.js, and Nest.js.\n• Frontend Development: Implement and maintain modern, responsive web applications using frameworks React, Angular, etc\n• Database Management: Design and maintain scalable databases, including MongoDB and MySQL, to ensure data consistency, performance, and reliability.\n• Cloud Services: Manage cloud infrastructure on AWS and Google Cloud, ensuring optimal performance, scalability, and cost-efficiency.\n• Collaboration: Work closely with product managers, designers, and other engineers to deliver new features and improvements.\n• Code Quality & Testing: Follow best practices for code quality and maintainability, utilizing Test-Driven Development (TDD), and write unit and integration tests using Jest, and Postman.\n• Mentorship: Provide guidance to junior developers, perform code reviews, and ensure high standards of development across the team.\n\nRequirements\n• Experience: 5+ years of hands-on experience in full stack development, with a proven track record in both backend and frontend development.\n• Backend Technologies: Proficiency in Node.js, Express.js, and Nest.js for building scalable backend services and APIs.\n• Frontend Technologies: Strong experience with React, Angular, etc to build dynamic and responsive user interfaces.\n• Databases: Strong knowledge of both relational (MySQL) and NoSQL (MongoDB) databases.\n• Cloud Infrastructure: Hands-on experience with AWS and Google Cloud for managing cloud services, databases, and deployments.\n• Version Control: Proficient in Git for version control and collaboration.\n• Testing: Experience in writing unit and integration tests with Jest, and Postman.\n• Problem Solving: Strong analytical and problem-solving skills to work with complex systems.\n• Communication: Excellent communication and teamwork skills, with the ability to collaborate cross-functionally.\n\nNice-to-Have\n• Experience with Docker, Kubernetes, and CI/CD tools.\n• Familiarity with GraphQL and Microservices Architecture.\n• Experience working in an Agile/Scrum environment.\n\nSkills:- MongoDB, Express, NodeJS (Node.js), Amazon Web Services (AWS), AngularJS (1.x), React.js, Fullstack Developer, MERN Stack and MEAN stack",
              job_is_remote: false,
              job_posted_at: "2 days ago",
              job_posted_at_timestamp: 1753401600,
              job_posted_at_datetime_utc: "2025-07-25T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3DY098dR2tBpBVA3bFAAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: "YEAR",
              job_highlights: {},
              job_onet_soc: "15113300",
              job_onet_job_zone: "4",
            },
            {
              job_id: "yd5EHSRObD96EeVyAAAAAA==",
              job_title: "C# and .net Developer",
              employer_name: "NTT DATA North America",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-kJJf4usVs88xwWi9RzoKCcYwdh4R-8gb1hu&s=0",
              employer_website: null,
              job_publisher: "NTT DATA Careers",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://careers.services.global.ntt/global/en/job/94ae6813f9bdd00/C-and-net-Developer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "NTT DATA Careers",
                  apply_link:
                    "https://careers.services.global.ntt/global/en/job/94ae6813f9bdd00/C-and-net-Developer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Indeed",
                  apply_link:
                    "https://in.indeed.com/viewjob?jk=241b04f210928ce2&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "LinkedIn",
                  apply_link:
                    "https://in.linkedin.com/jobs/view/c%23-and-net-developer-at-ntt-data-north-america-4275612132?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Shine",
                  apply_link:
                    "https://www.shine.com/jobs/net-and-c-software-developer/caminosoft-ai/17304804?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Glassdoor",
                  apply_link:
                    "https://www.glassdoor.co.in/job-listing/c-and-net-developer-ntt-data-JV_IC2921225_KO0,19_KE20,28.htm?jl=1009823161475&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Apna",
                  apply_link:
                    "https://apna.co/job/bengaluru/c-and-net-developer-1145012271?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Jooble",
                  apply_link:
                    "https://in.jooble.org/jdp/-5297641532147070646?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "MNC Jobs",
                  apply_link:
                    "https://www.mncjobsindia.com/jobs/react-and-net-web-developer-hr-3826931?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
              ],
              job_description:
                "Req ID: 328990\n\nNTT DATA strives to hire exceptional, innovative and passionate individuals who want to grow with us. If you want to be part of an inclusive, adaptable, and forward-thinking organization, apply now.\n\nWe are currently seeking a C# and .net Developer to join our team in Bangalore or Remote, Karnātaka (IN-KA), India (IN).\n\nRequred Skills: C#, .Net with WiX Toolset\n- building desktop application installers with WiX Toolset & WixSharp, preferably version 5 or higher\n- PostgreSQL development, administration & deployment\n- Azure DevOps CI/CD Pipelines\n\n#LI-INPAS\n\nAbout NTT DATA\n\nNTT DATA is a $30 billion trusted global innovator of business and technology services. We serve 75% of the Fortune Global 100 and are committed to helping clients innovate, optimize and transform for long term success. As a Global Top Employer, we have diverse experts in more than 50 countries and a robust partner ecosystem of established and start-up companies. Our services include business and technology consulting, data and artificial intelligence, industry solutions, as well as the development, implementation and management of applications, infrastructure and connectivity. We are one of the leading providers of digital and AI infrastructure in the world. NTT DATA is a part of NTT Group, which invests over $3.6 billion each year in R&D to help organizations and society move confidently and sustainably into the digital future. Visit us at us.nttdata.com\n\nNTT DATA endeavors to make https://us.nttdata.com accessible to any and all users. If you would like to contact us regarding the accessibility of our website or need assistance completing the application process, please contact us at https://us.nttdata.com/en/contact-us. This contact information is for accommodation requests only and cannot be used to inquire about the status of applications. NTT DATA is an equal opportunity employer. Qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability or protected veteran status. For our EEO Policy Statement, please click here. If you'd like more information on your EEO rights under the law, please click here. For Pay Transparency information, please click here.",
              job_is_remote: false,
              job_posted_at: "3 days ago",
              job_posted_at_timestamp: 1753315200,
              job_posted_at_datetime_utc: "2025-07-24T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3Dyd5EHSRObD96EeVyAAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113200",
              job_onet_job_zone: "4",
            },
            {
              job_id: "fnezkLqr3hgREg-sAAAAAA==",
              job_title:
                "Java Developer(AWS, Rest API, Microservices, Docker, Kubernetes)(Location: Bangalore)",
              employer_name: "DigiHelic Solutions Pvt. Ltd.",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqTEwOlgxwYX43jNpVPnSnGtXSbZzk2AWN1ZV&s=0",
              employer_website: "https://digihelic.com",
              job_publisher: "LinkedIn",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://in.linkedin.com/jobs/view/java-developer-aws-rest-api-microservices-docker-kubernetes-location-bangalore-at-digihelic-solutions-pvt-ltd-4270138280?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "LinkedIn",
                  apply_link:
                    "https://in.linkedin.com/jobs/view/java-developer-aws-rest-api-microservices-docker-kubernetes-location-bangalore-at-digihelic-solutions-pvt-ltd-4270138280?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "BeBee",
                  apply_link:
                    "https://in.bebee.com/job/f52388bdd7d2572f31fbafa592a5375a?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
              ],
              job_description:
                "Job description\n\nJob Title: Senior Software Engineer – Java\n\nExperience Range: 4 to 10 years\n\nMandate skills: Java, AWS, Rest API, Microservices, Docker, Kubernetes\n\nMust Have Skills:\n• Strong proficiency in Java programming\n• Hands-on experience with Java frameworks such as Spring and Hibernate\n• Experience with RESTful APIs and microservices architecture\n• Familiarity with Agile methodologies\n• Proficiency in database systems like MySQL, PostgreSQL, or Oracle\n• Strong problem-solving and communication skills\n\nGood to Have Skills:\n• Experience with cloud platforms such as AWS, Azure, or Google Cloud\n• Knowledge of containerization tools like Docker and orchestration with Kubernetes\n• Exposure to CI/CD tools (e.g., Jenkins, GitLab CI)\n• Understanding of test-driven development (TDD) and automated testing frameworks\n• Familiarity with front-end technologies (e.g., HTML, CSS, JavaScript)\n\nSkills\n\nJava, AWS, Rest API, Microservices, Docker, Kubernetes",
              job_is_remote: false,
              job_posted_at: "2 days ago",
              job_posted_at_timestamp: 1753401600,
              job_posted_at_datetime_utc: "2025-07-25T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3DfnezkLqr3hgREg-sAAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113200",
              job_onet_job_zone: "4",
            },
            {
              job_id: "fJfwvz4RzdvrSPEzAAAAAA==",
              job_title:
                "Job Opportunity - Senior Fullstack Developer/Fullstack Lead",
              employer_name: "CoreOps.AI",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tI2E4jVEpqAyXOF79YFhQQUQAoaOePaRKkpJ&s=0",
              employer_website: "https://www.coreops.ai",
              job_publisher: "LinkedIn",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://in.linkedin.com/jobs/view/job-opportunity-senior-fullstack-developer-fullstack-lead-at-coreops-ai-4275354814?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "LinkedIn",
                  apply_link:
                    "https://in.linkedin.com/jobs/view/job-opportunity-senior-fullstack-developer-fullstack-lead-at-coreops-ai-4275354814?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Kit Job",
                  apply_link:
                    "https://www.kitjob.in/job/156813514/ff-077-technical-project-lead-agile-scrum-methodologies-ahmedabad/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Jobindian.in",
                  apply_link:
                    "https://jobindian.in/it/golang-technical-project-lead-2023cbin02005-17813-job209113?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Indianjob24h.in",
                  apply_link:
                    "https://indianjob24h.in/pt/job-opportunity-technical-lead-back-end-bluepi-job65333?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
              ],
              job_description:
                "Key Responsibilities:\n• Work with development teams and product managers to ideate software solutions\n• Design client-side and server-side architecture\n• Build the front-end of applications through appealing visual design\n• Develop and manage well-functioning databases and applications\n• Write effective APIs\n• Test software to ensure responsiveness and efficiency\n• Troubleshoot, debug and upgrade software\n• Create security and data protection settings\n• Build features and applications with a mobile responsive design\n• Write technical documentation\n• Work with AIML Engineers, data scientists and analysts to improve software\n• Collaborate with cross-functional teams, including SAP Machine learning team, customers to define requirements and implement AI solutions\n• Establish and enforce data governance standards implement best practices for data privacy and protection of applications\n\nQualifications And Education Requirements:\n• Bachelor’s/Master’s degree in computer science, data science, mathematics or a related field.\n• At least 8-12 years’ experience in building Al/ML applications\n\nPreferred Skills:\n• Very good understanding of Agile project methodologies\n• Experience working of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, JSON, jQuery, Bootstrap)\n• Experience working of multiple back-end languages (e.g. Python, J2EE) and JavaScript frameworks (e.g. Angular, React, Node.js)\n• Worked on databases (e.g. MySQL, SQLServer, MongoDB), application servers (e.g. Django, JBoss, Apache) and UI/UX design\n• Has lead the team for atleast 4 years.\n• Has worked on providing end to end solution\n• Great communication and collaboration skills\n• Self-starter, Entrepreneurial, result oriented mindset\n• Excellent communication, negotiation, and interpersonal skills,\n\nQualifications\n\nBachelor’s/Master’s degree in computer science, data science, mathematics or a related field",
              job_is_remote: false,
              job_posted_at: "3 days ago",
              job_posted_at_timestamp: 1753315200,
              job_posted_at_datetime_utc: "2025-07-24T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3DfJfwvz4RzdvrSPEzAAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113300",
              job_onet_job_zone: "4",
            },
            {
              job_id: "GL-aM3iSClLAVTVFAAAAAA==",
              job_title: "Backend Developer (Node.js)",
              employer_name: "Qureos Inc",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGim7fIvBSh6ySTUQtAqcwnGIj8atf_CNvSk-&s=0",
              employer_website: "https://jobs.qureos.com",
              job_publisher: "Shine",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://www.shine.com/jobs/backend-developer-nodejs/qureos-inc/17508610?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "Shine",
                  apply_link:
                    "https://www.shine.com/jobs/backend-developer-nodejs/qureos-inc/17508610?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "LinkedIn",
                  apply_link:
                    "https://in.linkedin.com/jobs/view/backend-developer-node-js-at-e-cosmos-india-private-limited-3815118606?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Glassdoor",
                  apply_link:
                    "https://www.glassdoor.com/job-listing/backend-developer-node-js-billow-people-services-JV_KO0,25_KE26,48.htm?jl=1009641290016&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Adzuna",
                  apply_link:
                    "https://www.adzuna.in/details/2500155975?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "MNC Jobs",
                  apply_link:
                    "https://www.mncjobsindia.com/jobs/backend-nodejs-developer-hr-3844270?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Kit Job",
                  apply_link:
                    "https://www.kitjob.in/job/163570460/lcd-816-backend-developer-node-js-bengaluru/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
              ],
              job_description:
                "As a Backend Developer with over 4 years of experience, you will be responsible for designing, developing, and maintaining backend services using Node.js. Your expertise in Node.js and MongoDB will be crucial as you build and scale microservice-based architectures for gaming systems. Your deep understanding of mathematical logic will come into play as you implement and optimize algorithms for game logic and complex calculations.\n\nCollaboration will be key as you work closely with frontend developers and DevOps teams to ensure seamless delivery. Your responsibilities will also include data modeling and performance tuning using MongoDB, conducting code reviews, writing unit tests, and documenting services. Ensuring high availability, scalability, and security of backend systems will be at the core of your role.\n\nTo excel in this position, you must have hands-on experience in Node.js and MongoDB, along with a background in the iGaming industry. Proficiency in mathematics and logic building is essential, as is expertise in designing and managing high-performance microservices. Your solid understanding of API integration, caching, and real-time systems will be advantageous, as well as your familiarity with Git, CI/CD pipelines, and cloud environments like AWS/GCP/Azure.\n\nWhile not mandatory, experience with Redis, Kafka, or other message queues would be beneficial. An understanding of regulatory compliance in iGaming and familiarity with containerization tools like Docker/Kubernetes are considered good to have for this role.,",
              job_is_remote: false,
              job_posted_at: "5 days ago",
              job_posted_at_timestamp: 1753142400,
              job_posted_at_datetime_utc: "2025-07-22T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3DGL-aM3iSClLAVTVFAAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113400",
              job_onet_job_zone: "3",
            },
            {
              job_id: "_Z3KL7zXhN4CpRF5AAAAAA==",
              job_title:
                "BACKEND DEVELOPER (C# / KOTLIN   KAFKA) Job in DIGITXPERT SOLUTIONS LLP at GURGAON, BANGALORE, NOIDA, PUNE, INDORE",
              employer_name:
                "Glan Management Consultancy- Career, Jobs, Hiring",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRciJY40Uw6DADrs0gNCyfR41RLjsIVsMf4dJnP&s=0",
              employer_website: null,
              job_publisher: "LinkedIn",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://in.linkedin.com/jobs/view/backend-developer-c%23-kotlin-kafka-job-in-digitxpert-solutions-llp-at-gurgaon-bangalore-noida-pune-indore-at-glan-management-consultancy-career-jobs-hiring-4274940220?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "LinkedIn",
                  apply_link:
                    "https://in.linkedin.com/jobs/view/backend-developer-c%23-kotlin-kafka-job-in-digitxpert-solutions-llp-at-gurgaon-bangalore-noida-pune-indore-at-glan-management-consultancy-career-jobs-hiring-4274940220?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "PrepIntro",
                  apply_link:
                    "https://www.prepintro.com/job/backend-developer-c-kotlin-kafka-job-in-digitxpert-solutions-llp-at-gurgaon-bangalore-noida-pune-indore-glan-management-consultancy-career-jobs-hiring/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: true,
                },
              ],
              job_description:
                "Job Title: Backend Developer - C#/Kotlin with Kafka\n\nLocation: Gurgaon / Bangalore / Noida / Pune / Indore\n\nExperience: 4.5-6 years\n\nCompensation: Up to 22 LPA\n\nJoining: Immediate joiners preferred\n\nRole Overview\n\nWe are seeking a highly motivated and experienced Backend Developer with strong skills in C# (Kotlin is a plus) and hands-on experience with Kafka or other streaming platforms. The ideal candidate will be well-versed in building scalable, high-performance backend systems and APIs using modern frameworks and tools.\n\nKey Responsibilities\n• Develop and maintain robust backend services using C# (and/or Kotlin)\n• Build and integrate RESTful and GraphQL APIs\n• Design and develop microservices architecture for high-performance applications\n• Work with Kafka or similar streaming platforms for real-time data processing\n• Manage and optimize PostgreSQL and NoSQL databases like Redis or Couchbase\n• Collaborate with cross-functional teams in an agile environment\n• Contribute to CI/CD pipeline setup, automation, and deployment processes\n\nRequired Skills:\n• 5 years of hands-on backend development experience\n• Strong programming skills in C# (Kotlin experience is an added advantage)\n• Experience with Kafka or similar event streaming systems\n• Proficiency in designing and consuming REST/GraphQL APIs\n• Strong understanding of PostgreSQL and NoSQL databases\n• Familiarity with CI/CD tools, agile methodologies, and DevOps practices\n\nNice to Have:\n• Experience working with financial data or third-party API integrations\n• Exposure to high-throughput distributed systems and scalable architectures\n\nHow to Apply:\n\nDMS or Text if you are available to join immediately and match the role requirements\n\nKey Skill\n\nbackend developer, C#, KOTLIN, KAFKA\n\nPosted on: 19th May, 2025",
              job_is_remote: false,
              job_posted_at: "4 days ago",
              job_posted_at_timestamp: 1753228800,
              job_posted_at_datetime_utc: "2025-07-23T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3D_Z3KL7zXhN4CpRF5AAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113200",
              job_onet_job_zone: "4",
            },
            {
              job_id: "MQiYCmepXWPwh_lBAAAAAA==",
              job_title: "Hiring for Flutter Developer",
              employer_name: "Cogniter Technologies",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbwbTp0DT0JtJjxxwtwX8zicg-PXPdHDWvuOP&s=0",
              employer_website: "https://www.cogniter.com",
              job_publisher: "Glassdoor",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://www.glassdoor.co.in/job-listing/hiring-for-flutter-developer-cogniter-technologies-JV_KO0,28_KE29,50.htm?jl=1009817790585&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "Glassdoor",
                  apply_link:
                    "https://www.glassdoor.co.in/job-listing/hiring-for-flutter-developer-cogniter-technologies-JV_KO0,28_KE29,50.htm?jl=1009817790585&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
              ],
              job_description:
                "Skills\n• Job Title: Flutter Developer (2–5 Years Experience)\n\nLocation: Chandigarh, India\n\nEmployment Type: Full-Time\n\nApply at: hr@cogniter.com\n\nAbout the Role\n\nCogniter Technologies is seeking a talented Flutter Developer to strengthen our mobile app development team. In this role, you will build high-quality, cross-platform mobile applications using Flutter and Dart, working closely with UI/UX designers and backend developers. If you have a passion for creating seamless and scalable apps, we’d love to hear from you!\n\nWhat You’ll Do\n• Develop, test, and maintain mobile applications using Flutter and Dart.\n• Convert UI/UX designs and wireframes into smooth, responsive applications.\n• Integrate APIs, Firebase services, and third-party libraries efficiently.\n• Write clean, structured, and reusable code following best practices.\n• Debug and optimize apps for performance, scalability, and usability.\n• Collaborate with cross-functional teams to design and implement new features.\n• Keep up with emerging trends and technologies in mobile development.\n\nMust-Have Skills\n• 2–5 years of proven experience with Flutter and Dart.\n• Strong knowledge of mobile app architecture and design patterns.\n• Experience with state management solutions (Provider, Bloc, GetX, or Riverpod).\n• Expertise in REST APIs, JSON, and third-party service integration.\n• Practical knowledge of Firebase (Authentication, Firestore, Push Notifications).\n• Hands-on experience with Git and version control workflows.\n• Experience publishing apps on Google Play Store and Apple App Store.\n• Strong problem-solving abilities and excellent communication skills.\n\nGood to Have\n• Familiarity with native Android (Java/Kotlin) or iOS (Swift/Objective-C).\n• Understanding of CI/CD pipelines.\n• Experience working in Agile environments.\n\nHow to Apply\n\nEmail your updated resume to hr@cogniter.com with the subject line:\n\nApplication for Flutter Developer – [Your Name]\n\nApply Now",
              job_is_remote: false,
              job_posted_at: "7 days ago",
              job_posted_at_timestamp: 1752969600,
              job_posted_at_datetime_utc: "2025-07-20T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3DMQiYCmepXWPwh_lBAAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113200",
              job_onet_job_zone: "4",
            },
            {
              job_id: "eSA6dTR5L5Jtu4jPAAAAAA==",
              job_title: ".Net Developer - C#/ASP/WebAPI",
              employer_name: "HYRGPT",
              employer_logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRd7UkQwWh3hX_ZxkC3vvxLBcT06jhYJjNDawc&s=0",
              employer_website: null,
              job_publisher: "LinkedIn",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://in.linkedin.com/jobs/view/net-developer-c%23-asp-webapi-at-hyrgpt-4275259886?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "LinkedIn",
                  apply_link:
                    "https://in.linkedin.com/jobs/view/net-developer-c%23-asp-webapi-at-hyrgpt-4275259886?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
              ],
              job_description:
                "Key Responsibilities\n• Collaborate with cross-functional teams during the design, development, and testing phases of software products.\n• Understand and analyze customer requirements to develop tailored solutions.\n• Participate in UI design and development along with writing unit and integration tests.\n• Utilize version control tools effectively and maintain awareness of the product development lifecycle.\n• Contribute to agile software development processes (understanding of Agile methodology is a plus).\n• Debug and troubleshoot issues related to web interfaces and & Skills :\n• 3 to 4 years of experience in software development or software product support.\n• Bachelors degree in Computer Science, Engineering (BE/MTech), MCA, or B.Sc from a reputed university or college with strong academic records.\n• Proficient in C#, ASP.Net, Windows Services, .NET Framework, .NET Core, REST APIs, and SQL Server.\n• Reasonable proficiency in PL/SQL programming, with a solid understanding of stored procedures and triggers.\n• Strong analytical and problem-solving skills with the ability to adapt quickly in a changing environment.\n• Excellent debugging and troubleshooting skills for web interfaces and services.\n• Quick learner with the ability to grasp new concepts and software Skill Set Skill : C#, ASP.Net MVC, Visual Studio, VSTS, .Net Core, REST APIs\n\nSecondary Skill : WPF, WCF\n\nDatabase : SQL Server, MySQL\n\n(ref:hirist.tech)",
              job_is_remote: false,
              job_posted_at: "4 days ago",
              job_posted_at_timestamp: 1753228800,
              job_posted_at_datetime_utc: "2025-07-23T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3DeSA6dTR5L5Jtu4jPAAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113200",
              job_onet_job_zone: "4",
            },
            {
              job_id: "FLimNb66a5mVS5g0AAAAAA==",
              job_title: "Senior Zoho Developer",
              employer_name: "Techvaria",
              employer_logo: null,
              employer_website: "https://techvaria.com",
              job_publisher: "Shine",
              job_employment_type: "Full–time",
              job_employment_types: ["FULLTIME"],
              job_apply_link:
                "https://www.shine.com/jobs/senior-zoho-developer/techvaria/17491602?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
              job_apply_is_direct: false,
              apply_options: [
                {
                  publisher: "Shine",
                  apply_link:
                    "https://www.shine.com/jobs/senior-zoho-developer/techvaria/17491602?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Adzuna",
                  apply_link:
                    "https://www.adzuna.in/details/5312887465?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "Kit Job",
                  apply_link:
                    "https://www.kitjob.in/job/165076535/lm362-senior-zoho-developer-india/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: false,
                },
                {
                  publisher: "PrepIntro",
                  apply_link:
                    "https://www.prepintro.com/job/senior-zoho-developer-techvaria/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
                  is_direct: true,
                },
              ],
              job_description:
                "As a Zoho Customization Specialist, your primary responsibility will be customizing Zoho products such as CRM, Creator, Books, and Projects to meet the specific needs of the business. This involves creating and modifying workflows, layouts, and fields within Zoho applications to optimize their functionality and alignment with business requirements.\n\nIn the role of a Zoho Integrator, you will be tasked with integrating Zoho products with third-party applications through the use of APIs. Your duties will also include setting up and managing seamless data flows between different systems to ensure efficient data transfer and synchronization.\n\nAs an Application Developer, you will focus on building custom applications utilizing Zoho Creator. Additionally, you will be responsible for developing automation scripts and workflows using Deluge, Zoho's scripting language, to streamline processes and enhance operational efficiency.\n\nIn the position of a Support Analyst, you will be responsible for troubleshooting any issues that arise within Zoho products and implementing necessary fixes. Furthermore, you will provide technical support to end users to ensure smooth operation and usage of the Zoho applications.\n\nAs a Business Analyst, your role will involve collaborating with stakeholders to gather requirements and understand business processes. You will then be tasked with translating these business needs into Zoho configurations and customizations to optimize the utilization of Zoho products within the organization.\n\nIn the capacity of a Data Manager, you will be responsible for handling data migration to and from Zoho applications. Your role will also involve ensuring data integrity and security during system updates and changes to maintain the confidentiality and accuracy of data stored within Zoho applications.\n\nQualifications:\n- Bachelor's degree in Business, Information Technology, or a related field.\n- Proven experience with Zoho CRM and Zoho Creator.\n- Strong understanding of CRM best practices and data management.\n- Proficiency in scripting (Deluge, if applicable) and integration techniques.\n- Excellent problem-solving and analytical skills.\n- Strong communication and interpersonal skills.\n\nPreferred Skills:\n- Experience in project management or agile methodologies.\n- Familiarity with other Zoho products like Zoho Books and Zoho Projects.\n- Certifications in Zoho CRM or Zoho Creator are considered a plus.,",
              job_is_remote: false,
              job_posted_at: "8 days ago",
              job_posted_at_timestamp: 1752883200,
              job_posted_at_datetime_utc: "2025-07-19T00:00:00.000Z",
              job_location: "India",
              job_city: null,
              job_state: null,
              job_country: "IN",
              job_latitude: 20.593684,
              job_longitude: 78.96288,
              job_benefits: null,
              job_google_link:
                "https://www.google.com/search?q=jobs&gl=in&hl=en&udm=8#vhid=vt%3D20/docid%3DFLimNb66a5mVS5g0AAAAAA%3D%3D&vssid=jobs-detail-viewer",
              job_salary: null,
              job_min_salary: null,
              job_max_salary: null,
              job_salary_period: null,
              job_highlights: {},
              job_onet_soc: "15113200",
              job_onet_job_zone: "4",
            },
          ],
        },
      };

      if (res.status === 200) {
        const { data } = res.data;
        console.log(data, "data");
        setJobList(data);
      }
      console.log(res, "response");
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch jobs"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [page, filters?.datePostedVal, filters?.empTypeVal]);

  return { jobList, loading, error, page, setPage, fetchJob };
};

export default useSearchJob;
