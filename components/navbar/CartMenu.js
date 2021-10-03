import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import { GlobalStateContext } from '../../pages/_app';
import Quantity from '../Quantity';
import client from '../../apollo-client';
import { CART_LINES_REMOVE } from '../../graphql/mutations';

const Menu = styled(motion.div)`
    height: 100%;
    width: 100%;
    top: 50px;
    position: fixed;
    background: rgba(255,255,255,1);
    z-index: 1000;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    overflow-y: auto;
`;

const NavLink = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    padding-left: 10%;
    justify-content: flex-start;
    align-items: center;
`;

const Link = styled.a`

`;

const CheckoutContainer = styled.div`
    height: 125px;
    padding: 10px 0 10px 0;
    width: 100%;
    background: #8c6900;
    position: fixed;
    bottom: 0;
    z-index: 3000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const CheckoutButton = styled.div`
    width: 80%;
    height: 50px;
    background: white;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
    flex-shrink: 0;
`;

const Title = styled.div`
    font-weight: 600;
    padding: 15px;
`;

const ProductContainer = styled.div`
    width: 95%;
    display: flex;
    margin: 20px auto;
    position: relative;
    flex-shrink: 0;
`;

const ProductImageContainer = styled.div`
    height: 125px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const ProductImage = styled.img`
    width: 100%;
`;

const ProductSpecContainer = styled.div`
    display: flex;
    height: 125px;
    width: 70%;
    padding: 0 0 0 10px;
    justify-content: space-between;
    align-items: flex-start;
`;

const ProductSpecDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const ProductTitle = styled.div`
    font-weight: 600;
`;

const ProductVariant = styled.div`

`;

const ProductPrice = styled.div`
    padding-left: 15px;
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
            <ProductImageContainer>
                <ProductImage src = {l.variantImageSrc} ></ProductImage>
            </ProductImageContainer>
            <ProductSpecContainer>
                <ProductSpecDiv>
                    <div>
                        <ProductTitle>{l.productTitle}</ProductTitle>
                        <ProductVariant>{l.variantTitle}</ProductVariant>
                    </div>
                    <Quantity quantity = {l.quantity} variantId = {l.variantId} lineId = {l.id} />
                </ProductSpecDiv>
                <ProductSpecDiv>
                    <ProductPrice>£{l.price}</ProductPrice>
                    <span onClick = {() => handleRemoveProduct(l.id, cartId, dispatch)} style = {{fontSize: '0.9em', textAlign: 'right'}}>Remove</span>
                </ProductSpecDiv>
            </ProductSpecContainer>
        </ProductContainer> ))
        : <span style = {{marginLeft: '15px'}}>Theres nothing in your basket!</span>

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
    </SummaryContainer>
)

export default function CartMenu() {

    const {globalState, dispatch} = useContext(GlobalStateContext);

    return (
        <AnimatePresence>
            {globalState.cartMenuOpen && (
                <>
                    <Menu
                        initial = {{ opacity: 0, y: -75 }}
                        animate = {{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {renderTitle(globalState.cartData.lines)}
                        {renderProducts(globalState.cartData.lines, dispatch, globalState.cartData.id)}
                        {renderSummary(globalState.cartData)}
                        <CheckoutContainer transition={{ delay: 3 }}>
                            <CheckoutButton>Pay with Apple Pay</CheckoutButton>
                            <CheckoutButton>Check Out</CheckoutButton>
                        </CheckoutContainer>
                    </Menu>
                </>
            )}
            </AnimatePresence>
    )
}
