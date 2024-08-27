import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { data } from "../data/data";
import { generateCountryPath } from "../utils/generateCountryPath.js";
import { BackButton } from "../components";

const ListItem = ({
  className = "",
  lable = "lable",
  text = false,
  list = false,
  Children,
}) => {
  return (
    <li className={className}>
      <span
        className={`${list && "block"} font-semibold dark:text-white`}
      >{`${lable}: `}</span>
      {text && <span className="dark:text-gray-500">{text}</span>}
      {list && (
        <ul className="mt-2 inline-flex flex-wrap items-center gap-2">
          {Children}
        </ul>
      )}
    </li>
  );
};

const List = ({ key, text, title = false, onClick = false }) => {
  return (
    <li
      key={key}
      title={title}
      onClick={onClick}
      className={`${title && "cursor-pointer"} rounded-md bg-white px-3 py-0.5 text-sm dark:bg-slate-600 dark:text-white`}
    >
      {text}
    </li>
  );
};

function Countrie() {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state;

  const handleNavigation = (item) => {
    navigate(generateCountryPath(item.name), { state: item });
  };

  const borderCountries = useMemo(() => {
    return data.filter((border) =>
      country?.borders?.includes(border.alpha3Code),
    );
  }, [country?.borders]);

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
            <h1 className="text-3xl font-bold dark:text-white">
              {country?.name}
            </h1>
            <ul className="grid gap-2 py-6 capitalize sm:grid-cols-2">
              <ListItem lable={"native name"} text={country?.nativeName} />
              <ListItem lable={"population"} text={country?.population} />
              <ListItem lable={"region"} text={country?.region} />
              <ListItem lable={"sub region"} text={country?.subregion} />
              <ListItem lable={"capital"} text={country?.capital} />
              <ListItem lable={"calling code"} text={country?.callingCodes} />
              <ListItem
                lable={"independent"}
                text={country?.independent ? "Yes" : "No"}
              />

              <ListItem
                lable={"currencies"}
                className="sm:col-span-2"
                list
                Children={country?.currencies?.map(({ code }) => (
                  <List key={code} text={code} />
                ))}
              />

              {country?.topLevelDomain && (
                <ListItem
                  lable={"top level domain"}
                  className="sm:col-span-2"
                  list
                  Children={country?.topLevelDomain?.map((item) => (
                    <List key={item} text={item} />
                  ))}
                />
              )}

              {country?.languages && (
                <ListItem
                  lable={"languages"}
                  className="sm:col-span-2"
                  list
                  Children={country?.languages?.map(({ nativeName }) => (
                    <List key={nativeName} text={nativeName} />
                  ))}
                />
              )}

              {country?.borders && (
                <ListItem
                  className="sm:col-span-2"
                  lable={"border countries"}
                  list
                  Children={borderCountries.map((item) => (
                    <List
                      key={item?.name}
                      title={item?.name}
                      text={item?.alpha3Code}
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
