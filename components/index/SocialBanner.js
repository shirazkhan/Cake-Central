import React from 'react';
import styled from 'styled-components';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    width: 100%;
    height: 500px;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: pink;

`;

const SocialName = styled.h4`
    margin: 20px;
    border: 1px solid pink;
    text-align: center;
    margin: 0;
    width: calc(100% - 40px);
`

const SocialQuote = styled.h5`
    margin: 20px;
    text-align: center;
    border: 1px solid red;
    margin: 0;
    width: calc(100% - 40px);
`;

const SocialIcons = styled.div`
    width: 100%;
    height: 75px;
    border: 1px solid green;
    width: calc(100% - 40px);
`;

const SocialContent = styled.div`
    border: 1px solid black;
    height: 200px;
    width: calc(100% - 40px);
`;

export default function SocialBanner(props) {
    

    return (
        <>
            <Container>
                <SocialName>@GranthamCakes</SocialName>
                <SocialQuote>Follow us for all the goings at HQ, new product launches and behind the scenes action.</SocialQuote>
                <SocialContent></SocialContent>
                <SocialIcons></SocialIcons>
            </Container>
        </>
    )
}
