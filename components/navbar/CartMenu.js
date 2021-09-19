import React, { useContext } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { motion, AnimatePresence } from "framer-motion"
import { GlobalStateContext } from '../../pages/_app';
import Quantity from '../Quantity';

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

export default function CartMenu() {

    const {globalState, dispatch} = useContext(GlobalStateContext);

    return (
        <AnimatePresence>
            {globalState.cartMenuOpen && (
                <>
                    <Menu
                        key="navMenu"
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Title>Shopping Bag (1)</Title>
                        <ProductContainer>
                            <ProductImageContainer>
                                <ProductImage src = 'https://images.nike.com/is/image/DotCom/CU3217_010_A_PREM?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg'></ProductImage>
                            </ProductImageContainer>
                            <ProductSpecContainer>
                                <ProductSpecDiv>
                                    <div>
                                        <ProductTitle>Farah Henna Plate</ProductTitle>
                                        <ProductVariant>Bridal Red</ProductVariant>
                                    </div>
                                    <Quantity>

                                    </Quantity>
                                </ProductSpecDiv>
                                <ProductSpecDiv>
                                    <ProductPrice>£19.99</ProductPrice>
                                    <span style = {{fontSize: '0.9em', textAlign: 'right'}}>Remove</span>
                                </ProductSpecDiv>
                            </ProductSpecContainer>
                        </ProductContainer>
                        <ProductContainer>
                            <ProductImageContainer>
                                <ProductImage src = 'https://images.nike.com/is/image/DotCom/CU3217_010_A_PREM?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg'></ProductImage>
                            </ProductImageContainer>
                            <ProductSpecContainer>
                                <ProductSpecDiv>
                                    <div>
                                        <ProductTitle>Farah Henna Plate</ProductTitle>
                                        <ProductVariant>Bridal Red</ProductVariant>
                                    </div>
                                    <Quantity></Quantity>
                                </ProductSpecDiv>
                                <ProductSpecDiv>
                                    <ProductPrice>£19.99</ProductPrice>
                                    <span style = {{fontSize: '0.9em', textAlign: 'right'}}>Remove</span>
                                </ProductSpecDiv>
                            </ProductSpecContainer>
                        </ProductContainer>
                        <SummaryContainer>
                            <SummaryTitle>Summary</SummaryTitle>
                            <SummarySubTitle>
                                <span>Subtotal</span>
                                <span>£19.99</span>
                                </SummarySubTitle>
                            <SummaryDelivery>
                                <span>Delivery</span>
                                <span>£4.99</span>
                            </SummaryDelivery>
                            <Taxes>Taxes Included</Taxes>
                        </SummaryContainer>
                        <CheckoutContainer>
                            <CheckoutButton>Pay with Apple Pay</CheckoutButton>
                            <CheckoutButton>Check Out</CheckoutButton>
                        </CheckoutContainer>
                    </Menu>
                </>
            )}
            </AnimatePresence>
    )
}
