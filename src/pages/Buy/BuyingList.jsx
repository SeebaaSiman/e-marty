import { styled } from "styled-components";
import { CartFooter } from "@/ui/layout/NavBar/Cart/cart.style";
import { CartItem } from "@/ui/layout/NavBar/Cart/CartItem";
import { device } from "../../ui/StylesApp";
export const BuyingList = ({ cartState, totalPrice, exitBuy }) => {
  return (
    <BuyPage>
      <ul>
        {cartState?.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
      </ul>
      <CartFooter>
        <h3>TOTAL € {totalPrice}</h3>
        <span onClick={exitBuy}>Volver</span>
      </CartFooter>
    </BuyPage>
  );
};
const BuyPage = styled.div`
  width: 100%;

  @media ${device.sm} {
    width: 90%;
  }
  @media ${device.md} {
    width: 80%;
  }
`;
