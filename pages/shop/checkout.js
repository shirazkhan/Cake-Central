import React, {useContext} from 'react';
import {GlobalStateContext} from '../_app';
import styled from 'styled-components';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';
import InYourBag from '../../components/checkout/InYourBag';
import DeliveryOptions from '../../components/checkout/DeliveryOptions';

const HeaderContainer = styled.div`
    width: calc(100% - 20px);
    padding: 25px 0;
    border-bottom: 2px solid ${PRIMARY_THEME_COLOR}80;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Title = styled.h1`
    padding: 0;
    margin: 0 auto;
`;

const HeaderSummary = styled.p`
    padding-bottom: 20px;
    margin: 0 auto;
`;

export default function Checkout(props) {
    
    const {globalState, dispatch} = useContext(GlobalStateContext);
    console.log(globalState.cartData.id)
    return (
        <>
        <HeaderContainer>
            <Title>Checkout</Title>
            <HeaderSummary>1 item £109.99</HeaderSummary>
        </HeaderContainer>
        <InYourBag title={"In Your Bag"} />
        <DeliveryOptions title={"Delivery Options"}/>
        </>
    )
}
