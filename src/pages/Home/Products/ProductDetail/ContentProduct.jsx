import { styled } from "styled-components";
import { StarRating } from "../CardProduct/StarRating";
import { DiscountPrice } from "../CardProduct/DiscountPrice";
import { ButtonAddCart } from "../../../../ui/styled-components/ButtonAddCart";
import { useCart } from "../../../../hook/useContextProvider";

export const ContentProduct = ({ product }) => {
  const { addToCart } = useCart();
  //Usé fx callback y no mandé directamente addToCart y clearSameProduct al evento onClick porque entraba en loop. Causaba que se intente actualizar el estado del contexto CartProvider mientras se está renderizando el componente
  const handleAddToCart = () => {
    addToCart(product);
  };
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
      <ContainerButton>
        <ButtonAddCart fn={handleAddToCart}>
          <h2>€ {product?.price}</h2>
        </ButtonAddCart>
      </ContainerButton>

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
const ContainerButton = styled.div`
  width: 80%;
  display: flex;
`;
