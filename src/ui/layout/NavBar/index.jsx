import { styled } from "styled-components";
import { Cart } from "./Cart";
import { BoxShadow } from "../../styles";

export const NavBar = () => {
  return (
    <NavBarContainer>
      E-MartY LayoutNavBar
      <Cart />
    </NavBarContainer>
  );
};
const NavBarContainer = styled.nav`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  border-radius: 16px;
  margin: 8px 0;
  ${BoxShadow}
`;
//* Usar NavLInk para usar el active
