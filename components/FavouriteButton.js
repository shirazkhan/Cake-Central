import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlobalStateContext } from '../pages/_app';

const Container = styled(motion.div)`
    width: 80%;
    border-radius: 30px;
    margin: 10px auto;
    height: 60px;
    display: flex;
    position: relative;
    z-index: 1000;
    background: #8c6900;
    bottom: 0;
    box-shadow: 0px 5px 5px -4px #000000
    border: 1px solid #8c6900;

`;

const Button = styled(motion.button)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    color: black;
    background: white;
    border: none;
    outline: none;
    border: 1px solid #8c6900;
    border-radius: 30px;

`;

const handleAddToFavourites = (props, dispatch) => {
    dispatch({type: 'ADD_TO_WISHLIST', value: props});
  }

const handleRemoveFromFavourites = (globalState, dispatch, variantId) => {
    dispatch({type: 'REMOVE_FROM_WISHLIST', value: globalState.wishList.filter(w => w.variantId !== variantId)});
}

export default function FavouriteButton(props) {

    const { globalState, dispatch } = useContext(GlobalStateContext);
    let isAlreadyInFavourites = globalState.wishList ? !!globalState.wishList.find(f => f.variantId === props.variantId) : false;
    return (
        <>
            <Container whileTap = {{scale: 1.1}}>
                <Button
                    onClick = {isAlreadyInFavourites ? () => handleRemoveFromFavourites(globalState, dispatch, props.variantId) : () => handleAddToFavourites(props, dispatch) }>
                        {isAlreadyInFavourites ? 'Remove From Favourites' : 'Add To Favourites'}
                </Button>
            </Container>
        </>
    )
}
