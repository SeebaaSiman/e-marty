import { createContext, useMemo } from "react";
import { useCartReducer } from "../store/cart/useCartReducer";
//*creo el contexto
export const CartContext = createContext();
//*Creo un proveedor para pasar values
export const CartProvider = ({ children }) => {
  //* las fx dispatch y el state de cartReducer las paso al proveedor para que toda la app se alimente
  const { state, clearCart, removeFromCart, addToCart, clearSameProduct } =
    useCartReducer();

  const totalPrice = useMemo(() => {
    const totalPriceArray = state.map((item) => item.price * item.quantity);
    return totalPriceArray.reduce(
      (total, elementPrice) => total + elementPrice,
      0
    );
  }, [state]);

  
  return (
    <CartContext.Provider
      value={{
        cartState: state,
        clearCart,
        removeFromCart,
        addToCart,
        clearSameProduct,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
//*Envuelve tu App con el CartProvider
// ReactDOM.render(
//  <React.StrictMode>
//    <CartProvider>
//      <App />
//    </CartProvider>
//  </React.StrictMode>,
//  document.getElementById("root")
