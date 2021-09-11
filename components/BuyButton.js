import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { MOBILE } from '../GlobalVariables';

const Container = styled(motion.div)`
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    z-index: 1000;
    background: #8c6900;
    bottom: 0;
`;

const Button = styled(motion.button)`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background: rgba(0,0,0,0);
    border: 0;
`;

export default function BuyButton() {
    return (
        <>
            <Container initial = {{y: 150}} animate={{ y: 0 }} whileTap = {{scale: 1.2}}>
                <Button>Add to Bag</Button>
            </Container>
        </>
    )
}
