import { styled } from "styled-components";
import { NeonShadow } from "../styles";

export const InputLabel = ({ type, name, value, label, onChange, options }) => {
  return (
    <Wrapper>
      {type !== "button" ? (
        <Input
          required=""
          type={type}
          name={name}
          value={value}
          autoComplete="off"
          onChange={onChange}
        />
      ) : (
        <Select name={name} value={value} onChange={onChange}>
          {options?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
      )}

      <Label>{label}</Label>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
  color: #e8e8e8;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Input = styled.input`
  position: relative;
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: transparent;
  transition: border 150ms ease-in-out;

  &:focus {
    outline: none;
    color: #f5f5f5;
    border: 1.5px solid #1a73e8;
    ${NeonShadow}
  }
  &:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #212121;
    padding: 0 0.2em;
    color: #2196f3;
  }
`;
const Select = styled.select`
  position: relative;
  width: 100%;
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: transparent;
  padding: 1rem;
  font-size: 1rem;
  color: transparent;
  transition: border 150ms ease-in-out;
  &:focus {
    outline: none;
    color: #f5f5f5;
    border: 1.5px solid #1a73e8;
    ${NeonShadow}
  }
  &:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: #212121;
    padding: 0 0.2em;
    color: #2196f3;
  }
  option {
    background-color: #212121;
  }
`;
