import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from './core/Breadcrumbs';
import { DESKTOP_VIEW, PRIMARY_BUTTON_COLOR, SECONDARY_BUTTON_COLOR } from '../GlobalVariables';
import MessageInput from './core/MessageInput';
import DatePicker from './core/DatePicker';

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

const OptionContainer = styled.div`
  margin: 20px 10px;
`;

const OptionName = styled.label`
  font-size: 1.1em;
  font-weight: 500;
`;

const OptionButton = styled.button`
  background-color: white;
  color: black;
  font-size: 1em;
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
  collection,
  variants,  // Add this
  options,
  selectedOptions,
  setSelectedOptions,
  customMessage,
  setCustomMessage,
  date,
  setDate,
  allowDate,
  allowMessage,
  advancedNotice
}) {

  // Handle the click of a button to select a variant option
  const handleOptionSelect = (optionName, optionValue) => {
    setSelectedOptions((prev) =>
      prev.map((option) =>
        option.name === optionName ? { ...option, value: optionValue } : option
      )
    );
  };

  // Find the selected variant based on the selected options
  const selectedVariant = variants.find(variant =>
    selectedOptions.every(sel =>
      variant.selectedOptions.some(opt => sel.name === opt.name && sel.value === opt.value)
    )
  );

  return (
    <>
      <Container>
        <Breadcrumbs />
        <ProductTitle>{title}</ProductTitle>
        <Price>£{selectedVariant ? selectedVariant.price : 'N/A'}</Price> {/* Use dynamically computed price */}
      </Container>
      {options[0].values[0] === 'Default Title' ? null : (
        options.map((option) => (
          <OptionContainer key={option.name}>
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
          </OptionContainer>
        ))
      )}
      {JSON.parse(allowDate) ? <DatePicker date={date} setDate={setDate} advancedNotice={advancedNotice} /> : ''}
      {JSON.parse(allowMessage) ? <MessageInput customMessage={customMessage} setCustomMessage={setCustomMessage} /> : ''}
    </>
  );
}