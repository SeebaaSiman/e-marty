import { useEffect } from "react";
import { styled } from "styled-components";
import { monthsArray, yearsArray } from "@/helpers/";
import { InputLabel } from "@/ui/styled-components/InputLabel";
import { BoxShadow } from "../../../ui/styles";
export const FormCard = ({ formState, handleInputChange, setIsHover }) => {
  const { dni, numberCard, name, expiresMonth, expiresYear, securityCode } =
    formState;
  useEffect(() => {
    if (
      numberCard !== "" &&
      name !== "" &&
      expiresMonth !== "" &&
      expiresYear !== ""
    ) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  }, [numberCard, name, expiresMonth, expiresYear]);

  return (
    <Form>
      <InputLabel
        type={"number"}
        name={"dni"}
        value={dni}
        label={"D.N.I"}
        onChange={handleInputChange}
      />
      <InputLabel
        type={"number"}
        name={"numberCard"}
        value={numberCard}
        label={"Number card"}
        onChange={handleInputChange}
      />
      <InputLabel
        type={"text"}
        name={"name"}
        value={name}
        label={"Name"}
        onChange={handleInputChange}
      />
      <InputLabel
        type={"button"}
        name={"expiresMonth"}
        value={expiresMonth}
        label={"Expires month"}
        options={monthsArray}
        onChange={handleInputChange}
      />
      <InputLabel
        type={"button"}
        name={"expiresYear"}
        value={expiresYear}
        label={"Expires year"}
        options={yearsArray}
        onChange={handleInputChange}
      />
      <InputLabel
        type={"number"}
        name={"securityCode"}
        value={securityCode}
        label={"Security code"}
        onChange={handleInputChange}
      />
    </Form>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #333;
  border-radius: 1rem;
  ${BoxShadow}
`;
