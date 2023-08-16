import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

export const useLazyLoader = () => {
 const [visibleProducts, setVisibleProducts] = useState(20); // productos iniciales
 const [loading, setLoading] = useState(false);

 // Cargar más productos al hacer scroll
 const loadMoreProducts = () => {
  setLoading(true);
  setTimeout(() => {
   setVisibleProducts((prevVisible) => prevVisible + 20); // Agregar 20 más
   setLoading(false);
  }, 1000); // Simular retraso en la carga
 };

 const loadMoreRef = useRef(); // Ref para el elemento de carga
 const isIntersecting = useIntersectionObserver(loadMoreRef, {
  threshold: 0.5,
 }); // Usar el hook de IntersectionObserver

 useEffect(() => {
  if (isIntersecting && !loading) {
   loadMoreProducts();
  }
 }, [isIntersecting, loading]);
 return { visibleProducts, loadMoreRef }
}

//* funcionamiento: visibleProducts controla cuántos productos se deben mostrar actualmente e isIntersecting (observador) detecta cuando se llega al ref que observa (el loader), al llegar dispara la carga de más productos al aumentar el state de visibleProducts
{/* <MainContainer>
 <FilterProducts />
 <ul>
  {filteredProducts?.slice(0, visibleProducts).map((product) => {
   const isProductIncart = checkProductInCart(product, cartState); // boolean si el producto está en el cartshop
   return (
    <CardProduct
     product={product}
     key={product.id}
     isProductIncart={isProductIncart}
    />
   );
  })}
 </ul>
 {visibleProducts < filteredProducts?.length && (
  <LoadingRef ref={loadMoreRef}>Cargando...</LoadingRef>
 )}
</MainContainer> */}