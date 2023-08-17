import { styled } from "styled-components";
import { BoxShadow, GlassEffect, NeonShadow } from "@/ui/styles";
import { device } from "@/ui/StylesApp";

export const CartContainer = styled.aside`
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px;
  top: 0px;
  right: 0px;
  width: 60%;
  height: 100vh;
  ${GlassEffect}
  border-radius: 30px;

  @media ${device.sm} {
    width: 50%;
  }
  @media ${device.md} {
    width: 40%;
  }
  @media {device.lg} {
    width: 30%;
  }
  @media {device.xl} {
    width: 20%;
  }
  ul {
    border-radius: 30px;
    /* margin-top: 1rem; */
    max-height: 70vh;
    list-style: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
  }
  button {
    all: unset;
    color: black;
  }
`;

export const CartButton = styled.label`
  width: 42px;
  height: 42px;
  padding: 5px;
  position: {(props) => (props.cartempity ? "" : "fixed")};
  top: 3px;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: {(props) => (props.cartempity ? "#4444" : " #09f")};
  border-radius: 9999px;
  z-index: 999;
  transition: all 0.3s ease;
  ${(props) => !props.cartempity && BoxShadow}

  &:hover {
    scale: 1.1;
  }
  & ~ input:checked ~ ${CartContainer} {
    height: 100%;
    display: flex;
    z-index: 899;
  }
  div {
    position: relative;
  }
`;
export const CartFooter = styled.div`
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    list-style: none;
    width: 60%;
    padding: 10px;
    background-color: white;
    border-radius: 16px;
    margin: 1rem;
    text-align: center;
    cursor: pointer;
    text-shadow: 1px 2px 3px;
    ${NeonShadow};
    &:hover {
      transform: scale(1.1);
    }
  }
  h3 {
    text-shadow: 1px 2px 3px;
  }
`;
