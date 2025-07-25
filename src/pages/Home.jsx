import React from "react";
import Container from "../components/Container/Container";
import Search from "../components/Search/Search";
import SecondaryBtn from "../components/Buttons/SecondaryBtn";

function Home() {
  return (
    <Container>
      <div className="w-full h-full">
        <Search />
        <div>
          <h2 className="font-bold text-xl mb-5">Job Listings</h2>
          <div className="flex gap-5 flex-col">
            <div className="grid justify-between grid-cols-4">
              <div id="job-info" className="col-span-3">
                <h4 className="text-sm text-base-content/80">Posted 2d ago</h4>
                <h3 className="font-bold">Software Engineer</h3>
                <h4 className="text-sm text-base-content/80 mb-4">Tech Innovations Inc. - <span>Remote</span></h4>

                <SecondaryBtn>Apply</SecondaryBtn>
              </div>
              <div id="job-img" className="rounded-lg overflow-hidden flex justify-end">
                <img className="w-full h-full" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="company-image" />
              </div>
            </div>
            <div className="grid justify-between grid-cols-4">
              <div id="job-info" className="col-span-3">
                <h4 className="text-sm text-base-content/80">Posted 2d ago</h4>
                <h3 className="font-bold">Software Engineer</h3>
                <h4 className="text-sm text-base-content/80 mb-4">Tech Innovations Inc. - <span>Remote</span></h4>

                <SecondaryBtn>Apply</SecondaryBtn>
              </div>
              <div id="job-img" className="rounded-lg overflow-hidden flex justify-end">
                <img className="w-full h-full" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="company-image" />
              </div>
            </div>
            <div className="grid justify-between grid-cols-4">
              <div id="job-info" className="col-span-3">
                <h4 className="text-sm text-base-content/80">Posted 2d ago</h4>
                <h3 className="font-bold">Software Engineer</h3>
                <h4 className="text-sm text-base-content/80 mb-4">Tech Innovations Inc. - <span>Remote</span></h4>

                <SecondaryBtn>Apply</SecondaryBtn>
              </div>
              <div id="job-img" className="rounded-lg overflow-hidden flex justify-end">
                <img className="w-full h-full" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="company-image" />
              </div>
            </div>

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
