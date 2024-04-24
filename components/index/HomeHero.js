import React from 'react';
import styled from 'styled-components';
import { PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 170px);
    background-size: cover;
    background-image: url("/creamcheese.webp");
    text-align: center;
    border-bottom: 10px solid skyblue;
    margin-bottom: 20px;
`;

const SubContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
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
    
`;

const Caption = styled.h2`
    width: 90%;
    font-size: 3em;
    line-height: 1em;
    color: white;
    padding: 0;
    margin: 0 25px;
    text-shadow: 3px 5px 0px ${PRIMARY_THEME_COLOR};
    `;

export default function HomeHero(props) {
    

    return (
        <>
            <Container>
                <SubContainer src='/creamcheese.webp'>
                    <Caption>All Your Favourites Now Delivered!</Caption>
                    <Button>ORDER NOW</Button>
                </SubContainer>
            </Container>
        </>
    )
}
