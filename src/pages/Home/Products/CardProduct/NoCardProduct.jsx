import { styled } from "styled-components";
import { ButtonGlowing } from "@/ui/styled-components/ButtonGlowing";
import { BoxShadow } from "@/ui/styles";

export const NoCardProduct = ({ fn }) => {
  return (
    <Container>
      <p>No hay productos que coincidan con estos filtros.</p>
      <div>
        <ButtonGlowing fn={fn}>Reiniciar filtros</ButtonGlowing>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 80%;
  height: 300px;
  text-align: center;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 16px;
  font-size: 1.1rem;
  ${BoxShadow}
  div {
    width: 100%;
  }
`;
