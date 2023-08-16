import { keyframes, styled } from "styled-components";
import { useGravityEffect } from "@/hook/useGravityEffect";

export const ButtonGlowing = ({ fn, children, color, disabled = "" }) => {
  const buttonRef = useGravityEffect(); // Usa el hook y obtén la referencia

  return (
    <Glowing onClick={fn} color={color} ref={buttonRef} disabled={disabled}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </Glowing>
  );
};

const spanTop = keyframes`
 0%{
     left: -100%;
 }
 50%,100%{
     left: 100%;
 }`;
const spanRight = keyframes`
     0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }`;
const spanBottom = keyframes`
  0%{
        right: -100%;
    }
    50%,100%{
        right: 100%;
    }
    `;
const spanLeft = keyframes`
 0%{
   bottom: -100%;
    }
    50%,100%{
        bottom: 100%;
    }
    `;

const Glowing = styled.button`
  position: relative;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 10px 8px;
  color: ${(props) => props.color || "#03e9f4"};
  text-shadow: 1px 1px 1px ${(props) => props.color || "#03e9f4"};
  text-decoration: none;
  background-color: transparent;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 2px;
  overflow: hidden;

  &:hover {
    background: ${(props) => props.color || "#03e9f4"};
    color: #050801;
    box-shadow: 0 0 5px ${(props) => props.color || "#03e9f4"},
      0 0 25px ${(props) => props.color || "#03e9f4"},
      0 0 50px ${(props) => props.color || "#03e9f4"},
      0 0 200px ${(props) => props.color || "#03e9f4"};
    border-radius: 16px;
  }
  span {
    position: absolute;
    display: block;
    &:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent,
        ${(props) => props.color || "#03e9f4"}
      );
      animation: ${spanTop} 1s linear infinite;
    }
    &:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        180deg,
        transparent,
        ${(props) => props.color || "#03e9f4"}
      );
      animation: ${spanRight} 1s linear infinite;
      animation-delay: 0.25s;
    }
    &:nth-child(3) {
      bottom: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        270deg,
        transparent,
        ${(props) => props.color || "#03e9f4"}
      );
      animation: ${spanBottom} 1s linear infinite;
      animation-delay: 0.5s;
    }
    &:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(
        360deg,
        transparent,
        ${(props) => props.color || "#03e9f4"}
      );
      animation: ${spanLeft} 1s linear infinite;
      animation-delay: 0.75s;
    }
  }
`;
