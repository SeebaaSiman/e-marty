import { keyframes, styled } from "styled-components";

// Loader
export const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner></Spinner>
    </LoaderContainer>
  );
};
const LoaderContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const show = keyframes`
0%,50%{
  transform: translate(-50%, 0%) scale(1)
}
100%{
  transform: translate(-50%, -100%) scale(0)
}
`;

const Spinner = styled.span`
  display: block;
  width: 120px;
  height: 120px;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0%;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: ${(props) => props.theme.textColor};
    transform: translate(-50%, -100%) scale(0);
    animation: ${show} 2s infinite linear;
  }
  &::after {
    animation-delay: 1s;
  }
`;
