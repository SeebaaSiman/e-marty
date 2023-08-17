import { useId, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useBuying } from "@/hook/useContextProvider";
import { IconShopBag } from "@/ui/icons";
import { CartItem } from "./CartItem";
import { CartButton, CartContainer, CartFooter } from "./cart.style";

export const Cart = () => {
  const Navigation = useNavigate();
  const cartCheckboxId = useId();
  const { cartState, totalPrice } = useCart();

  const cartempity = cartState.length === 0;

  const { setInBuy, inBuy } = useBuying();
  const onBuy = () => {
    setInBuy(true);
    Navigation("/Buy");
  };
  return (
    <>
      <CartButton htmlFor={cartCheckboxId} cartempity={cartempity}>
        <div>
          <IconShopBag />
        </div>
      </CartButton>
      <input
        type="checkbox"
        id={cartCheckboxId}
        hidden
        disabled={cartempity && inBuy}
      />
      {!cartempity && !inBuy && (
        <CartContainer>
          <ul>
            {cartState.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </ul>
          <CartFooter>
            <h3>TOTAL € {totalPrice}</h3>
            <span onClick={onBuy}>Buy</span>
          </CartFooter>
        </CartContainer>
      )}
    </>
  );
};
