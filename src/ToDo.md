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

crear loading de carga con efecto skeleton titilando , algo de neón sutil con poco height y que ocupe todo el width

Separar un componente que sea un div que recibe una animación y descuento para la animación del descuento, así lo puedo poner en diferentes lugares y no el componente con los dos divs y el precio central

contentProduct : envolver el price en un button add to cart
