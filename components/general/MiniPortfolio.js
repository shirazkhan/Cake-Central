import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: linear-gradient(180deg, rgba(140,105,0,1) 0%, rgba(241,236,226,1) 100%);
    width: 100%;
    padding: 25px 0;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.75em;
    flex-direction: column;
    text-align: center;
`;

const PortfolioScrollContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 35px 0;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
        display: none;

    &:after {
        content: '';
        padding-right: 5%;
      }
`;

const ImageContainer = styled.img`
    background: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    width: 100%;
    min-width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5%;
    scroll-snap-align: center;

    &:last-child {
        margin-right: 0;
    }
`;

const Title = styled.h2`
    line-height: 1.25em;
    font-family: futura-pt,sans-serif;
    font-weight: 400;
    margin: 0;
    padding-bottom: 10px;
    color: white;
`;

const Text = styled.h2`
    line-height: 1.25em;
    font-family: futura-pt,sans-serif;
    font-weight: 400;
    margin: 0;
    padding-bottom: 10px;
    font-size: 0.65em;
    width: 90%;
    color: white;
`;

const Border = styled.span`
    height: 3px;
    width: 40%;
    border-top: 3px solid white;
    margin-top: 10px;
`;

const Button = styled.button`
    appearance: none;
    background-color: transparent;
    border: 1px solid #8c6900;
    border-radius: 40px;
    color: #8c6900;
    cursor: pointer;
    font-size: 0.6em;
    margin: 0;
    min-height: 50px;
    min-width: 0;
    outline: none;
    padding: 0 25px;
    text-align: center;
    text-decoration: none;
    
`;

export default function MiniPortfolio() {
    return (
        <>
            <Container>
                <Title>
                    Portfolio
                </Title>
                <Text>Don’t you just love seeing pictures of people looking ridiculously happy?</Text>

                <Border />
                <PortfolioScrollContainer>
                    <ImageContainer src = "https://ukbridalhenna.com/wp-content/uploads/2020/02/dark-mehndi-1.png" />
                    <ImageContainer src = "https://ukbridalhenna.com/wp-content/uploads/2020/02/dark-mehndi-1.png" />
                    <ImageContainer src = "https://ukbridalhenna.com/wp-content/uploads/2020/02/dark-mehndi-1.png" />
                    <ImageContainer src = "https://ukbridalhenna.com/wp-content/uploads/2020/02/dark-mehndi-1.png" />
                    <ImageContainer src = "https://ukbridalhenna.com/wp-content/uploads/2020/02/dark-mehndi-1.png" />
                    <ImageContainer src = "https://ukbridalhenna.com/wp-content/uploads/2020/02/dark-mehndi-1.png" />
                    <ImageContainer src = "https://ukbridalhenna.com/wp-content/uploads/2020/02/dark-mehndi-1.png" />
                    <ImageContainer src = "https://ukbridalhenna.com/wp-content/uploads/2020/02/dark-mehndi-1.png" />
                </PortfolioScrollContainer>
                <Button>See Full Portfolio</Button>
                </Container>
        </>
    )
}
