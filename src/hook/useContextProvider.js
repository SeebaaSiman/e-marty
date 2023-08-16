import { useContext } from "react";
import { FiltersContext, CartContext } from "../context/";

export const useFilterContext = () => {
 const context = useContext(FiltersContext);
 if (context === undefined) {
  throw new Error("useFilterContext must be used within a FiltersProvider");
 }
 return context;
};

export const useCart = () => {
 const context = useContext(CartContext);
 if (context === undefined) {
  throw new Error("useCart must be used within a CartProvider");
 }
 return context;
};

//*En mis componentes llamo a useCart para traer el state global y dispatch, con el dispatch manejo las acciones
// const { state, dispatch } = useCart();

// Funciones para manejar acciones

// const addToCart = (product) => {
//  dispatch({ type: ActionTypes.ADD_TO_CART, payload: product });
// };

// const removeFromCart = (productId) => {
//  dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: productId });
// };
