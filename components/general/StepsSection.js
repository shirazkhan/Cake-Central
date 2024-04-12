import React from 'react';
import styled from 'styled-components';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    background: ${PRIMARY_THEME_COLOR};
    width: 100%;
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
    font-size: 1.3em;
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-style: normal;
    line-height: 1em;
    width: 90%;
    padding: 50px 0;
`;

const SubTitle = styled.p`
    margin: 0;
    color: black;
    font-size: 0.65em;
    width: 90%;
`;

const StepContainer = styled.div`
    width: 100%;
    color: ${prop => prop.fontColor || "white"};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1em;
    flex-direction: column;
    text-align: center;
`;

const StepTitle = styled.h3`
    margin: 0;
    font-size: 1em;
    text-align: start;
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-style: normal;
    width: 80%;
    padding: 50px 0 25px 0;
`;

const StepSubTitle = styled.p`
    margin: 0;
    font-size: 0.65em;
    width: 80%;
    text-align: start;
    padding-bottom: 50px;
`;

const Image = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    height: 500px;
    background-image: url("/${props => props.src}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export default function StepsSection() {
    return (
        <>
            <Container>
                <Title>Your Bridal Experience In 3 Easy Steps</Title>
                <StepContainer>
                    <Image src = "Mehndi-Image2.jpg" />
                    <StepTitle>Select Your Date</StepTitle>
                    <StepSubTitle>Fusce sed maximus est, et viverra mauris. Phasellus a lorem ipsum dolor cursus elit. Praesent varius sem id felis scelerisque vehicula.</StepSubTitle>
                </StepContainer>
                <StepContainer>
                    <Image src = "shutterstock_1467119858.jpg" />
                    <StepTitle>Choose Your Package</StepTitle>
                    <StepSubTitle>We have a range of bridal packages for all budgets and styles. We also cater for complete bespoke designs, so feel free to give us your creative input as well.</StepSubTitle>
                </StepContainer>
                <StepContainer>
                    <Image src = "AdobeStock_197647853.jpeg" />
                    <StepTitle>Select Your Date</StepTitle>
                    <StepSubTitle>Fusce sed maximus est, et viverra mauris. Phasellus a lorem ipsum dolor cursus elit. Praesent varius sem id felis scelerisque vehicula.</StepSubTitle>
                </StepContainer>
            </Container>
        </>
    )
}
