export const checkProductInCart = (product, cartState) => {
 return cartState.some((item) => item.id === product.id);
};