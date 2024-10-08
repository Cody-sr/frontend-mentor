import React from "react";
import { SearchIcon } from "../../assets/icons";

function InputSearch({ value, handleChange }) {
  return (
    <div className="inline-flex w-60 items-center gap-x-2 overflow-hidden rounded-md bg-white p-2 duration-500 dark:bg-gray-700 dark:text-gray-200">
      <SearchIcon size={18} aria-hidden="true" />
      <input
        type="search"
        aria-label="Search countries"
        inputMode="search"
        value={value}
        onChange={handleChange}
        placeholder="Search"
        className="me-0.5 flex-1 bg-transparent focus:outline-none"
      />
    </div>
  );
}

export default InputSearch;
