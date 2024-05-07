import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DESKTOP_LINK_HEIGHT, DESKTOP_NAV_HEIGHT, DESKTOP_VIEW, MOBILE_NAV_HEIGHT, NAV_BAR_COLOR, PRIMARY_THEME_COLOR } from '../../GlobalVariables';
import { AnimatePresence, motion, useAnimate, useAnimation } from 'framer-motion';

const Container = styled.div`
    height: 60px;
    width: 100%;
    background: ${PRIMARY_THEME_COLOR}20;
    color: black;
    display: flex;
    margin: 0;
    color: black;
    position: relative;
    top: ${MOBILE_NAV_HEIGHT};
    z-index: 3;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.8);
    ${DESKTOP_VIEW}{
        top: calc(${DESKTOP_LINK_HEIGHT} + ${DESKTOP_NAV_HEIGHT});
    }
`;

const Message = styled(motion.div)`
    font-weight: 600;
`;

export default function AnnouncementBanner(props) {

    const messages = [
        <Message>Hey1</Message>,
        <Message>Hey2</Message>,
        <Message>Hey3</Message>
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentMessageIndex(prevIndex =>
            prevIndex === messages.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <Container>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentMessageIndex}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 25 }}
                        transition={{ duration: 0.5 }}
                        >
                        {messages[currentMessageIndex]}
                    </motion.div>
                </AnimatePresence>
            </Container>
        </>
    )
}
