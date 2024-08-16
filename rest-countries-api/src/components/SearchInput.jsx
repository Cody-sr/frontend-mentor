import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchInput() {
  return (
    <label
      htmlFor="searchbtn"
      className="inline-flex w-60 items-center gap-1 overflow-hidden rounded-full bg-white p-1"
    >
      <span className="px-1">
        <IoSearch size={18} />
      </span>
      <input type="search" className="me-0.5 flex-1 focus:outline-none" />
    </label>
  );
}

export default SearchInput;
