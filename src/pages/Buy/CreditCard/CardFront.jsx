import {
  CardFrontContainer,
  Header,
  Title,
} from "@/ui/page/buy/creditCard.style";
import { LogoMastercard } from "@/assets/svg/LogoMastercard";
import { Chip, Wifi } from "@/assets/svg";
export const CardFront = ({ formState }) => {
  const { numberCard, name, expiresMonth, expiresYear } = formState;

  return (
    <CardFrontContainer>
      <span>Credit card - mastercard</span>
      <Header>
        <span>
          <Chip />
          <Wifi />
        </span>
        <LogoMastercard />
      </Header>
      {numberCard ? (
        <p>{numberCard.substring(0, 22)}</p>
      ) : (
        <p>Número de tarjeta</p>
      )}

      <Header>
        <div>
          <Title>Card holder</Title>
          {name ? <span>{name.substring(0, 17)}</span> : <span>full name</span>}
        </div>
        <div>
          <Title>expires</Title>
          <span>
            {expiresMonth || "MM"} / {expiresYear||"YY"}
          </span>
        </div>
      </Header>
      <span></span>
    </CardFrontContainer>
  );
};
