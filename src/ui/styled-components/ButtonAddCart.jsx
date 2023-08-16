import { useState } from "react";
import { keyframes, styled } from "styled-components";

export const ButtonAddCart = () => {
  const [clicked, setClicked] = useState(false);
  const ClickedButton = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };
  return (
    <Button
      className={`mycart-button ${clicked && "clicked"}`}
      onClick={ClickedButton}
    >
      <AddToCart className="add-to-cart">Add to cart</AddToCart>
      <Added className="added">Added</Added>
      <IconCart className="bx bxs-cart"></IconCart>
      <IconBitcoin className="bx bxl-bitcoin"></IconBitcoin>
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
const IconCart = styled.i`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: -10%;
  font-size: 2em;
  transform: translate(-50%, -50%);
`;
const IconBitcoin = styled.i`
  position: absolute;
  z-index: 3;
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
  font-size: 14px;
  position: relative;
  padding: 10px;
  width: 250px;
  height: 60px;
  background-color: #4834d4;
  border: 0;
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  transition: 0.3s ease-in-out;
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
  }
  &:active {
    transform: scale(0.9);
  }
  &.clicked {
    ${IconCart} {
      animation: ${cart} 1.5s ease-in-out forwards;
    }
    ${IconBitcoin} {
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
