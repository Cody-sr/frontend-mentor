import { useMemo, useDeferredValue } from "react";
import { data } from "../data/data";

export function useFilteredCountries(search, selectedValue) {
  const deferredSearch = useDeferredValue(search);
  const deferredSelected = useDeferredValue(selectedValue);

  return useMemo(() => {
    const searchLower = deferredSearch.toLowerCase();
    const selectedLower = deferredSelected.toLowerCase();

    return data.filter(
      (item) =>
        item.region.toLowerCase().includes(selectedLower) &&
        item.name.toLowerCase().includes(searchLower),
    );
  }, [deferredSearch, deferredSelected]);
}
