import { useEffect, useState } from "react";
import { data } from "./data/data";
import { ThemeProvider } from "./contexts/theme";
import { SelectInput, SearchInput, HeaderSection } from "./components";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [countries, setCountries] = useState(data);

  const firstdata = countries[0];

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").className = themeMode;
    console.log(firstdata);
  }, [themeMode, firstdata]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <HeaderSection />
      <main className="min-h-svh bg-slate-100 p-4 duration-500 dark:bg-gray-900">
        <section className="py-4">
          <div className="container flex items-center justify-between gap-2">
            <SearchInput />
            <SelectInput />
          </div>
        </section>

        <section className="container">
          <div className="grid grid-cols-3 gap-4">
            {countries.map((item) => (
              <figure
                key={item.name}
                className="overflow-hidden rounded-lg border bg-white"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={item.flag}
                    alt={`${item.region} flag`}
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <h3 className="text-lg font-bold">{item.name}</h3>

                  <ul className="pt-4">
                    <li className="space-x-2">
                      <span className="font-semibold">Population:</span>
                      <span>{item.population}</span>
                    </li>
                    <li className="space-x-2">
                      <span className="font-semibold">Region:</span>
                      <span>{item.region}</span>
                    </li>
                    <li className="space-x-2">
                      <span className="font-semibold">capital:</span>
                      <span>{item.capital}</span>
                    </li>
                  </ul>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
