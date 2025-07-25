import { SearchIcon } from "lucide-react";
import React from "react";
import SecondaryBtn from "../Buttons/SecondaryBtn";

function Search() {
  return (
    <div className="w-full h-full py-8 flex flex-col gap-5">
      <div id="search-input">
        <label className="input shadow-sm w-full">
          <SearchIcon />
          <input type="search" className="" required placeholder="Search" />
        </label>
      </div>
      <div className="flex gap-2">
        <SecondaryBtn>Full-time</SecondaryBtn>
        <SecondaryBtn>Part-time</SecondaryBtn>
        <SecondaryBtn>Contract</SecondaryBtn>
      </div>

      {/* location */}
      <div>
        <input type="text" className="input w-4/12" required placeholder="Location" />
      </div>

      <div className="flex gap-2">
        <SecondaryBtn>Last 24hr</SecondaryBtn>
        <SecondaryBtn>Last 7d</SecondaryBtn>
        <SecondaryBtn>Last 30d</SecondaryBtn>
      </div>

    </div>
  );
}

export default Search;
