import { useEffect } from "react";
import { styled } from "styled-components";
import { Banner } from "./Banner";
import { Products } from "./Products";
import { useBuying } from "@/hook/useContextProvider";

export const Home = () => {
  const { setInBuy } = useBuying();
  useEffect(() => {
    setInBuy(false);
  }, []);
  return (
    <HomeContainer>
      {/*  Este div en mobile lo hago reverse para que esté primero el carrito y después las promociones del banner */}
      <LayoutBanner>
        <Banner />
      </LayoutBanner>
      <LayoutProductos style={{ background: "lightblue" }}>
        Tenemos ADN argentino ....tienda de modaa.... Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quas asperiores soluta molestias, porro
        eligendi ab totam id odio magnam nisi aut pariatur esse adipisci nostrum
        dolore architecto sint corporis ipsam.
      </LayoutProductos>
      <LayoutProductos>
        <Products />
      </LayoutProductos>
    </HomeContainer>
  );
};
const HomeContainer = styled.main``;
const LayoutBanner = styled.div`
  width: 100%;
  /* height: 11rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4444;
`;

const LayoutProductos = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  padding: 1rem;
`;
