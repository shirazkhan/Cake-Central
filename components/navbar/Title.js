import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SwitchContainer = styled(motion.div)`
    width: 300px;
    height: 30px;
    background-color: #8c690030;
    display: flex;
    justify-content: ${props => props.isWishList ? 'flex-end' : 'flex-start'};
    border-radius: 50px;
    padding: 5px;
    cursor: pointer;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 20px;
`;

const SwitchButton = styled(motion.div)`
    width: 150px;
    height: 30px;
    background-color: #8c6900;
    border-radius: 40px;
`;

const LabelContainer = styled.span`
    width: 300px;
    position: fixed;
    display: flex;
    justify-content: space-around;
`;

const Label = styled.span`
    text-align: center;
    width: 150px;
    color: white;
    display: flex;
    justify-content: space-around;
    
`;

export default function Title({shoppingBagQuantity, favouritesQuantity, isWishList, dispatch}) {
    return (
        <>
            <SwitchContainer  isWishList={isWishList} onClick = {() => dispatch({type: 'TOGGLE_WISHLIST'})}>
                <SwitchButton layout />
                <LabelContainer transition = {{type: "spring", stiffness: 700, damping: 30}}>
                    <Label>{`Shopping Bag (${shoppingBagQuantity})`}</Label>
                    <Label>{`Favourites (${favouritesQuantity})`}</Label>
                </LabelContainer>
            </SwitchContainer>
    </>
    )
}
