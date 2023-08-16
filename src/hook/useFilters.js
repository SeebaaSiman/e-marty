import { useFilterContext } from "./useContextProvider";

export const useFilters = () => {

  const { filters, setFilters } = useFilterContext();

  //filtra el elemento que debe cumplir dos condiciones, primero que el price sea mayor o igual al minPrice y luego que si está seleccionado all category sino que coincida el filtro con la categoría del element
  const filterElement = (element) => {
    if (!Array.isArray(element)) {
      return []; // O devuelve un array vacío o maneja el caso como desees.
    }

    return element.filter(el => {
      return (
        el.price >= filters.minPrice &&
        (
          filters.category === "all" ||
          el.category === filters.category
        )
      );
    });
  };

  return { filterElement, filters, setFilters }
}
//* const [products] = useState || json
//* const {filterElement, setFilters } = useFilters()
//* const filteredProducts = filterElement(products)