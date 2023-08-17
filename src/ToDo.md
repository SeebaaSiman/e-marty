configuración vite
favicom index.html
hook pestaña de chrome
hook darktheme
hook fetch
global styled components
animations.
icons.
buttons.
cards.
carpeta views
carpeta layout en ui
pages carpeta

efecto con css al hacer scroll home

crear elemento que es un navbar de configuraciones que recibe un children, hace un map de children en donde cada children está en un span y hace efecto con dilay de aparecer desde izquierda como un bloque gris y luego blanco por ejemplo. De esta manera es re utilizable

procurar minimalismo. Colores pasteles. Buscar un boxStyle y mantenerlo, ejemplo neón

// RESET CARRITO
const { cartState, clearCart } = useCart();
const onReset = () => {
clearCart();
};
<button onClick={onReset}>

<p>
Reset <IconTrash />
</p>
</button>
