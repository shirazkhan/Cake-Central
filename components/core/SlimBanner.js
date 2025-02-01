import React from 'react';
import { styled } from 'styled-components';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${PRIMARY_THEME_COLOR};
    gap: 10px;
    font-size: 1.2em;
    color: white;
`;

export default function SlimBanner({children, ...props}) {

    return (
        <Container>
            {...children}
        </Container>
    )
}
