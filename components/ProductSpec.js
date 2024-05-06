import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductVariant from './ProductVariant';

const Container = styled.div`
    width: 100%;
    padding: 0 10px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

const ProductTitle = styled.h1`
    font-size: 1.2em;
    width: 100%;
    margin: 0;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
`;

const ProductType = styled.div`
    width: 100%;
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
    font-weight: 400;
`;

const Credit = styled.p`
    width: 100%;
    height: 30px;
    margin: 0;
    padding: 0;
    font-size: 0.8em;
    font-weight: 400;
`;

export default function ProductSpec({title, price, variants, selectedVariant, setSelectedVariant}) {
    return (
        <>
            <Container>
                <ProductType>Celebration Cakes</ProductType>
                <ProductTitle>{title}</ProductTitle>
                <Price>£{price}</Price>
                <Credit>Buy now, pay in 3 instalments with <span>Klarna</span></Credit>
            </Container>
            <ProductVariant variants = {variants} selectedVariant = {selectedVariant} setSelectedVariant = {setSelectedVariant}/>
        </>
    )
}
