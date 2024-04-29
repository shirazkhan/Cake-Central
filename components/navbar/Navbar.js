import React, {useContext} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/link';
import styled from 'styled-components';
import { GlobalStateContext } from '../../pages/_app';
import NavMenu from './NavMenu';
import CartMenu from './CartMenu';
import { NAV_BAR_COLOR, MOBILE, WEBSITE_WIDTH, DESKTOP_SCROLLED_NAV_HEIGHT } from '../../GlobalVariables';
import dynamic from 'next/dynamic';
const MediaQuery = dynamic(() => import('react-responsive'), {
    ssr: false
  })

const Bar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${NAV_BAR_COLOR};
    height: 100%;
    max-width: ${WEBSITE_WIDTH};
    z-index: 2499;

    @media (min-width:${MOBILE}){
        width: 100%;
      }
`;

const LogoBox = styled(motion.div)`
    width: 225px;
    padding: 0 10px;
    height: 85%;
    display: hidden;
    justify-content: center;
    align-items: center;

    @media (min-width:${MOBILE}){
        width: 175px;
        height: 100%;
      }
`;

const Logo = styled(motion.img)`
    width: 100%;
    height: 100%;
    filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, 0.2));
    
    @media (min-width:${MOBILE}){
        width: 100%;
        height: 100%;
    }
`;

const Links = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LeftButton = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width:${MOBILE}){
        height: 50%;
        justify-content: center;
        margin-left: 100px;
        visibility: hidden;
    }
`;

const HamBurger = styled(motion.img)`
    width: 25px;
    height: 25px;
    filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, 0.2));
`;

const RightButton = styled.div`
    width: 50px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (min-width:${MOBILE}){
        height: 50%;
        margin-right: 100px;
    }
`;

const Cart = styled(motion.img)`
    width: 100%;
    height: 100%;
    filter: drop-shadow( 1px 1px 2px rgba(0, 0, 0, 0.2));
`;

export default function NavBar() {

    const { globalState, dispatch } = useContext(GlobalStateContext);

    return (
    <>
        <Bar>
            <LeftButton onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>
                <HamBurger src = {globalState.navMenuOpen ? '/menu-cross.svg' : '/menu.svg'} />
            </LeftButton>
            <LogoBox>
                <Link href = '/' passHref>
                    <MediaQuery minWidth={parseInt(MOBILE.replace('px',''))}>
                        { globalState.scrollYProgress.current < 0.1
                        ?   <Logo
                                key = "BigLogo"
                                scrollYProgress = {globalState.scrollYProgress.current}
                                src = '/CakeCentral-Logo-Short.svg'
                                initial = {{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, scale: { duration: 0.1 } }}
                                exit={{ opacity: 0 }}
                                whileTap = {{scale: 0.96}}
                            />
                        :   <Logo
                                key = "SmallLogo"
                                scrollYProgress = {globalState.scrollYProgress.current}
                                src = '/CakeCentral-mini.svg'
                                initial = {{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, scale: { duration: 0.1 } }}
                                exit={{ opacity: 0 }}
                                whileTap = {{scale: 0.96}}
                            />}
                    </MediaQuery>
                    <MediaQuery maxWidth={parseInt(MOBILE.replace('px',''))}>
                        <Logo
                                key = "SmallLogo"
                                scrollYProgress = {globalState.scrollYProgress.current}
                                src = '/CakeCentral-mini.svg'
                                initial = {{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, scale: { duration: 0.1 } }}
                                exit={{ opacity: 0 }}
                                whileTap = {{scale: 0.96}}
                        />
                    </MediaQuery>
                </Link>
            </LogoBox>
            <RightButton onClick = {() => dispatch({type: 'DESKTOP_CART_MENU_ON'})}>
                <Cart src = '/cart-icon.svg' />
            </RightButton>
        </Bar>
        <CartMenu />
    </>
    )
}
