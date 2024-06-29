import React from 'react';
import { styled } from 'styled-components';
import { SECONDARY_THEME_COLOR, WEBSITE_WIDTH } from '../GlobalVariables';

const TitlePoster = styled.div`
    width: 100%;
    height: 500px;
    background: ${SECONDARY_THEME_COLOR};
    margin: 50px 0;
`;

const Container = styled.div`
    width: calc(100% - 40px);
    max-width: ${WEBSITE_WIDTH};
    height: 1000px;
    margin: 50px 0;
    border: 1px solid red;
`;

export default function Faqs(props) {
    

    return (
        <>
            <TitlePoster>

            </TitlePoster>
            <Container>

            </Container>
        </>
    )
}
