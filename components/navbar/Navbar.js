import React, {useContext} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/link';
import styled from 'styled-components';
import { GlobalStateContext } from '../../pages/_app';
import NavMenu from './NavMenu';
import CartMenu from './CartMenu';

const Bar = styled.div`
    grid-area: Header;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: white;
    height: 100%;
    max-width: 1400px;
    z-index: 1001;

`;

const LogoBox = styled.div`
    width: 225px;
    padding: 0 10px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Logo = styled.img`
    width: 225px;
    height: 13px;
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
`;

const HamBurger = styled(motion.img)`
    width: 25px;
    height: 25px
`;

const RightButton = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Cart = styled(motion.img)`
    width: 25px;
    height: 25px;
`;

export default function NavBar() {

    const { globalState, dispatch } = useContext(GlobalStateContext);

    return (
    <>
        <Bar>
            <LeftButton onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>
                <HamBurger animate = {{ rotate: 270 }} transition={{ duration: 0.75 }} src = {globalState.navMenuOpen ? '/menu-cross.svg' : '/menu.svg'} />
            </LeftButton>
            <LogoBox>
                <Link href = '/' passHref>
                    <Logo src = '/hennacentralcom_brown.svg'></Logo>
                </Link>
            </LogoBox>
            <RightButton onClick = {() => dispatch({type: 'TOGGLE_CART_MENU'})}>
                <Cart src = '/cart-icon.svg' />
            </RightButton>
        </Bar>
        <NavMenu />
        <CartMenu />
    </>
    )
}
