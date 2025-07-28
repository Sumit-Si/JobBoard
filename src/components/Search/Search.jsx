import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import useSearchJob from "../../hooks/useSearchJob";

function Search() {
  const [filters, setFilters] = useState({
    searchVal: "",
    locationVal: "",
    datePostedVal: "",
    empTypeVal: "",
  });
  const { jobList, loading, error } = useSearchJob(filters);

  const handleClick = (e) => {
    console.log("clicked", e.target);
  };

  return (
    <div className="w-full h-full py-8 flex flex-col gap-5">
      <div id="search-input">
        <label className="input shadow-sm w-full">
          <SearchIcon />
          <input
            type="search"
            className=""
            name="searchVal"
            required
            placeholder="Search"
            onChange={(e) =>
              setFilters({ ...filters, [e.target.name]: e.target.value })
            }
            value={filters.searchVal}
          />
        </label>
      </div>
      <div className="flex gap-2">
        <SecondaryBtn>Full-time</SecondaryBtn>
        <SecondaryBtn>Part-time</SecondaryBtn>
        <SecondaryBtn>Contract</SecondaryBtn>
      </div>

      {/* location */}
      <div>
        <input
          type="text"
          name="locationVal"
          className="input w-4/12"
          required
          placeholder="Location"
          onChange={(e) =>
            setFilters({ ...filters, [e.target.name]: e.target.value })
          }
          value={filters.locationVal}
        />
      </div>

      <div className="flex gap-2">
        <SecondaryBtn handleClick={handleClick}>Last 24hr</SecondaryBtn>
        <SecondaryBtn handleClick={handleClick}>Last 7d</SecondaryBtn>
        <SecondaryBtn handleClick={handleClick}>Last 30d</SecondaryBtn>
      </div>
    </div>
  );
}

export default Search;
