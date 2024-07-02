import React from 'react';
import styled from 'styled-components';
import { DESKTOP_VIEW, PRIMARY_BANNER_COLOR } from '../GlobalVariables';
import { FaStar } from "react-icons/fa";


const Container = styled.div`
    width: 100%;
    height: 50px;
    background: ${PRIMARY_BANNER_COLOR};
    z-index: 1;
    position: relative;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-weight: 400;
    font-size: 1em;
    letter-spacing: .1em;

    ${DESKTOP_VIEW}{
        font-size: 1.3em;
        gap: 25px;
    }
`;

const Rating = styled.h4`
    margin: 0;
    padding: 0;
    font-weight: 400;
`;

const ReviewContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

const Google = styled.img`
    height: 23px;
`;

const Stars = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1px;
    margin-top: -3px;
    
    ${DESKTOP_VIEW}{
        gap: 3px;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const Phone = styled.p`
    margin: 0;
    padding: 0;
    letter-spacing: 0;
`;

const WhatsApp = styled.img`
    height: 40px;
`;

export default function WhatsappHeader(props) {
    

    return (
        <>
            <Container>
                <ReviewContainer>
                    <Rating>EXCELLENT</Rating>
                    <Google src='/logos/svg/google-logo.svg' />
                    <Stars>
                        <FaStar size={23} color='gold' />
                        <FaStar size={23} color='gold' />
                        <FaStar size={23} color='gold' />
                        <FaStar size={23} color='gold' />
                        <FaStar size={23} color='gold' />
                    </Stars>
                </ReviewContainer>
                <ContactContainer>
                    <WhatsApp src='/icons/whatsapp.svg' />
                    <Phone>079088 211919</Phone>
                </ContactContainer>
            </Container>
        </>
    )
}
