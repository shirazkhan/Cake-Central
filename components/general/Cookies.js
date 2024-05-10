import React from 'react';
import { styled } from 'styled-components';
import { DESKTOP_VIEW, MOBILE, PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR } from '../../GlobalVariables';


const CookieContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: ${PRIMARY_THEME_COLOR};
    z-index: 99999999;
    font-size: 0.75em;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: white;
    gap: 10px;
    text-shadow: 0px 0px 1px grey;

    ${DESKTOP_VIEW}{
        font-size: 0.9em;
        height: 70px;
    }
`;

const MainText = styled.p`
    padding: 0;
    margin: 0;
    text-align: center;
    width: 70%;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    ${DESKTOP_VIEW}{
        flex-direction: row;
    }
`;

const AcceptButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 30px;
    background: ${SECONDARY_THEME_COLOR};
    color: white;
    font-weight: 800;
    border: 2px solid white;
`;

const DeclineButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 30px;
    background: black;
    color: white;
    font-weight: 600;
    border: none;
`;

export default function Cookies(props) {
    

    return (
        <>
            <CookieContainer>
                <MainText>Cake Central uses cookies to enhance your browsing experience, analyze site traffic, and serve better user experiences. By continuing to use this site, you consent to our use of cookies. Learn more in our cookie policy</MainText>
                <ButtonContainer>
                    <AcceptButton>Accept all</AcceptButton>
                    <DeclineButton>Reject all</DeclineButton>
                </ButtonContainer>
            </CookieContainer>
        </>
    )
}
