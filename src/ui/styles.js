import { css } from "styled-components";

export const GlassEffect = css`
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: #ffffff10;
`
export const NeonShadow = css`
 filter: drop-shadow(0px 0px 16px rgb(0, 247, 255));
 `
export const BoxShadow = css`
box-shadow: 5px 5px 15px #222;`
// background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
// rgb(0, 247, 255)
// box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;
// box-shadow: 0 0 110px #fff;

// box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; //* Sombra costado derecho

// ::after { //* luz de fondo con blur
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(315deg, #03a9f4, #ff0058);
//   filter: blur(30px);
// }


// @keyframes rotBGimg {
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// }
// .card::before {
//   content: '';
//   position: absolute;
//   width: 100px;
//   background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
//   height: 130%;
//   animation: rotBGimg 3s linear infinite;
//   transition: all 0.2s linear;
// }


// https://uiverse.io/dylanharriscameron/stupid-mole-90 //* Card (dos divs, el del fondo es una bola que va de esquina a esquina)