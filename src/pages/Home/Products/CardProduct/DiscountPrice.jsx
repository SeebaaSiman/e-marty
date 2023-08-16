import { css, styled } from "styled-components";
import { IconDiscount } from "@/ui/icons";
import { showDiscountLeft, showDiscountRight } from "@/ui/animations";

export const DiscountPrice = ({ discount, animation }) => {
  return (
    <DiscountContainer animationDirection={animation}>
      <h4>
        Descuento {Math.floor(discount)}% <IconDiscount size={"1rem"} />
      </h4>
      <h4>
        Descuento {Math.floor(discount)}% <IconDiscount size={"1rem"} />
      </h4>
      <h4>
        Descuento {Math.floor(discount)}% <IconDiscount size={"1rem"} />
      </h4>
      <h4>
        Descuento {Math.floor(discount)}% <IconDiscount size={"1rem"} />
      </h4>
      <h4>
        Descuento {Math.floor(discount)}% <IconDiscount size={"1rem"} />
      </h4>
    </DiscountContainer>
  );
};

const DiscountContainer = styled.span`
  width: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  filter: drop-shadow(0px 0px 3px #ff0058);
  h4 {
    animation: ${(props) =>
        props.animationDirection === "left"
          ? css`
              ${showDiscountLeft}
            `
          : css`
              ${showDiscountRight}
            `}
      5s linear infinite;
  }
`;
