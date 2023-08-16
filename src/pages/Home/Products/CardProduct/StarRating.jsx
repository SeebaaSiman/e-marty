import { styled } from "styled-components";
import { IconHalfStar, IconStar } from "../../../../ui/icons";
import { generateArray } from "../../../../helpers/generateArray";
// import { renderStars } from "../../../../helpers/renderStarts";

export const StarRating = ({ rating }) => {
  const arr = generateArray(rating); // array de puntaje
  return (
    <RatingContainer>
      {arr?.map((item, index) => {
        if (item >= 0.9) {
          return <IconStar key={index} />;
        } else if (item >= 0.4 && item <= 0.7) {
          return <IconHalfStar key={index} />;
        } else {
          return null;
        }
      })}
      <p>({rating})</p>
    </RatingContainer>
  );
};
const RatingContainer = styled.span`
  width: 90%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
