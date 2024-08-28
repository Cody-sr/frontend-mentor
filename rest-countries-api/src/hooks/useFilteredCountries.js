import { useMemo, useDeferredValue } from "react";

export default function useFilteredCountries(data, search, selectedValue) {
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
  }, [deferredSearch, deferredSelected, data]);
}
