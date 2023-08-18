const currentYear = new Date().getFullYear(); // obtengo el año actual
//* from(obj, fn iterable opcional)
export const yearsArray = Array.from(
 { length: 10 },
 (_, index) => currentYear + index
);