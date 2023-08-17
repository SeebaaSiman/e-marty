import { useState } from "react";
import { keyframes, styled } from "styled-components";
import { UilEuroCircle, UilShoppingCartAlt } from "@iconscout/react-unicons";
import { BoxShadow, NeonShadow } from "../styles";
export const ButtonAddCart = ({ children, fn }) => {
  const [clicked, setClicked] = useState(false);
  const ClickedButton = () => {
    fn();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <Button className={`${clicked && "clicked"}`} onClick={ClickedButton}>
      <AddToCart>{children}</AddToCart>

      <Added>Added</Added>

      <IconCart></IconCart>
      <IconEuro></IconEuro>
    </Button>
  );
};
const cart = keyframes`
	0% {
		left: -10%;
	}
	40%, 60% {
		left: 50%;
	}
	100% {
		left: 110%;
	}`;
const box = keyframes`
0%, 40% {
		top: -20%;
	}
	60% {
		top: 40%;
		left: 52%;
	}
	100% {
		top: 40%;
		left: 112%;
	}`;
const txt1 = keyframes`
  0% {
		opacity: 1;
	}
	20%, 100% {
		opacity: 0;
	}`;
const txt2 = keyframes`	0%, 80% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}`;
const IconCart = styled(UilShoppingCartAlt)`
  position: absolute;
  color: #000000;
  z-index: 300;
  top: 50%;
  left: -10%;
  font-size: 2em;
  transform: translate(-50%, -50%);
`;
const IconEuro = styled(UilEuroCircle)`
  position: absolute;
  z-index: 200;
  color: #f8de22;
  top: -20%;
  left: 52%;
  font-size: 1.2em;
  transform: translate(-50%, -50%);
`;
const AddToCart = styled.span`
  opacity: 1;
`;
const Added = styled.span`
  opacity: 0;
`;
const Button = styled.button`
  position: relative;
  font-size: 14px;
  padding: 10px;
  width: 250px;
  height: 60px;
  background-color: transparent;
  /* background-color: #4834d4; */
  ${BoxShadow}
  border: 0;
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  transition: 0.4s ease-in-out;
  span {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    font-size: 1.2em;
    color: #fff;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background-color: #35269b;
    ${NeonShadow}
  }
  &:active {
    transform: scale(0.9);
  }
  &.clicked {
    ${IconCart} {
      animation: ${cart} 1.5s ease-in-out forwards;
    }
    ${IconEuro} {
      animation: ${box} 1.5s ease-in-out forwards;
    }
    ${AddToCart} {
      animation: ${txt1} 1.5s ease-in-out forwards;
    }
    ${Added} {
      animation: ${txt2} 1.5s ease-in-out forwards;
    }
  }
`;
