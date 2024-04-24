import React, { useContext } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import { GlobalStateContext } from '../../pages/_app';
import { NAV_LINK_COLOR, NAV_MENU_COLOR, PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Menu = styled(motion.div)`
    height: calc(100vh - 50px);
    width: 100%;
    max-width: 275px;
    position: fixed;
    left: -275px;
    top: 50px;
    background: rgba(255,255,255);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    background: white;
    color: white;
    align-items: center;
    white-space: none;
    overflow: scroll;
    flex-wrap: nowrap;
`;

const NavLink = styled.div`
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background: ${NAV_LINK_COLOR};
`;

const Background = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50px;
    right: 0;
    z-index: 999;
    opacity: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(14px);
`;

const Link = styled.a`
    color: ${PRIMARY_THEME_COLOR};
    font-size: 1.3em;
    text-decoration: none;
    padding-left: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export default function NavMenu() {

    const {globalState, dispatch} = useContext(GlobalStateContext);

    return (
        <AnimatePresence>
            {globalState.navMenuOpen && (
                <>
                    <Menu
                        key="navMenu"
                        animate = {{ x: 275 }}
                        exit={{ x: -10 }}
                        transition= {{ type: 'ease', stiffness: 125}}
                    >
                        <NavLink>
                            <NextLink href = '/shop' as = '/shop' passHref>
                                <Link onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>Shop</Link>
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink href = '/account' as = '/account' passHref>
                                <Link onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>Account</Link>
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink href = '/latest-products' as = '/latest-products' passHref>
                                <Link onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>Latest Products</Link>
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink href = '/bridal-henna' as = '/bridal-henna' passHref>
                                <Link onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>Bridal Henna</Link>
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink href = '/articles' as = '/articles' passHref>
                                <Link onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>Articles</Link>
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink href = '/videos' as = '/videos' passHref>
                                <Link onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>Videos</Link>
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink href = '/about' as = '/about' passHref>
                                <Link onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>About</Link>
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink href = '/contact' as = '/contact' passHref>
                                <Link onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>Contact</Link>
                            </NextLink>
                        </NavLink>
                    </Menu>
                    <Background onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}
                        key="navMenuBackground"
                        animate = {{ opacity: 0.8 }}
                        transition={{duration: 0.75}}
                        exit={{ opacity: 0 }}
                    />
                </>
            )}
            </AnimatePresence>
    )
}
