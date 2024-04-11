import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//margin-top should be 25px
const Container = styled.div`
    white-space: nowrap;
    padding-bottom: 25px;
    overflow: hidden;
`;

const Title = styled.h3`
    margin: 0px 15px;
    padding: 0;
    font-size: 1.5em;
    color: pink;
    text-shadow: 1px 1px 1px lightgrey;
`;

const SubTitle = styled.h4`
    margin: 0 15px;
    padding: 0;
    font-size: 0.9em;
`;

const CardsContainer = styled.div`
    display: flex;
    width: 100%;
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
    height: 495px;
    width: 315px;
    display: flex;
    flex-direction: column;
    margin: 15px;
    flex-shrink: 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 3px 14px 0px rgba(0,0,0,0.75);
`;

const CardImage = styled.img`
    height: 100%;
    object-fit: cover;
`;

const CardInfo = styled.div`
    height: 180px;
    width: 100%;
    z-index: 333;
    position: relative;
    margin-top: -180px;
    backdrop-filter: blur(10px);
    background: rgba(0,0,0,0.25);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const CardInfoTitle = styled.h3`
    color: white;
    width: 90%;
    margin: 15px auto;
`;

const CardInfoDescription = styled.div`
    color: white;
    margin: 15px 20px;
    font-size: 0.85em;
    display: block;
    white-space: normal;
    line-height: 23px;
`;

const CardInfoLink = styled.div`
    color: white;
    width: 90%;
    margin: 15px auto;
`;

const renderCards = () =>
      [...Array(5)].map((a,b) =>
        <CardContainer key={b}>
            <CardImage src = '/misc-plates.jpg' />
            <CardInfo>
                <CardInfoTitle>HENNA PLATES</CardInfoTitle>
                <CardInfoDescription>Take your brow game to the next level! Try our digital brow tool to help you find the perfect version of your brows</CardInfoDescription>
                <CardInfoLink></CardInfoLink>
            </CardInfo>
        </CardContainer>
  )

export default function ShopCarousel({title,subtitle}) {
    return (
        <>
            <Container>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <CardsContainer>
                    {renderCards()}
                </CardsContainer>
            </Container>
        </>
    )
}
