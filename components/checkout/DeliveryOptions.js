import React from 'react';
import styled from 'styled-components';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    width: calc(100% - 20px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
`;

const Title = styled.h2`
    margin: 0;
    margin-left: 10px;
    height: 100px;
    padding: 0;
    justify-content: start;
    align-items: center;
    display: flex;
    font-size: 1em;
`;

const RadioContainer = styled.div`
    height: 60px;
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
`;

const RadioButton = styled.button`
    width: 50%;
    max-width: 220px;
    height: 100%;
    background: white;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 0.9em;
`;

const Input = styled.input`
    width: calc(100% - 40px);
    margin: 15px auto;
    height: 60px;
    background: white;
    border-radius: 10px;
    border: 1px solid grey;
    padding: 0 10px;
`;

const Submit = styled.button`
    width: calc(100% - 20px);
    height: 50px;
    background: ${PRIMARY_THEME_COLOR};
    color: white;
    border-radius: 40px;
    border: none;
    margin: 20px auto;
    font-weight: 800;
`;

export default function DeliveryOptions({title}) {
    

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <RadioContainer>
                    <RadioButton>Delivery</RadioButton>
                    <RadioButton>Pick-Up</RadioButton>
                </RadioContainer>
                <Input placeholder='First Name*' />
                <Input placeholder='Last Name*' />
                <Input placeholder='Address Line 1*' />
                <Input placeholder='Address Line 2' />
                <Input placeholder='Town/City*' />
                <Input placeholder='Postcode*' />
                <Input placeholder='United Kingdom' readOnly />
                <Input placeholder='Email*' type="email" />
                <Input placeholder='Phone Number*' />
                <Submit>Save & Continue</Submit>
            </Container>
        </>
    )
}
