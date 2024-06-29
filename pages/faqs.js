import React from 'react';
import { styled } from 'styled-components';
import { SECONDARY_THEME_COLOR, WEBSITE_WIDTH } from '../GlobalVariables';

const TitlePoster = styled.div`
    width: 100%;
    height: 500px;
    background: ${SECONDARY_THEME_COLOR};
`;

const Container = styled.div`
    max-width: ${WEBSITE_WIDTH};
    height: 1000px;
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
