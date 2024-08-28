import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { useFetchApi } from "../hooks";
import { generateCountryPath } from "../utils/generateCountryPath.js";
import { BackButton } from "../components";

const ListItem = ({
  className = "",
  label = "label",
  text = false,
  list = false,
  children,
}) => {
  return (
    <li className={className}>
      <span
        className={`${list ? "block" : ""} font-semibold duration-500 dark:text-gray-200`}
      >{`${label}: `}</span>
      {text && <span className="duration-500 dark:text-gray-200">{text}</span>}
      {list && (
        <ul className="mt-2 inline-flex flex-wrap items-center gap-2">
          {children}
        </ul>
      )}
    </li>
  );
};

const List = ({ text, title, onClick }) => {
  return (
    <li
      title={title}
      onClick={onClick}
      className={`${title ? "cursor-pointer" : ""} rounded-md bg-white px-3 py-0.5 text-sm duration-500 dark:bg-gray-700 dark:text-gray-200`}
    >
      {text}
    </li>
  );
};

function Countrie() {
  const { data, error, loading } = useFetchApi();
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state;

  const handleNavigation = (item) => {
    navigate(generateCountryPath(item.name), { state: item });
  };

  const borderCountries = useMemo(() => {
    if (!data || !country?.borders) return [];
    return country.borders
      .map((borderCode) => data.find((c) => c.alpha3Code === borderCode))
      .filter(Boolean);
  }, [data, country?.borders]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!country) return <div>No country data available</div>;

  return (
    <>
      <BackButton />
      <section className="container py-4">
        <div className="grid gap-4 md:grid-cols-5">
          <figure className="h-80 w-full overflow-hidden rounded-lg md:col-span-2">
            <img
              src={country?.flag}
              alt={`${country?.name} flag`}
              className="size-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="md:col-span-3 md:p-6">
            <h1 className="text-3xl font-bold duration-500 dark:text-gray-100">
              {country?.name}
            </h1>
            <ul className="grid gap-2 py-6 capitalize sm:grid-cols-2">
              <ListItem label={"native name"} text={country?.nativeName} />
              <ListItem label={"population"} text={country?.population} />
              <ListItem label={"region"} text={country?.region} />
              <ListItem label={"sub region"} text={country?.subregion} />
              <ListItem label={"capital"} text={country?.capital} />
              <ListItem label={"calling code"} text={country?.callingCodes} />
              <ListItem
                label={"independent"}
                text={country?.independent ? "Yes" : "No"}
              />

              <ListItem
                label={"currencies"}
                className="sm:col-span-2"
                list
                children={country?.currencies?.map(({ code }) => (
                  <List key={code} text={code} />
                ))}
              />

              {country?.topLevelDomain && (
                <ListItem
                  label={"top level domain"}
                  className="sm:col-span-2"
                  list
                  children={country?.topLevelDomain?.map((item) => (
                    <List key={item} text={item} />
                  ))}
                />
              )}

              {country?.languages && (
                <ListItem
                  label={"languages"}
                  className="sm:col-span-2"
                  list
                  children={country?.languages?.map(({ nativeName }) => (
                    <List key={nativeName} text={nativeName} />
                  ))}
                />
              )}

              {borderCountries.length > 0 && (
                <ListItem
                  className="sm:col-span-2"
                  label={"border countries"}
                  list
                  children={borderCountries.map((item) => (
                    <List
                      key={item.alpha3Code}
                      title={item.name}
                      text={item.alpha3Code}
                      onClick={() => handleNavigation(item)}
                    />
                  ))}
                />
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Countrie;
