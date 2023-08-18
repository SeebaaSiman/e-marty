import { Card, CardContainer } from "@/ui/page/buy/creditCard.style";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";

export const CreditCard = ({ formState, isHover }) => {
  return (
    <CardContainer>
      <Card isHover={isHover}>
        <CardFront formState={formState} />
        <CardBack formState={formState} />
      </Card>
      {/* <button onClick={onPress}>Press</button> */}
    </CardContainer>
  );
};
