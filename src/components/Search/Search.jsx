import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import useSearchJob from "../../hooks/useSearchJob";

function Search({
  handleSearch,
  handleDatePostedClick,
  handleEmpTypeClick,
  filters,
  setFilters,
}) {
  return (
    <div className="w-full h-full py-8 flex flex-col gap-5">
      <div id="search-input">
        <label className="input shadow-sm w-full">
          <SearchIcon className="cursor-pointer" onClick={handleSearch} />
          <input
            type="search"
            className=""
            name="searchVal"
            placeholder="Search"
            onChange={(e) =>
              setFilters({ ...filters, [e.target.name]: e.target.value })
            }
            value={filters.searchVal}
          />
        </label>
      </div>
      <div className="flex gap-2">
        <SecondaryBtn
          handleClick={(e) => handleEmpTypeClick(e.target.textContent)}
        >
          Full-time
        </SecondaryBtn>
        <SecondaryBtn
          handleClick={(e) => handleEmpTypeClick(e.target.textContent)}
        >
          Part-time
        </SecondaryBtn>
        <SecondaryBtn
          handleClick={(e) => handleEmpTypeClick(e.target.textContent)}
        >
          Contract
        </SecondaryBtn>
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
        <SecondaryBtn handleClick={() => handleDatePostedClick("today")}>
          Last 24hr
        </SecondaryBtn>
        <SecondaryBtn handleClick={() => handleEmpTypeClick("week")}>
          Last 7d
        </SecondaryBtn>
        <SecondaryBtn handleClick={() => handleEmpTypeClick("month")}>
          Last 30d
        </SecondaryBtn>
      </div>
    </div>
  );
}

export default Search;
