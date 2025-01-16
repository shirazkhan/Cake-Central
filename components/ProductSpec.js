import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductVariant from './ProductVariant';
import Link from 'next/link';
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

const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

const ProductType = styled(Link)`
    width: 25%;
    height: 25px;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.92px;
    text-transform: uppercase;
`;

const Price = styled.div`
    height: 25px;
    width: 100%;
    font-size: 1em;
    font-weight: 500;
`;

const Credit = styled.p`
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0;
    font-size: 0.8em;
    font-weight: 400;
`;

export default function ProductSpec({title, price, variants, selectedOptions, setSelectedOptions, collection, options,}) {

    return (
        <>
            <Container>
                <ProductType href={`/shop/${collection.handle}`}>{collection.title}</ProductType>
                <ProductTitle>{title}</ProductTitle>
                <Price>£{price}</Price>
            </Container>
            {/* <ProductVariant variants = {variants} selectedVariant = {selectedVariant} setSelectedVariant = {setSelectedVariant}/> */}
            {options[0].values[0] === "Default Title" ? null : options.map(o => (
  <ProductOption
    key={o.name}
    name={o.name}
    values={o.values}
    selectedOptions={selectedOptions}
    setSelectedOptions={(value) => setSelectedOptions((prev) => 
      prev.map((option) =>
        option.name === o.name ? { ...option, value } : option
      )
    )}
  />
))}

        </>
    )
}
