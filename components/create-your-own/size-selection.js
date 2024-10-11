import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Title = styled.div`

`;

const Item = styled.div`

`;

export default function SizeSelection(props) {
    

    return (
        <>
            <Container>
                <Title>Select Size:</Title>
                <Item>6 Cookie Box</Item>
                <Item>12 Cookie Box</Item>
            </Container>
        </>
    )
}
