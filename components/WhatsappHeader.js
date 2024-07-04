import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlobalStateContext } from '../pages/_app';
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
    justify-content: space-evenly;
    align-items: center;
    gap: 0;
    font-weight: 400;
    font-size: 1.3em;
    letter-spacing: .1em;

    ${DESKTOP_VIEW}{
        gap: 25px;
        justify-content: center;
    }
`;

const Rating = styled.h4`
    margin: 0;
    padding: 0;
    font-weight: 400;
    padding-right: 5px;
`;

const ReviewContainer = styled.div`
    display: flex;
    gap: 5px;
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
    gap: 3px;
    margin-top: -3px;
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
    display: none;

    ${DESKTOP_VIEW}{
        display: inline;
    }
`;

const WhatsApp = styled(motion.img)`
    height: 40px;
    cursor: pointer;
`;

const hoverEffect = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
  };

const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/+447768672154';
}

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
                    <WhatsApp 
                    alt="WhatsApp" 
                    initial="initial" 
                    whileHover="hover" 
                    variants={hoverEffect} 
                    onClick={() => handleWhatsAppClick()} src='/icons/whatsapp.svg' />
                    <Phone>07768 672154</Phone>
                </ContactContainer>
            </Container>
        </>
    )
}
