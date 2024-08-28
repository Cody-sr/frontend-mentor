import { useState, useCallback, Suspense } from "react";
import { InputSearch, InputSelect, Card, CardSkeleton } from "../components";
import { useFilteredCountries } from "../hooks/useFilteredCountries";

function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const [search, setSearch] = useState("");

  const filteredCountries = useFilteredCountries(search, selectedValue);

  const handleSearchChange = useCallback((e) => setSearch(e.target.value), []);
  const handleSelectChange = useCallback(
    (e) => setSelectedValue(e.target.value),
    [],
  );

  return (
    <>
      <section className="py-4">
        <div className="container flex items-center justify-between gap-2">
          <InputSearch
            value={search}
            handleChange={handleSearchChange}
            aria-label="Search countries"
          />
          <InputSelect
            value={selectedValue}
            handleChange={handleSelectChange}
            aria-label="Filter countries by region"
          />
        </div>
      </section>
      <Suspense fallback={<CardSkeleton aria-label="Loading countries data" />}>
        <Card countriesData={filteredCountries} />
      </Suspense>
    </>
  );
}

export default Home;
