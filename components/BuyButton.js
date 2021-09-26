import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MOBILE } from '../GlobalVariables';
import { GlobalStateContext } from '../pages/_app';

const Container = styled(motion.div)`
    width: ${props => props.inView ? '80%' : '100%'};
    border-radius: ${props => props.inView ? '30px' : '0px'};
    margin: 0 auto;
    height: 60px;
    display: flex;
    position: ${props => props.inView ? 'relative' : 'fixed'};
    z-index: 1000;
    background: #8c6900;
    bottom: 0;
    box-shadow: 0px 5px 5px -4px #000000

`;

const Button = styled(motion.button)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background: rgba(0,0,0,0);
    border: none;
    outline: none;
`;

const Ref = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 60px;
    margin-bottom: 0px;
    bottom: 0;
`;

const handleAddToBag = (selectedVariant, variants, dispatch) => {
    dispatch({type: 'CREATE_CART', value: variants.find(v => v.handle === selectedVariant).id})
  }

export default function BuyButton({selectedVariant, variants}) {

    const { globalState, dispatch } = useContext(GlobalStateContext);

    const { ref, inView, entry } = useInView();

    return (
        <>
            <Ref ref = {ref}>
            <Container inView = {inView} animate={{width: inView ? '80%' : '100%'}} whileTap = {{scale: 1.1}}>
                <Button onClick = {() => handleAddToBag(selectedVariant, variants, dispatch)} >Add to Bag</Button>
            </Container>
            </Ref>
        </>
    )
}
