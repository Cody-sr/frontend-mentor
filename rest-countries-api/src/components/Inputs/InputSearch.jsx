import React from "react";
import { IoSearch } from "react-icons/io5";

function InputSearch({ value, handleChange }) {
  return (
    <label
      htmlFor="searchbtn"
      className="inline-flex w-60 items-center gap-1 overflow-hidden rounded-md bg-white p-2 dark:bg-slate-500 dark:text-white"
    >
      <span className="px-1">
        <IoSearch size={18} />
      </span>
      <input
        type="search"
        inputMode="search"
        value={value}
        onChange={handleChange}
        className="me-0.5 flex-1 bg-transparent focus:outline-none"
      />
    </label>
  );
}
export default InputSearch;
