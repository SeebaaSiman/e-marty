import { styled } from "styled-components";
import { useCart, useBuying } from "@/hook/useContextProvider";
import { IconAdd, IconDrop, IconRemove } from "@/ui/icons";
import { BoxShadow } from "@/ui/styles";

export const CartItem = ({ product }) => {
  const { addToCart, removeFromCart, clearSameProduct } = useCart();
  const addCart = () => addToCart(product);
  const dropToCart = () => removeFromCart(product);
  const removeAll = () => clearSameProduct(product);
  const { inBuy } = useBuying();
  const total = product.price * product.quantity;

  return (
    <Item>
      <CartContainer>
        <div>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div>
          <span>
            <strong>
              € {product.price}
              {product.quantity > 1 && (
                <>
                  x{product.quantity} = € {total}
                </>
              )}
            </strong>
          </span>
        </div>
        <footer>
          <div>
            <button onClick={dropToCart}>
              <IconDrop />
            </button>
            <p>Qty:{product.quantity}</p>
            <button onClick={addCart}>
              <IconAdd />
            </button>
          </div>
          <div>
            {product.quantity > 1 && (
              <button onClick={removeAll}>
                <IconRemove />
              </button>
            )}
          </div>
        </footer>
      </CartContainer>
      {inBuy && (
        <BuyContainer>
          <h2>{product.title}</h2>
          <h3>{product.brand}</h3>
          <h4>In Stock:{product.stock}</h4>
          <h4>Discount: {Math.floor(product.discountPercentage)}%</h4>
          <h1>€ {total}</h1>
        </BuyContainer>
      )}
    </Item>
  );
};
const Item = styled.li`
  border-radius: 20px;
  background-color: #fff;
  padding: 0.5rem;
  margin: 0.5rem;
  ${BoxShadow}
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`;
const CartContainer = styled.div`
  flex: 1;
  img {
    width: 50%;
    /* aspect-ratio: 16/9; */
    border-radius: 20px;
  }
  div {
    /* margin-top: 1rem; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div span {
    margin: 5px 0;
    padding: 5px 10px;
    ${BoxShadow}
    border-radius: 8px;
  }
  footer div {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: white;
    /* margin-top: 0.5rem; */
  }
  footer div p {
    margin: 5px 0;
    padding: 5px 10px;
    ${BoxShadow}
    border-radius: 8px;
  }
  footer div button {
    color: black;
  }
  p {
    font-size: 1.1rem;
    color: black;
  }
`;
const BuyContainer = styled.div`
  flex: 1;
  padding: 5px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  h3,
  h4 {
    text-align: center;
  }
  h1 {
    text-align: end;
    text-shadow: 1px 2px 3px;
  }
`;
