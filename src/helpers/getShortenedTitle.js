export function getShortenedTitle(title) {

 // Limpiar el título para que solo contenga caracteres válidos
 const cleanedTitle = title.replace(/[^\w\s]/gi, '');

 // Reemplazar los signos de porcentaje (%) por guiones (-)
 const titleWithHyphens = cleanedTitle.replace(/%/g, '-');

 // Obtener los primeros 15 caracteres del título modificado
 const shortenedTitle = titleWithHyphens.slice(0, 15);

 return shortenedTitle;
}
