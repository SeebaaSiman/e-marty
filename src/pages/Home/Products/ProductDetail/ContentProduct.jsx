import { styled } from "styled-components";
import { StarRating } from "../CardProduct/StarRating";
import { DiscountPrice } from "../CardProduct/DiscountPrice";

export const ContentProduct = ({ product }) => {
  return (
    <ContentContainer>
      <span>
        <h1> {product?.title}</h1>
        <StarRating rating={product?.rating} />
      </span>
      <DiscountPrice discount={product?.discountPercentage} />
      <span>
        <h4>Brand: {product?.brand}</h4>
        <h4>Description: {product?.description}</h4>
        <h4>In stock: {product?.stock}</h4>
      </span>
      <h2>$ {product?.price}</h2>
      <DiscountPrice discount={product?.discountPercentage} animation="left" />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  padding: 10px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* gap: 1rem; */
  h4 {
    margin-right: auto;
  }
`;
