import { useFetch } from "../hook/useFetch";
import { useFilters } from "../hook/useFilters";
import { BASE_URL, BASE_URL2 } from "./api";

export const fetchData = () => {
 //* api con 20 productos
 const { data } = useFetch(BASE_URL);
 const { filterElement } = useFilters();
 const filteredProducts = filterElement(data);

 const depur = data?.map((item) => item.category); //Extraigo todas las categorías
 const uniqueCategory = [...new Set(depur)]; // Con set no se repiten las categorías (strings o valores)
 const depur2 = data?.map((item) => item.price); //Extraigo en un arr los precios
 const highestPrice = depur2 && Math.max(...depur2); // Busco el valor más alto


 return { filteredProducts, uniqueCategory, highestPrice, data }

}

