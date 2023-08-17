import { useId } from "react";
import { styled } from "styled-components";
import { useFilters } from "@/hook/useFilters";
import { apiData } from "@/api/api";
import { BoxShadow, GlassEffect, NeonShadow } from "../../../ui/styles";

export const FilterProducts = () => {
  const { setFilters, filters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({ ...prevState, minPrice: event.target.value }));
  };
  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({ ...prevState, category: event.target.value }));
  };
  const { uniqueCategory, highestPrice } = apiData();
  return (
    <SectionContainer>
      <InputRange>
        <label htmlFor={minPriceFilterId}>Precios a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max={highestPrice}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>€{filters.minPrice}</span>
      </InputRange>

      <div>
        <CategoryLabel htmlFor={categoryFilterId}>
          Categoría:
          <p>{filters?.category}</p>
        </CategoryLabel>
        <BubbleOptions>
          <BubbleOptionLabel>
            <input
              type="radio"
              name="category"
              value="all"
              onChange={handleChangeCategory}
              checked={filters?.category === "all"}
            />
            Todas
          </BubbleOptionLabel>
          {uniqueCategory?.map((item, index) => (
            <BubbleOptionLabel key={index}>
              <input
                type="radio"
                name="category"
                value={item}
                onChange={handleChangeCategory}
                checked={filters?.category === item}
              />
              {item}
            </BubbleOptionLabel>
          ))}
        </BubbleOptions>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  width: 90%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 26px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  gap: 8px;
  ${NeonShadow}

  div {
    ${BoxShadow}
    padding: 0.5rem;
    border-radius: 26px;
  }
`;
const InputRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BubbleOptions = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const BubbleOptionLabel = styled.label`
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  text-transform: uppercase;
  ${BoxShadow}
  background-color: #e0e0e0;
  color: black;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    ${NeonShadow}
    font-size: 14px;
  }
  input[type="radio"] {
    display: none;
  }
`;
//  -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
const CategoryLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  p {
    margin: 4px;
    padding: 5px 10px;
    color: magenta;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 20px;
    background-color: #f1f1f1;
    ${NeonShadow}
    ${BoxShadow}
  }
`;
