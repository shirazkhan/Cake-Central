import React from 'react';
import styled from 'styled-components';
import { PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR } from '../../GlobalVariables';
import Image from 'next/image';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 170px);
    background-size: cover;
    text-align: center;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    object-fit: contain;
    overflow: hidden;
`;

const Button = styled.button`
    border: 4px solid white;
    background: ${PRIMARY_THEME_COLOR};
    font-size: 1em;
    font-weight: 700;
    height: 50px;
    color: white;
    width: 175px;
    bottom: 125px;
    position: absolute;
    top: 70%;
`;

const Caption = styled.h2`
    width: 90%;
    font-size: 3em;
    line-height: 1em;
    color: white;
    padding: 0;
    margin: 0 25px;
    text-shadow: 3px 5px 0px ${PRIMARY_THEME_COLOR};
    position: absolute;
    top: 30%;
    `;

export default function HomeHero(props) {
    

    return (
        <>
            <Container>
                <Image objectFit='cover' alt='hero' priority={true} fill src='/creamcheese.webp' />
                    <Caption>All Your Favourites Now Delivered!</Caption>
                    <Button>ORDER NOW</Button>
            </Container>
        </>
    )
}
