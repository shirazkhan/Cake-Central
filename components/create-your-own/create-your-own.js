import React from 'react';
import { styled } from 'styled-components';
import SizeSelection from './size-selection';

const Container = styled.div`
    border: 1px solid blue;
    display: flex;

`

export default function CreateYourOwn(props) {
    

    return (
        <>
            <Container>
                <SizeSelection />
            </Container>
        </>
    )
}
