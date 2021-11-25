import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useViewportScroll } from "framer-motion"
import { GlobalStateContext } from '../../pages/_app';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import { useInView } from 'react-intersection-observer';

const WishListContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 100%;
    width: 100%;
    margin: 10px;
    flex-wrap: wrap;
    padding-bottom: 25px;
`;

const ProductCard = styled(motion.div)`
    width: 30vw;
    min-width: 200px;
    max-width: 300px;
    background: #8c690010;
    margin: 15px;
    display: block;
    padding: 5px;
    text-decoration: none;
    border-radius: 10px;
    box-shadow: 0px 5px 13px -3px rgba(0,0,0,0.75);
`;

const ProductSpec = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    color: black;
    font-weight: 500;
    font-size: 0.95em;
    padding: 10px;
`;

const Title = styled.div`

`;

const SubTitle = styled.div`
    font-weight: 500;
`;

const Price = styled.div`
    font-weight: 400;
    margin-bottom: 20px;
`;

const AddRemoveContainer = styled.div`
    font-size: 0.9em;
    font-weight: 400;
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    width: 100%;
`;

const renderFavouriteCards = (wishList,dispatch) =>
    wishList.map(f =>
        <ProductCard whileFocus={{ scale: 1.1 }}>
            <Link onClick = {() => dispatch({type: 'TOGGLE_CART_MENU'})} passHref href = {`/shop/${f.productType}/${f.productHandle}#${f.variantHandle}`}>
                <div>
                    <Image sizes="50vw" objectFit = {'contain'} layout = {'responsive'} height = {'100%'} width = {'100%'} src = {f.imgSrc} />
                    <ProductSpec>
                        <Title>{f.productTitle}</Title>
                        <SubTitle >{f.variantTitle}</SubTitle>
                        <Price>£{f.price}</Price>
                        <AddRemoveContainer>
                            <span>Add To Bag</span>
                            <a onClick = {() => dispatch({type:'REMOVE_FROM_WISHLIST', value: wishList.filter(ff => f.variantId !== ff.variantId)})}>Remove</a>
                        </AddRemoveContainer>
                    </ProductSpec>
                </div>
            </Link>
        </ProductCard>
    );

export default function WishList({isWishList}) {

    const { globalState, dispatch } = useContext(GlobalStateContext);

    const { ref, inView } = useInView({threshold: 0.2});

    useEffect(() => {
        if(inView === false){
            dispatch({type: 'SET_WISHLIST_FALSE'})
        }
    },[inView])

    return (
        <ScrollIntoViewIfNeeded active = {isWishList}>
            {
                globalState.wishList.length
                ? <WishListContainer ref = {ref} id = 'wishlist'>
                        {renderFavouriteCards(globalState.wishList, dispatch)}
                  </WishListContainer>
                : <div>There's nothing in your favourites...</div>
            }
        </ScrollIntoViewIfNeeded>
    )
}
