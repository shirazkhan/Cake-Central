import React, { useContext } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { GlobalStateContext } from '../pages/_app';
import client from '../apollo-client';
import { CART_LINES_UPDATE } from '../graphql/mutations';
import { PRIMARY_THEME_COLOR } from '../GlobalVariables';

const Container = styled(motion.div)`
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

const Button = styled.button`
    border-radius: 35px;
    width: 35px;
    height: 35px;
    border: none;
    background: ${PRIMARY_THEME_COLOR};
    color: white;
    font-weight: 900;
`;

const Count = styled.div`
    font-weight: 600;
    color: black;
`;

const handleAdd = async (quantity, variantId, lineId, globalState, dispatch) => {
    const { data } = await client.mutate(CART_LINES_UPDATE(globalState.cartData.id, lineId, quantity));
    dispatch({type: 'UPDATE_CART', value: data.cartLinesUpdate});
}

const handleRemove = async (quantity, variantId, lineId, globalState, dispatch) => {
    const { data } = await client.mutate(CART_LINES_UPDATE(globalState.cartData.id, lineId, quantity));
    dispatch({type: 'UPDATE_CART', value: data.cartLinesUpdate});
}

export default function Quantity({quantity, variantId, lineId}) {

    const {globalState, dispatch} = useContext(GlobalStateContext);

    return (
        <>
            <Container>
                <Button style = {{cursor: 'pointer'}} onClick = {() => handleRemove(quantity - 1, variantId, lineId, globalState, dispatch)}>-</Button>
                <Count>{quantity}</Count>
                <Button style = {{cursor: 'pointer'}} onClick = {() => handleAdd(quantity + 1, variantId, lineId, globalState, dispatch)}>+</Button>
            </Container>
        </>
    )
}
