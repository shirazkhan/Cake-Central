import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { GlobalStateContext } from '../../pages/_app';
import { DESKTOP_VIEW, DESKTOP_LINK_COLOR, DESKTOP_LINK_HEIGHT, DESKTOP_NAV_BACKGROUND_COLOR, DESKTOP_NAV_FIXED, DESKTOP_NAV_HEIGHT, DESKTOP_SCROLLED_NAV_HEIGHT, MOBILE, MOBILE_NAV_HEIGHT, NAV_LINK_COLOR, NAV_MENU_COLOR, PRIMARY_THEME_COLOR, WEBSITE_WIDTH, PRIMARY_BANNER_COLOR } from '../../GlobalVariables';

const Menu = styled(motion.div)`
    height: calc(100vh - 50px);
    width: 100%;
    max-width: 275px;
    position: fixed;
    left: -275px;
    top: ${MOBILE_NAV_HEIGHT};
    z-index: 8;
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    background: white;
    color: white;
    align-items: center;
    white-space: none;
    overflow: scroll;
    flex-wrap: nowrap;

    ${DESKTOP_VIEW}{
        top: ${DESKTOP_NAV_HEIGHT};
        left: 0;
        max-width: none;
        padding-top: 0;
        flex-direction: row;
        overflow: hidden;
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
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    background: ${NAV_LINK_COLOR};
    a:link, a:visited {
        color: black;
    }

    ${DESKTOP_VIEW}{
        justify-content: center;
        min-height: ${DESKTOP_LINK_HEIGHT};
        flex-shrink: 0;
        font-size: 1em;
        color: white;
        text-shadow: 1px 1px 1px grey;
        line-height: 1.2em;
        text-align: center;
        background: none;
        a:link, a:visited {
            color: white;
            transition: 0.5s;
        }
        a:hover{
            color: ${PRIMARY_BANNER_COLOR};
            transition: 0.5s;
            text-shadow: none;
            transform: scale(1.1);
        }
      }
`;

const Background = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50px;
    right: 0;
    z-index: 6;
    opacity: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(14px);

    ${DESKTOP_VIEW}{
        display: none;
      }
`;

export default function NavMenu() {

    const {globalState, dispatch} = useContext(GlobalStateContext);
    const isDesktop = globalState.isDesktop;

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
                            <Link
                                
                                onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})}
                                href = '/build-a-cake' >
                                    Cakes
                            </Link>
                        </NavLink>
                        <NavLink>
                            <Link
                                
                                onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})}
                                href = '/shop/brownies-and-blondies'
                                as = '/shop/brownies-and-blondies' >
                                    Brownies & Blondies
                            </Link>
                        </NavLink>
                        <NavLink>
                            <Link
                                
                                onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})}
                                href = '/shop/cookies'
                                as = '/shop/cookies' >
                                    Cookies
                            </Link>
                        </NavLink>
                        <NavLink>
                            <Link
                                
                                onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})}
                                href = '/wedding'
                                as = '/wedding' >
                                    Wedding
                            </Link>
                        </NavLink>
                        <NavLink>
                            <Link
                                
                                onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})}
                                href = '/our-story'
                                as = '/our-story' >
                                    Our Story
                            </Link>
                        </NavLink>
                        <NavLink>
                            <Link
                                
                                onClick = {isDesktop ? null : () => dispatch({type: 'TOGGLE_NAV_MENU'})}
                                href = '/contact'
                                as = '/contact'>
                                    Contact Us
                            </Link>
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
