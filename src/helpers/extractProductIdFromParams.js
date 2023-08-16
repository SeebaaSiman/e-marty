export function extractProductIdFromParams(str) {

 const dashIndex = str.indexOf('-'); // obtengo el index del guión

 if (dashIndex !== -1) { // si existe
  return str.substring(0, dashIndex); //extraer una parte de una cadena desde el 0 hasta el dashIndex
 }

 return null; // No se encontró el guión, no se puede extraer el product id
}