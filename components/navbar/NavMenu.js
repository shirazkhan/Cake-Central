import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { GlobalStateContext } from '../../pages/_app';
import { DESKTOP_LINK_COLOR, DESKTOP_LINK_HEIGHT, DESKTOP_NAV_BACKGROUND_COLOR, DESKTOP_NAV_FIXED, DESKTOP_NAV_HEIGHT, DESKTOP_SCROLLED_NAV_HEIGHT, MOBILE, MOBILE_NAV_HEIGHT, NAV_LINK_COLOR, NAV_MENU_COLOR, PRIMARY_THEME_COLOR, WEBSITE_WIDTH } from '../../GlobalVariables';

const Menu = styled(motion.div)`
    height: calc(100vh - 50px);
    width: 100%;
    max-width: 275px;
    position: fixed;
    left: -275px;
    top: ${MOBILE_NAV_HEIGHT};
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    background: white;
    color: white;
    align-items: center;
    white-space: none;
    overflow: scroll;
    flex-wrap: nowrap;

    @media (min-width:${MOBILE}){
        top: ${DESKTOP_NAV_HEIGHT};
        left: 0;
        max-width: none;
        padding-top: 0;
        flex-direction: row;
        overflow: none;
        align-items: center;
        justify-content: center;
        height: ${DESKTOP_LINK_HEIGHT};
        gap: 30px;
        width: 100%;
        box-shadow: 0px 0px 12px -6px rgba(0,0,0,0.8);
        background: ${DESKTOP_NAV_BACKGROUND_COLOR};
        position: ${DESKTOP_NAV_FIXED ? 'fixed' : 'absolute'};
      }
`;

const NavLink = styled.div`
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    background: ${NAV_LINK_COLOR};

    @media (min-width:${MOBILE}){
        justify-content: center;
        min-height: ${DESKTOP_LINK_HEIGHT};
        flex-shrink: 0;
        font-size: 1em;
        font-weight: 600;
        line-height: 1.2em;
        text-align: center;
        background: none;
        color: white;
      }
`;

const Background = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50px;
    right: 0;
    z-index: 8;
    opacity: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(14px);

    @media (min-width:${MOBILE}){
        display: none;
      }
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

    @media (min-width:${MOBILE}){
        padding-left: 0;
        color: ${DESKTOP_LINK_COLOR};
        background: none;
      }
`;

export default function NavMenu() {

    const {globalState, dispatch} = useContext(GlobalStateContext);
    const isDesktop = useMediaQuery({ query: `(min-width:${MOBILE})` });

    useEffect(() => {
        if (isDesktop) {
            dispatch({ type: 'NAV_MENU_ON' });
        } else if(!isDesktop){
            dispatch({ type: 'NAV_MENU_OFF'})
        }
    }, [isDesktop]);


    return (
        <AnimatePresence>
            {globalState.navMenuOpen && (
                <>
                    <Menu
                        key="navMenu"
                        animate = {{
                            x: isDesktop ? 0 : 275,
                            y: globalState.scrollYProgress > 0.1 && isDesktop
                            ? -parseInt(DESKTOP_SCROLLED_NAV_HEIGHT.replace('px',''))
                            : 0 }}
                        exit={{ x: -10 }}
                        transition= {{ type: 'spring', stiffness: 75, x: { type: 'tween' }}}
                    >
                        <NavLink>
                            <NextLink onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})} href = '/shop' as = '/shop' >
                                Cakes
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})} href = '/account' as = '/account' >
                                Cupcakes
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})} href = '/latest-products' as = '/latest-products' >
                                Brownies
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})} href = '/bridal-henna' as = '/bridal-henna' >
                                Cookies
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})} href = '/articles' as = '/articles' >
                                Milk Cakes
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})} href = '/videos' as = '/videos' >
                                Weddings
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})} href = '/about' as = '/about' >
                                Birthdays
                            </NextLink>
                        </NavLink>
                        <NavLink>
                            <NextLink onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})} href = '/contact' as = '/contact'>
                                More
                            </NextLink>
                        </NavLink>
                    </Menu>
                    { !isDesktop ? 
                        <Background onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}
                        key="navMenuBackground"
                        animate = {{ opacity: 0.8 }}
                        transition={{duration: 0.75}}
                        exit={{ opacity: 0 }}
                    />
                    : ''}
                </>
            )}
            </AnimatePresence>
    )
}
