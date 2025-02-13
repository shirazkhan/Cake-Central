import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR } from '../GlobalVariables';
import { GlobalStateContext } from '../pages/_app';
import client from '../apollo-client';
import { CREATE_CART, CART_LINES_ADD } from '../graphql/Mutations';

const Container = styled(motion.div)`
    width: ${props => props.$inView ? '80%' : '100%'};
    min-width: 376px;
    border-radius: ${props => props.$inView ? '30px' : '0px'};
    margin: 20px auto;
    height: 63px;
    display: flex;
    position: ${props => props.$inView ? 'relative' : 'fixed'};
    z-index: 3;
    background: ${PRIMARY_THEME_COLOR};
    bottom: 0;
    box-shadow: ${props => props.$inView ? '0px 5px 5px -4px #000000' : 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'};
    left: 0;

    ${DESKTOP_VIEW}{
        width: 100%;
        position: static;
        border-radius: 30px;
        box-shadow: 0px 5px 5px -4px #000000;
    }
`;

const Button = styled(motion.button)`
    margin: 0 auto;
    width: 100%;
    min-width: 376px;
    font-size: 1em;
    color: white;
    background: rgba(0,0,0,0);
    border: none;
    outline: none;
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
`;

const Ref = styled.div`
    width: 376px;
`;

async function handleAddToBag(selectedVariant, variants, dispatch, globalState){
    if(!globalState.cartData.id){
        const { data } = await client.mutate(CREATE_CART(variants.find(v => v.handle === selectedVariant).id))
        dispatch({type: 'UPDATE_CART', value: data.cartCreate})
        dispatch({type: 'TOGGLE_CART_MENU'})
        setTimeout(() => { dispatch({type: 'TOGGLE_CART_MENU'}) }, 2000);
    } else {
        const { data } = await client.mutate(CART_LINES_ADD(globalState.cartData.id,variants.find(v => v.handle === selectedVariant).id));
        dispatch({type: 'UPDATE_CART', value: data.cartLinesAdd})
        dispatch({type: 'TOGGLE_CART_MENU'})
        setTimeout(() => { dispatch({type: 'TOGGLE_CART_MENU'}) }, 2000);
    }
}

export default function BuyButton({selectedVariant, variants}) {

    const { globalState, dispatch } = useContext(GlobalStateContext);

    const { ref, inView, entry } = useInView();

    return (
        <>
            <Ref ref = {ref}>
                <Container $inView = {inView} animate={{width: inView ? '80%' : '100%'}} whileTap = {{scale: 1.1}}>
                    <Button onClick = {() => handleAddToBag(selectedVariant, variants, dispatch, globalState)} >Add to Bag</Button>
                </Container>
            </Ref>
        </>
    )
}
