import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import { GlobalStateContext } from '../../pages/_app';
import Quantity from '../Quantity';
import client from '../../apollo-client';
import { CART_LINES_REMOVE } from '../../graphql/mutations';
import WishList from './WishList';
import Title from './Title';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import { useInView } from 'react-intersection-observer';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Menu = styled(motion.div)`
    height: 100%;
    width: 100%;
    top: 50px;
    position: fixed;
    background: rgba(255,255,255,1);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    flex-stretch: 1;
    flex-wrap: nowrap;
    padding: 20px;
`;

const MenuWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(255,255,255,1);
    z-index: 1000;
    display: flex;
    flex-direction: row;
    flex-stretch: 1;
    overflow: auto;
    scroll-snap-type: x mandatory;
    white-space: nowrap;
    flex-wrap: nowrap;
`;

const NavLink = styled(motion.div)`
    width: 90%;
    height: 50px;
    display: flex;
    padding-left: 10%;
    justify-content: flex-start;
    align-items: center;
`;

const Link = styled.a`

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
`;

const CheckoutContainer = styled(motion.div)`
    height: 125px;
    padding: 10px 0 10px 0;
    width: 100%;
    background: ${PRIMARY_THEME_COLOR};
    position: relative;
    bottom: 0;
    left: 0;
    z-index: 3000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const CheckoutButton = styled(motion.button)`
    width: 50%;
    height: 50px;
    background: ${PRIMARY_THEME_COLOR};
    border-radius: 30px;
    margin-top: 10px;
    text-align: center;
    flex-shrink: 0;
    align-self: center;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 1em;
`;

const ProductContainer = styled(motion.div)`
    width: 95%;
    display: flex;
    margin: 20px auto;
    position: relative;
    flex-shrink: 0;
`;

const ProductImageContainer = styled(NextLink)`
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
    height: 300px;
    display: flex;
    flex-direction: column;
    margin: 10px 0 25px 10px;
    flex-shrink: 0;
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
`;

const Taxes = styled.div`
    width: 95%;
    height: 25px;
    text-align: center;
    font-size: 0.9em;
    padding-top: 25px;
    margin: 0 auto;
`;

const handleRemoveProduct = async (lineId, cartId, dispatch) => {
    const { data } = await client.mutate(CART_LINES_REMOVE(cartId, lineId))
    dispatch({type: 'UPDATE_CART', value: data.cartLinesRemove})
}

const renderTitle = lines =>
    <Title>Shopping Bag ({lines.reduce((acc,l) => acc += l.quantity, 0)})</Title>

const renderProducts = (lines, dispatch, cartId) => 
    lines.length > 0 ? lines.map(l => (
        <ProductContainer>
            <ProductImageContainer href = {`/shop/${l.productType.toLowerCase()}/${l.productHandle}#${l.variantHandle}`}>
                <ProductImage onClick = {() => dispatch({type: 'TOGGLE_CART_MENU'})} src = {l.variantImageSrc} ></ProductImage>
            </ProductImageContainer>
            <ProductSpecContainer>
                <ProductSpecDiv>
                    <div style = {{display: 'flex', flexDirection: 'column'}} onClick = {() => dispatch({type: 'TOGGLE_CART_MENU'})}>
                        <NextLink href = {`/shop/${l.productType.toLowerCase()}/${l.productHandle}#${l.variantHandle}`}>
                            <ProductTitle>{l.productTitle}</ProductTitle>
                        </NextLink>
                        <NextLink href = {`/shop/${l.productType.toLowerCase()}/${l.productHandle}#${l.variantHandle}`}>
                            <ProductVariant>{l.variantTitle}</ProductVariant>
                        </NextLink>
                    </div>
                    <Quantity quantity = {l.quantity} variantId = {l.variantId} lineId = {l.id} />
                </ProductSpecDiv>
                <PriceAndRemoveContainer>
                    <ProductPrice>£{l.price}</ProductPrice>
                    <span onClick = {() => handleRemoveProduct(l.id, cartId, dispatch)} style = {{fontSize: '0.9em', textAlign: 'right', cursor: 'pointer'}}>Remove</span>
                </PriceAndRemoveContainer>
            </ProductSpecContainer>
        </ProductContainer> ))
        : <span style = {{marginLeft: '10px'}}>Theres nothing in your basket!</span>

const renderSummary = cartData => (
    <SummaryContainer>
        <SummaryTitle>Summary</SummaryTitle>
        <SummarySubTitle>
            <span>Subtotal</span>
            <span>£{cartData.subtotal}</span>
            </SummarySubTitle>
        <SummaryDelivery>
            <span>Delivery</span>
            <span>£4.99</span>
        </SummaryDelivery>
        <Taxes>Taxes Included</Taxes>
        <NextLink href='/shop/checkout'>
            <CheckoutButton>Checkout</CheckoutButton>
        </NextLink>
    </SummaryContainer>
)

export default function CartMenu() {

    const {globalState, dispatch} = useContext(GlobalStateContext);

    const { ref, inView } = useInView({threshold: 0.2});

    useEffect(() => {
        if(inView === false){
            dispatch({type: 'SET_WISHLIST_TRUE'})
        }
    },[inView])

    return (
        <AnimatePresence>
            {globalState.cartMenuOpen && ( 
                <Menu
                    key = 'menu'
                    initial = {{ opacity: 0, y: -75 }}
                    animate = {{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                >
                    <Title shoppingBagQuantity = {globalState.cartData.lines.reduce((acc,l) => acc += l.quantity, 0)}
                           favouritesQuantity = {globalState.wishList.length}
                           isWishList = {globalState.isWishList}
                           dispatch = {dispatch} />
                        <MenuWrapper>
                        <ScrollIntoViewIfNeeded active = {!globalState.isWishList}>
                            <CartContainer ref = {ref} id = 'cart'>
                                {renderProducts(globalState.cartData.lines, dispatch, globalState.cartData.id)}
                                {renderSummary(globalState.cartData)}
                            </CartContainer>
                        </ScrollIntoViewIfNeeded>
                            <CartContainer>
                                <WishList isWishList = {globalState.isWishList} />
                            </CartContainer>
                        </MenuWrapper>
                </Menu>
            )}
            </AnimatePresence>
    )
}
