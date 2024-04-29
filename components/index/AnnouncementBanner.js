import React from 'react';
import styled from 'styled-components';
import { NAV_BAR_COLOR } from '../../GlobalVariables';

const Container = styled.h5`
    height: 50px;
    background: white;
    color: black;
    width: 100%;
    display: flex;
    margin: 0;
    color: black;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 14px -6px rgba(0,0,0,0.8);
`;

export default function AnnouncementBanner(props) {
    

    return (
        <>
            <Container>
                Free delivery in Lincolnshire
            </Container>
        </>
    )
}
