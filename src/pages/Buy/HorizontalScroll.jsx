import { useState } from "react";
import { styled } from "styled-components";
import { BoxShadow } from "../../ui/styles";
import { ButtonGlowing } from "../../ui/styled-components/ButtonGlowing";

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
          <ButtonGlowing fn={() => handleScroll(50)}>Next →</ButtonGlowing>
          {children[0]}
        </Content>
        <Content bgColor="">
          <ButtonGlowing fn={() => handleScroll(-50)}>← Back</ButtonGlowing>
          {children[1]}
        </Content>
      </HorizontalScrollContainer>
    </BuyPageContainer>
  );
};
const BuyPageContainer = styled.div`
  position: relative;
  height: 100%;
  ${BoxShadow}
`;
const HorizontalScrollContainer = styled.div`
  display: flex;
  width: 200%; /* Cambia el ancho para la cantidad de contenido */
  scroll-behavior: smooth;
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
  justify-content: start;
  align-items: center;
`;
