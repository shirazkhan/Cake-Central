import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #8c690050;
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

const Title = styled.h3`
    margin: 0;
    color: black;
    font-size: 1.5em;
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.2em;
    width: 90%;
`;

const SubTitle = styled.p`
    margin: 0;
    color: black;
    font-size: 0.65em;
    width: 90%;
`;

export default function SectionBannerWithImage() {
    return (
        <>
            <Container>
                <Title>Select a date</Title>
                <SubTitle>Donec eros scelerisque feugiat neque eu bibendum volutpat fringilla venenatis</SubTitle>
            </Container>
        </>
    )
}
