import React from "react";
import { styled } from "styled-components";

const Label = styled.label`

`;

const Select = styled.select`

`;

export default function ProductOption({ name, values, selectedOptions, setSelectedOptions }) {
    return (
      <div>
        <Label htmlFor={name}>{name}</Label>
        <Select
          id={name}
          name={name}
          value={selectedOptions}
          onChange={(e) => setSelectedOptions(e.target.value)}
        >
          <option value="" disabled>
            Select {name}
          </option>
          {values.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </div>
    );
  }
  