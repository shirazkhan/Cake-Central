import React from 'react';
import styled from 'styled-components';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    background-color: rgba(0,0,0,0.75);
    background-image: url("/Mehndi-Image.jpeg");
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    padding: 25px 0;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.75em;
    flex-direction: column;
    text-align: center;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
`;

const Title = styled.h3`
    margin: 0;
    color: white;
    font-size: 1.5em;
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-style: normal;
    line-height: 1.2em;
    width: 90%;

`;

const Text = styled.p`
    margin: 0;
    color: white;
    font-size: 0.65em;
    width: 90%;
`;

const Border = styled.span`
    height: 3px;
    width: 40%;
    border-top: 3px solid ${PRIMARY_THEME_COLOR};
    margin: 25px 0;
`;

export default function SectionBanner() {
    return (
        <>
            <Container>
                <Title>TRANSFORM YOUR SPECIAL DAY WITH HENNA CENTRAL</Title>
                <Border />
                <Text>
                    Let Sidra lead you through your Henna experience, from creating your design through to the after care of your henna to get the best possible results. It is truly an unique end to end experience.
                </Text>
            </Container>
        </>
    )
}
