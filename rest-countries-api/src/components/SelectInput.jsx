import React from "react";

function SelectInput() {
  const [region, setRegion] = React.useState([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  return (
    <>
      <select
        name="countries"
        className="cursor-pointer rounded-md bg-white px-3 py-2 focus:outline-none dark:bg-slate-500 dark:text-white"
      >
        {region.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectInput;
