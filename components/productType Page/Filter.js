import React from 'react';
import styled from 'styled-components';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    margin: 20px auto;
    width: calc(100% - 40px);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1em;
`;

const Button = styled.button`
    width: 125px;
    height: 100%;
    border: 1px solid ${PRIMARY_THEME_COLOR}80;
    border-radius: 50px;
    background: white;
    text-align: left;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    color: black;
`;

const Icon = styled.svg`
    height: 25px;
`;

export default function Filter({products}) {
    

    return (
        <>
            <Container>
                <p>{products.length} Product{products.length === 1 ? '' : 's'}</p>
                <Button>
                    <span>Filter</span>
                    <Icon xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 30 30" id="filter"><path fill="#111224" d="M17 11H4A1 1 0 0 1 4 9H17A1 1 0 0 1 17 11zM26 11H22a1 1 0 0 1 0-2h4A1 1 0 0 1 26 11z"></path><path fill="#000000" d="M19.5 13.5A3.5 3.5 0 1 1 23 10 3.5 3.5 0 0 1 19.5 13.5zm0-5A1.5 1.5 0 1 0 21 10 1.5 1.5 0 0 0 19.5 8.5zM26 21H13a1 1 0 0 1 0-2H26A1 1 0 0 1 26 21zM8 21H4a1 1 0 0 1 0-2H8A1 1 0 0 1 8 21z"></path><path fill="#000000" d="M10.5,23.5A3.5,3.5,0,1,1,14,20,3.5,3.5,0,0,1,10.5,23.5Zm0-5A1.5,1.5,0,1,0,12,20,1.5,1.5,0,0,0,10.5,18.5Z"></path></Icon>
                </Button>
            </Container>
        </>
    )
}
