import { css, styled } from "styled-components";
import { UilPricetagAlt, UilStarHalfAlt, UilStar, UilEuro, UilTimesCircle, UilPlusCircle, UilMinusCircle, UilShoppingCartAlt, UilShoppingCart, UilShoppingBag, UilTrashAlt } from "@iconscout/react-unicons";
import { NeonShadow } from "./styles";
//*style
const styleNavbar = css`
filter:  drop-shadow(1px 1px 1px #3333);
  /* margin-right: 0.5rem; */
  height: 100%;
  &:hover{
    scale:1.2;
  }
  `;
const styleStar = css`
  filter:  drop-shadow(1px 1px 1px #3333);
  color: #F8DE22;
    `
//*size
export const sizeIconFullScreen = `3rem`;
//* Cart
export const IconCartShopp = styled(UilShoppingCartAlt)`
${styleNavbar}
`
export const IconCartShop = styled(UilShoppingCart)`
${styleNavbar}
`
export const IconShopBag = styled(UilShoppingBag)`
${styleNavbar}
&:hover{
    scale:1;
  }
`
export const IconTrash = styled(UilTrashAlt)`
/* color:white; */
${styleNavbar}
`
export const IconAdd = styled(UilPlusCircle)`
${styleNavbar}
`
export const IconDrop = styled(UilMinusCircle)`
${styleNavbar}
`
export const IconRemove = styled(UilTimesCircle)`
${styleNavbar}
`


export const IconEuro = styled(UilEuro)`
/* ${styleNavbar} */
`

export const IconStar = styled(UilStar)`
${styleStar}
`
export const IconHalfStar = styled(UilStarHalfAlt)`
${styleStar}
`

export const IconDiscount = styled(UilPricetagAlt)`
/* filter:  drop-shadow(0px 0px 16px #ff0058); */
color:#ff0058;
`

