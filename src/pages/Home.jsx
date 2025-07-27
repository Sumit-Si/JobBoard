import React from "react";
import Container from "../components/Container/Container";
import Search from "../components/Search/Search";
import SecondaryBtn from "../components/Buttons/SecondaryBtn";
import useSearchJob from "../hooks/useSearchJob";
import Job from "../components/Home/Job";

function Home() {
  const { jobList, loading, error } = useSearchJob();

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error: {error}</h2>;

  console.log(jobList, "jobList");

  return (
    <Container>
      <div className="w-full h-full px-5">
        <Search />
        <div>
          <h2 className="font-bold text-xl md:mb-5 mb-8">Job Listings</h2>
          <div className="flex gap-12 sm:gap-10 md:gap-5 flex-col">
            {jobList.length > 0 ? (
              jobList.map((job) => (
                <div key={job?.job_id}>
                  <Job job={job} />
                </div>
              ))
            ) : (
              <h3>No Search Results</h3>
            )}

            {/* Pagination  */}
            <div className="join mx-auto py-5">
              <button className="join-item btn">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn btn-disabled">...</button>
              <button className="join-item btn">9</button>
              <button className="join-item btn">10</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
