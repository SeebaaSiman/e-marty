// import { IconHalfStar, IconStar } from "../ui/icons";

export const generateArray = (number) => {

  const integerPart = Math.floor(number);
  const decimalPart = (number - integerPart).toFixed(2)
  //*Array.from(iterable, mapFn)
  const array = Array.from(
    { length: integerPart }, // Iterable será un obj con la fx length (que será la cantidad de elementos del nuevo array)
    (_, index) => index + 1); // hago un map sin usar el valor del elemento (_) pero uso el index para a cada lugar agregarle 1 (de esta manera el primer lugar 0 tendrá el valor 1...)
  array.push(decimalPart); // al final agrego la parte decimal

  return array;
};

    // const fullStars = Math.floor(rating); // 4
    // const decimalPart = (rating - fullStars).toFixed(2); // 0,
    // const hasHalfStar = decimalPart >= 0.25 && decimalPart <= 0.75;
    // const otherStart = decimalPart > 0.76;
    // const stars = [];