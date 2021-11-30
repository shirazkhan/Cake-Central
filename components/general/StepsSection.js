import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-top: 3px solid white;
    background: #8c6900;
    width: 100%;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.75em;
    flex-direction: column;
    text-align: center;
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
                    <Image src = "shutterstock_1936291519.jpg" />
                    <StepTitle>Select Your Date</StepTitle>
                    <StepSubTitle>Fusce sed maximus est, et viverra mauris. Phasellus a lorem ipsum dolor cursus elit. Praesent varius sem id felis scelerisque vehicula.</StepSubTitle>
                </StepContainer>
            </Container>
        </>
    )
}
