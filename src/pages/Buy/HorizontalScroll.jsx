import { useState } from "react";
import { styled } from "styled-components";
import { BoxShadow } from "../../ui/styles";

export const HorizontalScroll = ({ children }) => {
  //* Agregarlo al BuyContext
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (scrollTo) => {
    const newPosition = Math.max(0, Math.min(scrollPosition + scrollTo, 100));
    setScrollPosition(newPosition);
  };
  return (
    <BuyPageContainer>
      <HorizontalScrollContainer
        style={{ transform: `translateX(-${scrollPosition}%)` }}
      >
        <Content bgColor="">
          {children[0]}
          <span onClick={() => handleScroll(50)}>→</span>
        </Content>
        <Content bgColor="">
          <span onClick={() => handleScroll(-50)}>←</span>
          {children[1]}
        </Content>
      </HorizontalScrollContainer>
    </BuyPageContainer>
  );
};
const BuyPageContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 80vh;
  padding: 1rem;
  /* background-color: black; */
  overflow: hidden;
  ${BoxShadow}
`;
const HorizontalScrollContainer = styled.div`
  display: flex;
  width: 200%; /* Cambia el ancho para la cantidad de contenido */
  scroll-behavior: smooth;
  /* background-color: aqua; */

  gap: 2rem;
  transition: transform 0.3s ease-in-out;
`;
const Content = styled.div`
  position: relative;
  width: 100vw; /* Cada contenido ocupa el viewport width */
  min-height: 80vh; /* Altura completa del viewport */
  scroll-snap-align: start;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
`;
