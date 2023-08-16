import { styled } from "styled-components";
import { showInBg, showInContent, showNext, showPrev } from "./slider.animation";
//*Slider
export const SliderContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
  z-index: 300;
  `;
export const ControlContainer = styled.div`
      position: absolute;
      bottom: 2%;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 300;
    `;
export const BgColor = styled.div`
    width: 55vw;
    height: 100vh;
    background-size: cover;
  background-color: blue;
  animation: ${showInBg} 1s ease-in-out;
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;
color:black;
gap:1rem;
.next{
  animation: ${showNext} 1s ease-in-out;
}
.prev{
  animation: ${showPrev} 1s ease-in-out;
}
  img{
    width:100%;
    object-fit: cover;
  }
  `;
export const SliderContent = styled.div`
  width: 45vw;
  height: 100vh;
  overflow: hidden;
  z-index: 300;
  background-color: green;
  animation: ${showInContent} 1s ease-in-out;
`;
