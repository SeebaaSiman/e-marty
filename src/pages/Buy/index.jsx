import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useBuying } from "@/hook/useContextProvider";

import { HorizontalScroll } from "./HorizontalScroll";
import { BuyingList } from "./BuyingList";
import { Buying } from "./Buying";

export const Buy = () => {
  const { cartState, totalPrice } = useCart();
  const { setInBuy } = useBuying();
  const Navigate = useNavigate();
  const exitBuy = () => {
    setInBuy(false);
    Navigate("/");
  };
  useEffect(() => {
    setInBuy(true);
  }, []);

  return (
    <HorizontalScroll>
      <BuyingList
        cartState={cartState}
        totalPrice={totalPrice}
        exitBuy={exitBuy}
      />
      <Buying />
    </HorizontalScroll>
  );
};
