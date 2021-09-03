import React, {useContext} from 'react';
import styled from 'styled-components';
import { GlobalStateContext } from '../../pages/_app';
import NavMenu from './NavMenu';

const Bar = styled.div`
    grid-area: Header;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1400px;

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

const HamBurger = styled.img`
    width: 50%;
`;

const RightButton = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Cart = styled.img`
    width: 50%;
`;

export default function NavBar() {

    const { globalState, dispatch } = useContext(GlobalStateContext);

    return (
    <>
        <Bar>
            <LeftButton onClick = {() => dispatch({type: 'TOGGLE_NAV_MENU'})}>
                <HamBurger src = '/menu.svg' />
            </LeftButton>
            <LogoBox>
                <Logo src = '/hennacentralcom_brown.svg' />
            </LogoBox>
            <RightButton>
                <Cart src = '/cart-icon.svg' />
            </RightButton>
        </Bar>
        {<NavMenu />}
    </>
    )
}
