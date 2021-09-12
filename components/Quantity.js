import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Container = styled(motion.div)`
    width: 150px;
    height: 60px;
    border: 2px solid blue;
    margin: 0 auto;
    display: flex;
    
`;

export default function Quantity() {
    return (
        <>
            <Container>

            </Container>
        </>
    )
}
