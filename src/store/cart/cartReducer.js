export const ActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_FROM_CART: "CLEAR_FROM_CART",
  CLEAR_SAME_PRODUCT: "CLEAR_SAME_PRODUCT"
};
export const cartInitialState = JSON.parse(window.localStorage.getItem("cart")) || []; //el estado inicial al recargar la página lo va a buscar al localStorage sino es un array vacío

//update localStorage with state for cart
export const updateLocalStorage = state => {
  window.localStorage.setItem("cart", JSON.stringify(state))
}
export const cartReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { id } = action.payload

      const productInCartIndex = state.findIndex(item => item.id === id);  // saber si el producto ya está en el carrito , devuelve el index del primer elemento que encuentra (-1 no está)

      if (productInCartIndex >= 0) { //si está en el carrito
        const updatedProduct = {// copio el elemento con el (x index) y a su quantity le +1
          ...state[productInCartIndex], // el elemento con x index
          quantity: state[productInCartIndex].quantity + 1 //le agrego a quantity
        };

        const newState = [
          ...state.slice(0, productInCartIndex),// se copian todos los elementos del arreglo state hasta justo antes de la posición del elemento que se desea actualizar (Sin incluir el elemento en productInCartIndex)
          updatedProduct, // Producto a agregar
          ...state.slice(productInCartIndex + 1) //se copian todos los elementos que están después del elemento hasta el final (productInCartIndex +1)
        ];
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...action.payload, // product
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const productIdToRemove = action.payload.id;
      let hasQuantity = false; // Bandera para indicar si hay quantity

      const newState = state.map(item => {
        if (item.id === productIdToRemove) {
          if (item.quantity > 1) {
            // Si hay más de 1 quantity, simplemente restamos 1 al quantity
            hasQuantity = true;
            return { ...item, quantity: item.quantity - 1 };
          } else {
            // Si hay solo 1 quantity, marcamos la bandera para eliminarlo del carrito
            hasQuantity = true;
            return null;
          }
        }
        return item;
      }).filter(item => item !== null); // Filtramos para eliminar el elemento con quantity 0

      // Si no se encontró el producto con el id indicado o no había quantity, no hacemos cambios en el estado
      if (!hasQuantity) {
        return state;
      }

      // Actualizamos el localStorage con el nuevo estado
      updateLocalStorage(newState);

      return newState;
    }


    case ActionTypes.CLEAR_FROM_CART: {
      updateLocalStorage([])
      return []
    }
    case ActionTypes.CLEAR_SAME_PRODUCT: {
      const { id } = action.payload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    default:
      return state;
  }
};

