import { LogoMastercard } from "@/assets/svg/LogoMastercard";
import {
  CardBackContainer,
  Trip,
  TripBg,
  TripBg2,
} from "@/ui/page/buy/creditCard.style";

export const CardBack = ({ formState }) => {
  return (
    <CardBackContainer>
      <Trip></Trip>
      <span>
        <TripBg></TripBg>
        <TripBg2>{formState.securityCode || "***"}</TripBg2>
      </span>
      <LogoMastercard />
    </CardBackContainer>
  );
};
