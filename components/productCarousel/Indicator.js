import React from 'react';
import styled from 'styled-components';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    bottom: 60px;
`;

const Dot = styled.div`
    width: 15px;   
    height: 15px;
    border-radius: 10px;
    background: ${props => props.$active ? '' : PRIMARY_THEME_COLOR};
    border: 3px solid ${PRIMARY_THEME_COLOR};
    display: inline-block;
    margin: 5px;
    transition: background-color 0.5s ease;
    box-shadow: rgba(50, 50, 93, 0.6) 0px 6px 12px -2px, rgba(0, 0, 0, 0.9) 0px 3px 7px -3px;
`;

const renderDots = (quantity, $active) =>
    [...Array(quantity)].map((na,i) =>
        i === $active
        ? <Dot key = {i.toString()} />
        : <Dot key = {i.toString()} $active = {true} />
    )

export default function Indicator({quantity, idx}) {
    return (
        <Container>
            {renderDots(quantity,idx)}
        </Container>
    )
}
