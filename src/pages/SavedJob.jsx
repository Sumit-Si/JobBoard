import React from "react";
import Container from "../components/Container/Container";
import SecondaryBtn from "../components/Buttons/SecondaryBtn";

function SavedJob() {
  return (
    <Container>
      <div className="py-10 px-5">
        <h2 className="font-semibold text-3xl mb-6 text-center">Saved jobs</h2>
        {/* table */}
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Job title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Date posted</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Software Enginner</th>
                <td>Tech Innovations Inc.</td>
                <td>Remote</td>
                <td>2d ago</td>
                <td className="flex gap-3">
                  <SecondaryBtn>Active</SecondaryBtn>
                  <button className="">Remove</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>Software Enginner</th>
                <td>Tech Innovations Inc.</td>
                <td>Remote</td>
                <td>2d ago</td>
                <td className="flex gap-3">
                  <SecondaryBtn>Active</SecondaryBtn>
                  <button className="">Remove</button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>Software Enginner</th>
                <td>Tech Innovations Inc.</td>
                <td>Remote</td>
                <td>2d ago</td>
                <td className="flex gap-3">
                  <SecondaryBtn>Active</SecondaryBtn>
                  <button className="">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}

export default SavedJob;
