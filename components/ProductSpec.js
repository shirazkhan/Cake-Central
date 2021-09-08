import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
    width: 95%;
    height: 150px;

    display: flex;
    margin: 0 auto;
    flex-direction: column;
`;

const ProductTitleContainer = styled.div`
    width: 100%;

    height: 50px;
    display: flex;
    flex-direction: row;
`;

const ProductTitle = styled.h1`
    font-size: 1.125rem;
    line-height: 1.125rem;

    width: 80%;
    padding: 0;
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
`;

const Price = styled.div`
    height: 25px;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
`;

export default function ProductSpec({title, price}) {
    return (
        <>
            <Container>
                <ProductType>
                    PLATES
                </ProductType>
                <ProductTitleContainer>
                    <ProductTitle>Farah Designer Charger Plate</ProductTitle>
                    <Icon src = '/share.svg' />
                </ProductTitleContainer>
                <Price>
                    £{price}
                </Price>
            </Container>
        </>
    )
}
