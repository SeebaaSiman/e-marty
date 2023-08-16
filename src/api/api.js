import { useFetch } from "../hook/useFetch";
import { useFilters } from "../hook/useFilters";


export const BASE_URL = `https://fakestoreapi.com/products`;

//* Nueva api
export const BASE_URL2 = `https://dummyjson.com/products?limit=0`;

// export const BASE_URL2 = `https://dummyjson.com/products`;
export const ALL_CATEGORIES = `https://dummyjson.com/products/categories`


export const apiData = () => {
 const { data } = useFetch(BASE_URL2)
 const products = data?.products;

 const { data: uniqueCategory } = useFetch(ALL_CATEGORIES)

 const { filterElement } = useFilters();
 const filteredProducts = filterElement(products);

 const depur2 = products?.map((item) => item.price); //Extraigo en un arr los precios
 const highestPrice = depur2 && Math.max(...depur2); // Busco el valor más alto

 return { filteredProducts, uniqueCategory, highestPrice, data,products }
}
//* Objeto de un producto
const oneProduct = {
 brand: "YIOSI",
 category: "lighting",
 description: "Crystal chandelier maria theresa for 12 light",
 discountPercentage: 16,
 id: 100,
 images: [
  "https://i.dummyjson.com/data/products/100/1.jpg",
  "https://i.dummyjson.com/data/products/100/2.jpg",
  "https://i.dummyjson.com/data/products/100/3.jpg",
  "https://i.dummyjson.com/data/products/100/thumbnail.jpg"
 ],
 price: 47,
 rating: 4.74,
 stock: 133,
 thumbnail: "https://i.dummyjson.com/data/products/100/thumbnail.jpg",
 title: "Crystal chandelier maria theresa for 12 light"
}