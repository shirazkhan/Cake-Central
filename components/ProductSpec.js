import React from 'react';
import styled from 'styled-components';
import ProductOption from './ProductOption';

const Container = styled.div`
    width: calc(100% - 20px);
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

const ProductTitle = styled.h1`
    font-size: 1.2em;
    margin: 0;
`;

const Price = styled.div`
    height: 25px;
    width: 100%;
    font-size: 1em;
    font-weight: 500;
`;

export default function ProductSpec({ title, price, collection, options, selectedOptions, setSelectedOptions }) {
  return (
    <>
      <Container>
        <ProductTitle>{title}</ProductTitle>
        <Price>£{price}</Price>
      </Container>
      {options[0].values[0] === "Default Title" ? null : options.map(o => (
        <ProductOption
          key={o.name}
          name={o.name}
          values={o.values}
          selectedOptions={selectedOptions}
          setSelectedOptions={(value) => setSelectedOptions((prev) =>
            prev.map(option =>
              option.name === o.name ? { ...option, value } : option
            )
          )}
        />
      ))}
    </>
  );
}
