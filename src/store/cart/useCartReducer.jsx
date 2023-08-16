import { useReducer } from "react";
import { ActionTypes, cartInitialState, cartReducer } from "./cartReducer";

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: productId });
  };

  const clearSameProduct = (productId) => {
    dispatch({ type: ActionTypes.CLEAR_SAME_PRODUCT, payload: productId });
  };
  const clearCart = () => dispatch({ type: ActionTypes.CLEAR_FROM_CART });
  return { state, addToCart, removeFromCart, clearCart, clearSameProduct };
};
