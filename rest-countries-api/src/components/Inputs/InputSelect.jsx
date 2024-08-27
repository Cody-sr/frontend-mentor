import { useState } from "react";

function InputSelect({ value, handleChange }) {
  const [region, setRegion] = useState([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  return (
    <select
      name="countries"
      value={value}
      onChange={handleChange}
      className="cursor-pointer rounded-md bg-white px-3 py-2 focus:outline-none dark:bg-slate-500 dark:text-white"
    >
      {region.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default InputSelect;
