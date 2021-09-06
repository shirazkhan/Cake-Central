import React, { useContext } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import { GlobalStateContext } from '../../pages/_app';

const Menu = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    top: calc(-100vh - -50px);
    position: absolute;
    background: #8c6900;
    backdrop-filter: blur(10px);
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
`;

const NavLink = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    padding-left: 10%;
    justify-content: flex-start;
    align-items: center;
`;

const Link = styled.a`

`;

export default function CartMenu() {

    const {globalState, dispatch} = useContext(GlobalStateContext);

    return (
        <AnimatePresence>
            {globalState.cartMenuOpen && (
                <>
                    <Menu
                        key="navMenu"
                        animate = {{ y: '100vh' }}
                        exit={{ y: '-100vh' }}
                        transition= {{ duration: 0.75}}
                    >
                    </Menu>
                </>
            )}
            </AnimatePresence>
    )
}
