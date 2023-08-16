import { useId, useMemo } from "react";
import { keyframes, styled } from "styled-components";
import { useCart } from "../../../../hook/useContextProvider";
import { device } from "../../../StylesApp";
import { IconShopBag } from "../../../icons";
import { CartItem } from "./CartItem";
import { BoxShadow, GlassEffect } from "../../../styles";

export const Cart = () => {
  const cartCheckboxId = useId();
  const { cartState } = useCart();

  const cartempity = cartState.length === 0;
  const totalPrice = useMemo(() => {
    const totalPriceArray = cartState.map((item) => item.price * item.quantity);
    return totalPriceArray.reduce(
      (total, elementPrice) => total + elementPrice,
      0
    );
  }, [cartState]);
  return (
    <>
      <CartButton htmlFor={cartCheckboxId} cartempity={cartempity}>
        <div>
          <IconShopBag />
        </div>
      </CartButton>
      <input type="checkbox" id={cartCheckboxId} hidden disabled={cartempity} />
      {!cartempity && (
        <CartContainer>
          <ul>
            {cartState.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </ul>
          <CartFooter>
            <span>TOTAL € {totalPrice}</span>
          </CartFooter>
        </CartContainer>
      )}
    </>
  );
};
const CartContainer = styled.aside`
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 8px 8px 8px;
  top: 0px;
  right: 0px;
  width: 60%;
  height: 100vh;
  ${GlassEffect}
  border-radius: 30px;

  @media ${device.sm} {
    width: 50%;
  }
  @media ${device.md} {
    width: 40%;
  }
  @media ${device.lg} {
    width: 30%;
  }
  @media ${device.xl} {
    width: 20%;
  }
  ul {
    border-radius: 30px;
    max-height: 60vh;
    list-style: none;
    overflow-y: scroll;
  }
  button {
    all: unset;
    color: black;
  }
`;

const CartButton = styled.label`
  width: 42px;
  height: 42px;
  padding: 5px;
  position: ${(props) => (props.cartempity ? "" : "fixed")};
  /* position: absolute; */
  top: 3px;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.cartempity ? "#4444" : " #09f")};
  border-radius: 9999px;
  z-index: 999;
  transition: all 0.3s ease;
  ${(props) => !props.cartempity && BoxShadow}

  /* &:hover {
    scale: 1.1;
  } */
  & ~ input:checked ~ ${CartContainer} {
    height: 100%;
    display: flex;
    z-index: 899;
  }
  div {
    position: relative;
  }
`;
const CartFooter = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
