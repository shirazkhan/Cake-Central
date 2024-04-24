import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled.div`
    background: #8c6900;
    text-align: center;
    border-radius: 8px;
    padding: 8px 12px;
    color: white;
    width: 80%;
    font-size: 1.1em;
    margin-top: 50px;
    box-sizing: border-box;
    cursor: pointer;
`;

const Container = styled.div`
    z-index: 15;
    background-image: url("/shutterstock_1936291519.jpg");
    background-color: rgba(0,0,0,0.5);
    background-blend-mode: overlay;
    background-size: 325%;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
`;

const HeroButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly ;
    align-items: center;
    width: 100%;
    max-width: 100vw;
`;

const Div = styled.div`
    height: 550px;
    max-width: 100%;
    overflow: hidden;
    position: relative;
`;

const HeroTitle = styled.h2`
    font-family: 'Mrs Saint Delafield', cursive;
    color: white;
    font-size: 4em;
    font-weight: 400;
    margin: 0 auto;
    padding: 0;
`;

const HeroSubTitle = styled.h3`
    color: white;
    font-size: 0.75em;
    font-family: futura-pt, sans-serif;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 5px;
    margin: 0 auto;
    text-align: center;
`;

const HeroLogoContainer = styled.div`
    border: 1px solid white;
    padding: 40px 15px 0px 15px;
    margin-bottom: 30px;
`;

const HeroSlogan = styled.h3`
    color: white;
    font-size: 0.75em;
    font-family: futura-pt, sans-serif;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 1px;
    margin: 0 auto 30px auto;
    text-align: center;
`;

export default function HeroVideo() {
    return <>
        <Div>
                <Container>
                    <HeroLogoContainer>
                        <HeroTitle>Bridal Mehndi</HeroTitle>
                        <HeroSubTitle>BY SIDRA KHAN</HeroSubTitle>
                    </HeroLogoContainer>
                    <HeroSlogan>Book Your Bridal Experience With Us!</HeroSlogan>
                    <HeroButtonContainer>
                        <Button>Set Appointment</Button>
                    </HeroButtonContainer>
                </Container>
        </Div>
    </>
}
