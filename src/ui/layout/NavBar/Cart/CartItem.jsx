import { styled } from "styled-components";
import { useCart } from "@/hook/useContextProvider";
import { IconAdd, IconDrop, IconRemove } from "@/ui/icons";

export const CartItem = ({ product }) => {
  const { addToCart, removeFromCart, clearSameProduct } = useCart();
  const addCart = () => addToCart(product);
  const dropToCart = () => removeFromCart(product);
  const removeAll = () => clearSameProduct(product);

  const total = product.price * product.quantity;
  return (
    <Item>
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div>
        <span>€ {product.price} </span>
        {product.quantity > 1 && (
          <span>
            x{product.quantity} = € {total}
          </span>
        )}
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
    </Item>
  );
};
const Item = styled.li`
  border-radius: 20px;
  background-color: #fff;
  padding: 0.5rem;
  margin: 0.5rem;

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
  footer div {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: white;
    /* margin-top: 0.5rem; */
  }
  footer div button {
    color: black;
  }
  p {
    font-size: 1.1rem;
    color: black;
  }
`;
