import { useState } from "react";
import { styled } from "styled-components";

export const CreditCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <CardContainer className="card-container">
        <Card className="card">
          <CardFront className="card-front">Front Side</CardFront>

          <CardBack className="card-back">
            <div>
              <label>Card Number</label>
              <input type="text" placeholder="**** **** **** ****" />
            </div>
            <div>
              <label>Expiration Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div>
              <label>CVC</label>
              <input type="text" placeholder="123" />
            </div>
          </CardBack>
        </Card>
      </CardContainer>
      <button>Press</button>
    </>
  );
};
const CardContainer = styled.div`
  perspective: 1000px;
  background-color: transparent;
  width: 240px;
  height: 154px;
  color: white;
  position: relative;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  &:hover {
    transform: rotateY(180deg);
  }
`;
const CardStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardFront = styled(CardStyle)`
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`;
const CardBack = styled(CardStyle)`
  background-color: #e74c3c;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
`;
