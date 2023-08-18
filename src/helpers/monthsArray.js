//*array.from (obj iterable, fn iterable opcional)

//.toString() convierte un valor a cadena de texto o string
//padStart() se utiliza para rellenar una cadena con un valor especificado hasta que alcance una longitud determinada.

export const monthsArray = Array.from({ length: 12 }, (_, index) =>
 (index + 1).toString().padStart(2, "0")
);