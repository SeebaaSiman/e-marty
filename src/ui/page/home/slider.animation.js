import { keyframes } from "styled-components";

export const showInContent = keyframes`
from{
transform: translateY(-100%);
margin:20% ;
}
to{
  transform: translateY(0%);
}
`
export const showInBg = keyframes`
from{
transform: translateY(100%);
margin:20% ;
}
to{
  transform: translateY(0%);
}
`
export const showNext = keyframes`
0%{
  transform: translateY(0%);
}
25%{ transform: translateY(-180%);
  opacity:0;}
50%{opacity:0}
75%{
  opacity:0;
  transform: translateY(180%)
}
100%{
  transform: translateY(0%) ;
  opacity: 1;
}
`
export const showPrev = keyframes`
0%{
  transform: translateY(0%);
}
25%{ transform: translateY(180%);
  opacity:0;}
50%{opacity:0}
75%{
  opacity:0;
  transform: translateY(-180%)
}
100%{
  transform: translateY(0%) ;
  opacity: 1;
}
`