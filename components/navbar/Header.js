import React, {useContext} from 'react';
import styled from 'styled-components';
import { DESKTOP_VIEW, NAV_FONT_COLOR, MOBILE_NAV_HEIGHT, PRIMARY_THEME_COLOR, MOBILE, DESKTOP_NAV_HEIGHT, DESKTOP_NAV_FIXED, DESKTOP_SCROLLED_NAV_HEIGHT } from '../../GlobalVariables';
import NavBar from './Navbar';
import { GlobalStateContext } from '../../pages/_app';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic'
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false
})

const Container = styled(motion.div)`
    grid-area: Header;
    color: ${NAV_FONT_COLOR};
    height: ${MOBILE_NAV_HEIGHT};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    background: ${PRIMARY_THEME_COLOR};
    box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;

    ${DESKTOP_VIEW}{
    position: ${DESKTOP_NAV_FIXED ? 'fixed' : 'absolute'};
    height: ${props => props.$scrollYProgress > 0.1 ? DESKTOP_SCROLLED_NAV_HEIGHT : DESKTOP_NAV_HEIGHT}
    }
`;

export default function Header(props) {
    
    const {globalState, dispatch} = useContext(GlobalStateContext);

    return (
        <>
            <MediaQuery minWidth={parseInt(MOBILE.replace('px',''))}>
                <Container
                    animate={{ height: globalState.scrollYProgress > 0.1
                        ? parseInt(DESKTOP_SCROLLED_NAV_HEIGHT.replace('px',''))
                        : DESKTOP_NAV_HEIGHT }}
                    $scrollYProgress = {globalState.scrollYProgress}
                    transition= {{ type: 'spring', stiffness: 75}}
                >
                    <NavBar />
                </Container>
            </MediaQuery>
        
            <MediaQuery maxWidth={parseInt(MOBILE.replace('px',''))}>
                <Container>
                    <NavBar />
                </Container>
            </MediaQuery>
        </>
    )
}
