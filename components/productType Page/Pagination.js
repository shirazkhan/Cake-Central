import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 40px;
    margin: 25px auto;
    display: flex;
    justify-content: center;
`;

const PageNumber = styled.button`
    border: none;
    font-size: 0.75em;
    font-weight: 700;
    border-radius: 5px;
    color: pink;
    width: 40px;
    height: 100%;
    background: white;
    margin: 0 5px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

`

export default function Pagination(props) {
    

    return (
        <>
            <Container>
                <PageNumber>1</PageNumber>
                <PageNumber>2</PageNumber>
                <PageNumber>3</PageNumber>
                <PageNumber>4</PageNumber>
                <PageNumber>5</PageNumber>
                <PageNumber>{'>'}</PageNumber>
            </Container>
        </>
    )
}
