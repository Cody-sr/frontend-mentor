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
            className="cursor-pointer overflow-hidden rounded-lg bg-white ring-1 ring-white duration-500 hover:shadow-lg dark:bg-gray-700 dark:text-white dark:ring-gray-900"
            tabIndex="0"
            role="button"
            aria-labelledby={`country-${item?.name}`}
          >
            <div className="h-52 w-full overflow-hidden">
              <img
                src={item?.flag}
                alt={`${item?.region} flag`}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <figcaption className="p-4">
              <h3 id={`country-${item?.name}`} className="text-lg font-bold">
                {item?.name}
              </h3>

              <ul className="pt-4 dark:text-gray-200">
                <li className="space-x-2">
                  <span className="font-semibold">Population:</span>
                  <span className="dark:text-gray-300">{item?.population}</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold">Region:</span>
                  <span className="dark:text-gray-300">{item?.region}</span>
                </li>
                <li className="space-x-2">
                  <span className="font-semibold">Capital:</span>
                  <span className="dark:text-gray-300">{item?.capital}</span>
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
