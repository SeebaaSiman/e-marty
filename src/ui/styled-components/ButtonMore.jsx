import { styled } from "styled-components";

export const ButtonMore = () => {
  return (
    <Button type="button" class="button">
      <Text class="button__text">Add Item</Text>
      <Icon class="button__icon"></Icon>
    </Button>
  );
};
const Text = styled.span`
  transform: translateX(25px);
  color: #dedede;
  font-weight: 600;
  transition: all 0.3s;
`;
const Icon = styled.span`
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;
const Button = styled.button`
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid #dedede;
  box-shadow: 4px 4px #dedede;
  background-color: #323232;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s; //* poner en todos los span

  &:hover {
    background: #323232;
  }
  &:hover ${Text} {
    color: transparent;
  }

  &:hover ${Icon} {
    width: 148px;
    transform: translateX(0);
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px #dedede;
  }
`;
