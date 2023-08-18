import { styled } from "styled-components";
import { CreditCard } from "./CreditCard";
import { FormCard } from "./FormCard";
import { useForm } from "@/hook/useForm";
import { useState } from "react";

export const Buying = () => {
  const { formState, handleInputChange } = useForm();
  const [isHover, setIsHover] = useState(false);
  return (
    <Container>
      <CreditCard formState={formState} isHover={isHover} />
      <FormCard
        formState={formState}
        handleInputChange={handleInputChange}
        isHover={isHover}
        setIsHover={setIsHover}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
