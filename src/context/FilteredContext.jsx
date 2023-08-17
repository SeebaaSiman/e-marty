import { createContext, useState } from "react";

//* 1 Crear contexto
export const FiltersContext = createContext();
//* 2 Crear provider para proveer el contexto
export function FiltersProvider({ children }) {
  const filterValue = {
    category: "all",
    minPrice: 0,
  };

  const [filters, setFilters] = useState(filterValue);
  const value = {
    filters,
    setFilters,
  };
  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}
