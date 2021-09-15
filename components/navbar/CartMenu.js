import React, { useContext } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import { GlobalStateContext } from '../../pages/_app';

const Menu = styled(motion.div)`
    height: calc(100vh - 50px);
    width: 100%;
    top: 50px;
    position: absolute;
    background: rgba(255,255,255,1);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    overflow-y: scroll;
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
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition= {{ duration: 0.75}}
                    >
                        <h1>HELLO</h1>
                        <h1>HELLO</h1>
                        <h1>HELLO</h1>
                        <h1>HELLO</h1>
                    </Menu>
                </>
            )}
            </AnimatePresence>
    )
}
