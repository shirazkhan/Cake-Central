import React from "react";
import { styled } from "styled-components";

const OptionContainer = styled.div`
    margin: 10px;
    font-size: 1.1em;
`;

const Label = styled.label`
    margin: 10px;
`;

const Select = styled.select`
    border-radius: 25px;
    font-size: 0.8em;
    padding: 10px 15px;
`;

export default function ProductOption({ name, values, selectedOptions, setSelectedOptions }) {
    const selectedValue = selectedOptions.find(opt => opt.name === name)?.value || values[0];
  
    return (
      <OptionContainer>
        <Label htmlFor={name}>{name}:</Label>
        <Select
          id={name}
          name={name}
          value={selectedValue}
          onChange={(e) => setSelectedOptions(e.target.value)}
        >
          {values.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </OptionContainer>
    );
  }
  