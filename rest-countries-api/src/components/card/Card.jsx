import React from "react";
import { useNavigate } from "react-router-dom";
import { generateCountryPath } from "../../utils/generateCountryPath.js";

function Card({ countriesData = [] }) {
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    navigate(generateCountryPath(item.name), { state: item });
  };

  return (
    <section className="container">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countriesData.map((item) => (
          <figure
            key={item?.name}
            onClick={() => handleNavigation(item)}
            className="cursor-pointer overflow-hidden rounded-lg bg-white ring-1 ring-white duration-500 dark:bg-slate-500 dark:text-white dark:ring-gray-950"
          >
            <div className="h-52 w-full overflow-hidden">
              <img
                src={item?.flag}
                alt={`${item?.region} flag`}
                className="size-full object-cover"
              />
            </div>
            <figcaption className="p-4">
              <h3 className="text-lg font-bold">{item?.name}</h3>

              <ul className="pt-4">
                <li className="space-x-2">
                  <span className="font-semibold">Population:</span>
                  <span>{item?.population}</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold">Region:</span>
                  <span>{item?.region}</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold">Capital:</span>
                  <span>{item?.capital}</span>
                </li>
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Card;
