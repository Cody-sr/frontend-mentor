import React from "react";

function InputSelect({ value, handleChange }) {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <label htmlFor="region-select" className="block">
      <span className="sr-only">Select Region</span>
      <select
        id="region-select"
        name="countries"
        value={value}
        onChange={handleChange}
        className="cursor-pointer rounded-md bg-white px-3 py-2 duration-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
        aria-label="Select Region"
      >
        {regions.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

export default InputSelect;
