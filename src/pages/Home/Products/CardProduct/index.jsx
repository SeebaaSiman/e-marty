import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { IconCartShop, IconCartShopp } from "../../../../ui/icons";
import { useCart } from "@/hook/useContextProvider";
import { showLeft } from "@/ui/animations";
import { device } from "@/ui/StylesApp";
import { NeonShadow, BoxShadow } from "@/ui/styles";
import { StarRating } from "./StarRating";
import { DiscountPrice } from "./DiscountPrice";

export const CardProduct = ({ product, isProductIncart }) => {
  const { addToCart, clearSameProduct } = useCart();
  //Usé fx callback y no mandé directamente addToCart y clearSameProduct al evento onClick porque entraba en loop. Causaba que se intente actualizar el estado del contexto CartProvider mientras se está renderizando el componente
  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    clearSameProduct(product);
  };
  return (
    <Item>
      <DiscountPrice discount={product.discountPercentage} animation="left" />
      <StarRating rating={product.rating} />
      <span></span>
      <img src={product.thumbnail} alt={product.title} />
      <span>
        <strong>
          {product.title} ({product.brand})
        </strong>
      </span>
      <h2>€{product?.price}</h2>
      <DiscountPrice discount={product.discountPercentage} animation="rigth" />

      <div>
        <Link to={`/product/${product.id}-${product.title}`}>
          <button>More info...</button>
        </Link>

        <button
          style={{ backgroundColor: isProductIncart ? "red" : "#09f" }}
          onClick={isProductIncart ? handleRemoveFromCart : handleAddToCart}
        >
          {isProductIncart ? <IconCartShop /> : <IconCartShopp />}
        </button>
      </div>
    </Item>
  );
};

const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
  z-index: 200;
  ${NeonShadow}
  transition: all 0.4s ease-in-out;

  img {
    border-radius: 30px;
    width: 100%;
  }
  div {
    position: absolute;
    top: 40%;
    left: 50%;
    right: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media ${device.sm} {
    }
    @media ${device.md} {
    }
    @media ${device.lg} {
    }
    @media ${device.xl} {
    }
  }
  div button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 2px 10px;
    height: 4rem;
    width: 7.5rem;
    border-radius: 16px;
    font-size: 1rem;
    &:hover {
      ${NeonShadow}
      scale: 0.9;
    }
  }
  span {
    margin: 5px;
  }
  &:hover {
    transform: perspective(250px) rotateX(10deg) translateY(-5%) translateZ(0);
    background-color: transparent;
    filter: drop-shadow(0px 0px 0px transparent);
    span {
      opacity: 0;
    }
    div {
      opacity: 1;
    }
    div button {
      animation: ${showLeft} 1s ease-in-out;
    }
    img {
      filter: blur(2px);
      transform: translateY(10%);
      ${BoxShadow}
    }
    h2 {
      text-shadow: 1px 2px 3px;
      text-align: center;
      transform: translateY(-15%) scale(1.2);
    }
  }
`;
