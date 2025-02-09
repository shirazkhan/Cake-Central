import React from 'react';
import styled from 'styled-components';
import ProductOption from './ProductOption'; // You may not need this anymore, as buttons will replace it.
import Breadcrumbs from './core/Breadcrumbs';
import { DESKTOP_VIEW, PRIMARY_BUTTON_COLOR, SECONDARY_BUTTON_COLOR } from '../GlobalVariables';

const Container = styled.div`
  width: calc(100% - 20px);
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-size: 1.4em;
  margin: 0;
`;

const Price = styled.div`
  height: 25px;
  width: 100%;
  font-size: 1em;
  font-weight: 500;
`;

const OptionName = styled.h3`
  margin-left: 10px;
  font-size: 1em;
`;

const OptionButton = styled.button`
  background-color: white;
  border: 1px solid ${PRIMARY_BUTTON_COLOR}50;
  padding: 8px 16px;
  border-radius: 20px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${PRIMARY_BUTTON_COLOR}20;
  }

  &:active {
    background-color: ${PRIMARY_BUTTON_COLOR}50;
  }

  &.selected {
    background-color: ${PRIMARY_BUTTON_COLOR};
    color: white;
  }
`;

export default function ProductSpec({
  title,
  price,
  collection,
  options,
  selectedOptions,
  setSelectedOptions,
}) {
  // Handle the click of a button to select a variant option
  const handleOptionSelect = (optionName, optionValue) => {
    setSelectedOptions((prev) =>
      prev.map((option) =>
        option.name === optionName ? { ...option, value: optionValue } : option
      )
    );
  };

  return (
    <>
      <Container>
        <Breadcrumbs />
        <ProductTitle>{title}</ProductTitle>
        <Price>£{price}</Price>
      </Container>
      {/* Loop through options and create a button for each value */}
      {options[0].values[0] === 'Default Title' ? null : (
        options.map((option) => (
          <div key={option.name}>
            <OptionName>{option.name}:</OptionName>
            <div>
              {option.values.map((value) => (
                <OptionButton
                  key={value}
                  className={selectedOptions.some(
                    (selectedOption) =>
                      selectedOption.name === option.name &&
                      selectedOption.value === value
                  )
                    ? 'selected'
                    : ''}
                  onClick={() => handleOptionSelect(option.name, value)}
                >
                  {value}
                </OptionButton>
              ))}
            </div>
          </div>
        ))
      )}
    </>
  );
}
