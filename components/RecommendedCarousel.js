import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { client } from '../apollo-client';
import { gql } from '@apollo/client';
import {GET_RECOMMENDED_PRODUCTS_BY_ID} from "../graphql/queries";

const Container = styled.div`
    margin-top: 25px;
    white-space: nowrap;
`;

const Title = styled.h4`
    margin: 10px 15px;
    padding: 0;
`;

const CardsContainer = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
      };
    
`;

const CardContainer = styled.div`
      height: 300px
      width: 300px;
      display: flex;
      flex-direction: column;
`;

const CardImage = styled(motion.div)`
    flex: none;
    height: 275px;
    margin: 0 15px;
    border: 1px solid green;
    width: 275px;
    border-radius: 10px;
    position: relative;
`;

const CardTitle = styled.h4`
    display: inline-block;
    padding: 0;
    margin: 0 20px;
    font-weight: 500;
`;

const CardPrice = styled.h5`
    display: inline-block;
    padding: 0;
    margin: 0 20px;
    font-weight: 500;
`;

const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
        <stop stop-color="#8c690010" offset="20%" />
        <stop stop-color="#edeef1" offset="50%" />
        <stop stop-color="#f6f7f8" offset="70%" />
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#FFFFFF" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const renderProducts = products => products.map(p =>
    <CardContainer>
        <CardImage>
            <Image
                layout = 'fill'
                placeholder = 'blur'
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                id = {p.imageId}
                src = {p.imageSrc}
                alt = {p.imageAltText}
            />
        </CardImage>
        <CardTitle>{p.title}</CardTitle>
        <CardPrice>£{p.price}</CardPrice>
    </CardContainer>
)

export default function RecommendedCarousel({title = 'You Might Also Like', id, products}) {
    return (
        <>
            <Container>
                <Title>{title.toUpperCase()}</Title>
                <CardsContainer>
                    {renderProducts(products)}
                </CardsContainer>
            </Container>
        </>
    )
}