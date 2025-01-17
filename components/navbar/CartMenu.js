import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import { GlobalStateContext } from '../../pages/_app';
import Quantity from '../Quantity';
import client from '../../apollo-client';
import { CART_LINES_REMOVE } from '../../graphql/Mutations';
import { useInView } from 'react-intersection-observer';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW, DESKTOP_NAV_HEIGHT, IS_WISHLIST, SECONDARY_THEME_COLOR } from '../../GlobalVariables';
import CheckoutButton from '../checkout/CheckoutButton';
import useDetectScroll from '@smakss/react-scroll-direction';
import { FaAnglesDown } from "react-icons/fa6";

const Menu = styled(motion.div)`
    height: calc(100% - 50px);
    width: 100%;
    top: 50px;
    position: fixed;
    background: rgba(255,255,255,1);
    z-index: 7;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-stretch: 1;
    overflow: scroll;
    flex-wrap: nowrap;

    ${DESKTOP_VIEW}{
        width: 500px;
        height: auto;
        max-height: 75%;
        border-radius: 20px;
        margin-top: 50px;
        right: 50px;
        padding: 25px 0 25px 0;
        z-index: 10000;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
`;

const CartHeader = styled.div`
      margin: 0px auto 20px auto;
`;

const HeaderTitle = styled.h3`
      margin: 0;
`;

const HeaderSummary = styled.p`
    margin: 0;
`;

const CartContainer = styled(motion.div)`
    height: 100%;
    width: 100vw;
    min-width: 100vw;
    top: 100px;
    background: rgba(255,255,255,1);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
    overscroll-behavior: contain;
    scroll-snap-align: start;
    ${DESKTOP_VIEW}{
        width: 100%;
        min-width: 100%;
    }
`;

const ProductContainer = styled(motion.div)`
    width: 95%;
    display: flex;
    margin: 20px auto;
    position: relative;
    flex-shrink: 0;
    gap: 20px;
`;

const ProductImageContainer = styled(Link)`
    height: 125px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const ProductImage = styled.img`
    width: 100%;
    max-width: 125px;
    max-height: 125px;
    object-fit: contain;
    cursor: pointer;
    border-radius: 5px;
`;

const ProductSpecContainer = styled.div`
    display: flex;
    height: 125px;
    width: 70%;
    justify-content: space-between;
    align-items: flex-start;
`;

const ProductSpecDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: auto;
    padding-right: 15px;
`;

const PriceAndRemoveContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: end;
`;

const ProductTitle = styled.a`
    font-weight: 600;
    cursor: pointer;
    text-wrap: wrap;
`;

const ProductVariant = styled.a`
    cursor: pointer;
`;

const ProductPrice = styled.div`
    
`;

const SummaryContainer = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 10px 0 25px 10px;
    flex-shrink: 0;
    ${DESKTOP_VIEW}{
        position: relative;
        justify-content: flex-end;
        align-items: space-between;
        margin: 0 auto;
    }
`;

const SummaryTitle = styled.div`
    margin-bottom: 20px;
    font-weight: 600;
`;

const SummarySubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    font-weight: 600;
`;

const SummaryDelivery = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    padding-top: 5px;
    margin-bottom: 10px;
`;

const Background = styled.div`
      ${DESKTOP_VIEW}{
        position: absolute;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        z-index: 10;
        transition: 0.5s;
      }
`;

const handleRemoveProduct = async (lineId, cartId, dispatch) => {
    const { data } = await client.mutate(CART_LINES_REMOVE(cartId, lineId))
    dispatch({type: 'UPDATE_CART', value: data.cartLinesRemove})
}

const renderProducts = (lines, dispatch, cartId) => 
    lines.length > 0 ? lines.map(l => (
        <ProductContainer>
            <ProductImageContainer href = {`/shop/${l.productType.toLowerCase()}/${l.productHandle}#${l.variantHandle}`}>
                <ProductImage onClick = {() => dispatch({type: 'TOGGLE_CART_MENU'})} src = {l.variantImageSrc} ></ProductImage>
            </ProductImageContainer>
            <ProductSpecContainer>
                <ProductSpecDiv>
                    <div style = {{display: 'flex', flexDirection: 'column'}} onClick = {() => dispatch({type: 'TOGGLE_CART_MENU'})}>
                        <Link href = {`/shop/${l.productType.replaceAll('%20','-').toLowerCase()}/${l.productHandle}#${l.variantHandle}`}>
                            <ProductTitle>{l.productTitle}</ProductTitle>
                        </Link>
                        <Link href = {`/shop/${l.productType.replaceAll('%20','-').toLowerCase()}/${l.productHandle}#${l.variantHandle}`}>
                            <ProductVariant>{l.variantTitle === "Default Title" ? "" : l.variantTitle}</ProductVariant>
                        </Link>
                    </div>
                    <Quantity quantity = {l.quantity} variantId = {l.variantId} lineId = {l.id} />
                </ProductSpecDiv>
                <PriceAndRemoveContainer>
                    <ProductPrice>£{parseFloat(l.price).toFixed(2)}</ProductPrice>
                    <span onClick = {() => handleRemoveProduct(l.id, cartId, dispatch)} style = {{fontSize: '0.9em', textAlign: 'right', cursor: 'pointer'}}>Remove</span>
                </PriceAndRemoveContainer>
            </ProductSpecContainer>
        </ProductContainer> ))
        : <span style = {{margin: '0 auto'}}>Theres nothing in your basket!</span>

const renderSummary = cartData => (
    <SummaryContainer>
        <SummaryTitle>Summary</SummaryTitle>
        <SummarySubTitle>
            <span>Subtotal</span>
            <span>£{parseFloat(cartData.subtotal).toFixed(2)}</span>
            </SummarySubTitle>
        <SummaryDelivery>
            <span>Delivery</span>
            <span>Calculated at Checkout</span>
        </SummaryDelivery>
        {cartData.lines.length ?
            <CheckoutButton cartId={cartData.id} />
        : ''}
    </SummaryContainer>
)


export default function CartMenu() {

    const {globalState, dispatch} = useContext(GlobalStateContext);

    const { ref, inView } = useInView({threshold: 0.2});

    const { scrollDir, scrollPosition } = useDetectScroll();

    useEffect(() => {
        if(inView === false){
            dispatch({type: 'SET_WISHLIST_TRUE'})
        }
    },[inView])

    const totalQuantity = globalState.cartData.lines.reduce((acc,l) => acc+=l.quantity,0);
    const totalPrice = globalState.cartData.lines.reduce((acc,l) => acc += parseFloat(l.price),0).toFixed(2);
    
    return (
        <AnimatePresence>
            {globalState.cartMenuOpen && ( 
                <>
                    <Menu
                        key = 'menu'
                        initial = {{ opacity: 0, y: -75 }}
                        animate = {{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <CartHeader>
                            <HeaderTitle>Shopping Bag</HeaderTitle>
                            <HeaderSummary>{totalQuantity} Items - £{totalPrice}</HeaderSummary>
                        </CartHeader>
                        <CartContainer ref = {ref} id = 'cart'>
                            {renderProducts(globalState.cartData.lines, dispatch, globalState.cartData.id)}
                            {renderSummary(globalState.cartData)}
                        </CartContainer>
                    </Menu>
                    <Background key = 'background'
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1 }}
                        exit={{ opacity: 0 }} onClick={() => dispatch({type: 'CART_MENU_OFF'})} />
                </>
            )}
            </AnimatePresence>
    )
}
