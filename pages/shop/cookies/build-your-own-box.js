import React from 'react';
import { styled } from 'styled-components';
import CreateYourOwn from '../../../components/create-your-own/create-your-own';

const TitleBanner = styled.div`
    height: 600px;
    width: 100%;
    border: 1px solid red;
    display: flex
    margin: 50px auto;
`;

export default function BuildYourOwnBox(props) {
    

    return (
        <>
            <TitleBanner />
            <CreateYourOwn />
        </>
    )
}
