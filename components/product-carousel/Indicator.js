import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    margin: auto;
    margin-top: -30px;
`;

const Dot = styled.div`
    width: 10px;   
    height: 10px;
    border-radius: 10px;
    background: ${props => props.active ? '' : '#8c6900'};
    border: 2px solid #8c6900;
    display: inline-block;
    margin: 5px;
    transition: background-color 0.5s ease;
`;

const renderDots = (quantity, active) =>
    [...Array(quantity)].map((na,i) =>
        i === active
        ? <Dot key = {i.toString()} />
        : <Dot key = {i.toString()} active = {true} />
    )

export default function Indicator({quantity, idx}) {
    return (
        <Container>
            {renderDots(quantity,idx)}
        </Container>
    )
}
