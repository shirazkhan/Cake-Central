import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

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
    background: #8c6900;
    color: white;
    font-weight: 900;
`;

const Count = styled.div`
    font-weight: 600;
    color: black;
`;

export default function Quantity({quantity}) {
    return (
        <>
            <Container>
                <Button>-</Button>
                <Count>{quantity}</Count>
                <Button>+</Button>
            </Container>
        </>
    )
}
