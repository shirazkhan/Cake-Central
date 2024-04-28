import React from 'react';
import styled from 'styled-components';
import { WEBSITE_WIDTH } from '../../GlobalVariables';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 40px);
    margin: 0 auto;
    gap: 5px;
`;

const Hero = styled.div`
    height: 500px;
    width: 100%;
    background: pink;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const Collection = styled.div`
    background: pink;
    height: 100%;
    width: 100%;
`;

export default function CollectionCollage(props) {
    

    return (
        <>
            <Container>
                <Hero></Hero>
                <Row>
                    <Collection></Collection>
                    <Collection></Collection>
                </Row>
                <Row>
                    <Collection></Collection>
                    <Collection></Collection>
                    <Collection></Collection>
                </Row>
            </Container>
        </>
    )
}
