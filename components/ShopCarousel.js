import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRIMARY_THEME_COLOR } from '../GlobalVariables';

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
    height: 345px;
    width: 315px;
    display: flex;
    flex-direction: column;
    margin: 15px;
    flex-shrink: 0;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    
`;

const CardImage = styled.img`
    height: 100%;
    object-fit: cover;
`;

const CardInfo = styled.div`
    height: 120px;
    width: 100%;
    z-index: 333;
    position: relative;
    margin-top: -120px;
    backdrop-filter: blur(10px);
    background: rgba(255,192,203,0.6);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-shadow: 2px 2px 5px grey;
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

const EndCard = styled.div`
    height: 140px;
    width: 140px;
    color: white;
    background: ${PRIMARY_THEME_COLOR};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px;
    flex-shrink: 0;
    border-radius: 200px;
    overflow: hidden;
    text-shadow: 2px 2px 5px grey;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const EndPiece = styled.div`
    height: 1px;
    width: 1px;
    margin: 15px;
    flex-shrink: 0;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export default function ShopCarousel({data, title, subtitle, handle, cardType, endCard}) {

    const renderCards = () =>
      data.map((node,b) =>
        <Link href={`/shop/${node.handle}/`}>
            <CardContainer key={b}>
                <CardImage src = {`/${node.img}`} />
                <CardInfo>
                    <CardInfoTitle>{node.title}</CardInfoTitle>
                    <CardInfoDescription>{node.description}</CardInfoDescription>
                    <CardInfoLink></CardInfoLink>
                </CardInfo>
            </CardContainer>
        </Link>
  )
  
    return (
        <>
            <Container>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <CardsContainer>
                    {renderCards()}
                    <EndCard>Shop More</EndCard>
                    <EndPiece />
                </CardsContainer>
            </Container>
        </>
    )
}
