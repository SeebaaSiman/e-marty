import { styled } from "styled-components";

export const TextWithBgImg = ({ text, bgimg }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
const Container = styled.div`
  background-image: url(bgimg);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 72px;
  font-weight: bold;
`;
const Text = styled.h1``;
