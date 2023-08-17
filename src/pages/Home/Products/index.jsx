import { keyframes, styled } from "styled-components";
import { FilterProducts } from "./FilterProducts";
import { CardProduct } from "./CardProduct";
import { checkProductInCart } from "@/helpers/checkProductInCart";
import { apiData } from "@/api/api";
import { useCart, useFilterContext } from "@/hook/useContextProvider";
import { useLazyLoader } from "@/hook/useLazyLoader";
import { device } from "@/ui/StylesApp";
import { BoxShadow } from "@/ui/styles";
import { NoCardProduct } from "./CardProduct/NoCardProduct";

export const Products = () => {
  const { filteredProducts } = apiData();
  const { cartState } = useCart();
  const { setFilters } = useFilterContext();
  const { visibleProducts, loadMoreRef } = useLazyLoader();
  const resetFilters = () => {
    setFilters((prevState) => ({ ...prevState, minPrice: 0, category: "all" }));
  };

  return (
    <MainContainer>
      <FilterProducts />
      {filteredProducts && filteredProducts.length > 0 ? (
        <ul>
          {/*con slice creo una nueva matriz a partir de los productos visibles, luego con map itero esa matriz creada */}
          {filteredProducts?.slice(0, visibleProducts).map((product, index) => {
            const isProductIncart = checkProductInCart(product, cartState); // boolean si el producto está en el cartshop
            return (
              <CardProduct
                product={product}
                key={product?.id}
                isProductIncart={isProductIncart}
                delay={index * 0.2}
              />
            );
          })}
        </ul>
      ) : (
        <NoCardProduct fn={resetFilters} />
      )}
      {visibleProducts < filteredProducts?.length && (
        <LoadingRef ref={loadMoreRef}>Cargando...</LoadingRef>
      )}
    </MainContainer>
  );
};
const gradientAnimation = keyframes`
 0% {
    background-position: -400px 0;
  }

  100% {
    background-position: 400px 0;
  }
  `;
const LoadingRef = styled.div`
  width: 100%;
  padding: 0.5rem;
  background: #3a3a3a;
  border-radius: 16px;
  text-align: center;
  color: #f1f1f1;
  ${BoxShadow}
  margin: 20px 0;
  background-image: linear-gradient(
    to right,
    #3a3a3a 0%,
    #3f3f3f 10%,
    #4a4a4a 20%,
    #3f3f3f 30%,
    #3a3a3a 50%,
    #3a3a3a 100%
  );
  background-repeat: no-repeat;
  animation: ${gradientAnimation} 1s ease-in-out infinite;
`;
const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  @media ${device.md} {
    padding: 2rem;
  }
  @media ${device.lg} {
    padding: 3rem;
  }
`;
