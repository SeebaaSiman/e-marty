// const scaleUpTopLeft = keyframes`
// 0% { transform: translateX(-48px); animation-timing-function: ease-in; opacity: 1; }
// 24% { opacity: 1; }
// 40% { transform: translateX(-26px); animation-timing-function: ease-in; }
// 65% { transform: translateX(-13px); animation-timing-function: ease-in; }
// 82% { transform: translateX(-6.5px); animation-timing-function: ease-in; }
// 93% { transform: translateX(-4px); animation-timing-function: ease-in; }
// 25%, 55%, 75%, 87%, 98% { transform: translateX(0); animation-timing-function: ease-out; }
// 100% { transform: translateX(0); animation-timing-function: ease-out; opacity: 1; }`;

import { keyframes } from "styled-components";



export const showLeft = keyframes`
0% { transform: translateX(-48px); animation-timing-function: ease-in; }
 40% { transform: translateX(-26px); animation-timing-function: ease-in; }
 65% { transform: translateX(-13px); animation-timing-function: ease-in; }
 82% { transform: translateX(-6.5px); animation-timing-function: ease-in; }
 93% { transform: translateX(-4px); animation-timing-function: ease-in; }

 25%, 55%, 75%, 87%, 100% { transform: translateX(0); animation-timing-function: ease-out; }`

export const showBag = keyframes`
 from{}
 to{}
 `
//* DiscountPrice
export const showDiscountLeft = keyframes`
to{
  transform: translateX(0%);
}
from{
  transform: translateX(100%);
}
`;
export const showDiscountRight = keyframes`
to{
  transform: translateX(0%);
}
from{
  transform: translateX(-100%);
}`;

/* animation: ${(props) =>props.animationDirection === "left"? `${showDiscountLeft}`: `${showDiscountRight}`} 5s linear infinite; */