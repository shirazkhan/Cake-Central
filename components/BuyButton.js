import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MOBILE, PRIMARY_THEME_COLOR } from '../GlobalVariables';
import { GlobalStateContext } from '../pages/_app';
import client from '../apollo-client';
import { CREATE_CART, CART_LINES_ADD } from '../graph/Mutations';

const Container = styled(motion.div)`
    width: ${props => props.inView ? '80%' : '100%'};
    border-radius: ${props => props.inView ? '30px' : '0px'};
    margin: 10px auto;
    height: 60px;
    display: flex;
    position: ${props => props.inView ? 'relative' : 'fixed'};
    z-index: 1000;
    background: ${PRIMARY_THEME_COLOR};
    bottom: 0;
    box-shadow: 0px 5px 5px -4px #000000;
`;

const Button = styled(motion.button)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 1em;
    color: white;
    background: rgba(0,0,0,0);
    border: none;
    outline: none;
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-style: normal;
`;

const Ref = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 60px;
    margin-bottom: 0px;
    bottom: 0;
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
                <Container inView = {inView} animate={{width: inView ? '80%' : '100%'}} whileTap = {{scale: 1.1}}>
                    <Button onClick = {() => handleAddToBag(selectedVariant, variants, dispatch, globalState)} >Add to Bag</Button>
                </Container>
            </Ref>
        </>
    )
}
