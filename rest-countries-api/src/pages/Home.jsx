import { useState, useCallback, useEffect, Suspense } from "react";
import { InputSearch, InputSelect, Card, CardSkeleton } from "../components";
import { useFilteredCountries, useFetchApi } from "../hooks";

function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const [search, setSearch] = useState("");
  const [visibleCountries, setVisibleCountries] = useState(12);

  const { data, error, isLoading } = useFetchApi();

  const filteredCountries = useFilteredCountries(
    data || [],
    search,
    selectedValue,
  );

  const handleSearchChange = useCallback((e) => setSearch(e.target.value), []);
  const handleSelectChange = useCallback(
    (e) => setSelectedValue(e.target.value),
    [],
  );

  const loadMoreCountries = () => {
    setVisibleCountries((prevVisibleCountries) => prevVisibleCountries + 12);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      loadMoreCountries();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {error && <div className="container text-red-500">{error.message}</div>}
      {isLoading ? (
        <CardSkeleton aria-label="Loading countries data" />
      ) : (
        data && (
          <Suspense
            fallback={<CardSkeleton aria-label="Loading countries data" />}
          >
            <Card
              countriesData={filteredCountries.slice(0, visibleCountries)}
            />
          </Suspense>
        )
      )}
    </>
  );
}

export default Home;
