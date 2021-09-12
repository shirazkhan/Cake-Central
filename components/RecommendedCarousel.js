import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'

const Container = styled.div`
    margin-top: 25px;
    white-space: nowrap;
`;

const Title = styled.h4`
    margin: 10px 15px;
    padding: 0;
`;

const CardsContainer = styled.div`
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

const CardContainer = styled(Link)`
      height: 300px
      width: 300px;
      display: flex;
      flex-direction: column;
`;

const CardImage = styled.div`
    flex: none;
    height: 275px;
    margin: 0 15px;
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

const renderProducts = products => products.map((p,i) =>
    <CardContainer
        key = {p.imageId}
        href = {`/shop/${p.productType}/${p.handle}`}
    >
        <a>
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
        </a>
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