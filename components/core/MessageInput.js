import React from 'react';
import styled from 'styled-components';
import { PRIMARY_BUTTON_COLOR } from '../../GlobalVariables';

const Container = styled.div`
    width: calc(100% - 20px);
    margin: 20px 10px;
`;

const MessageLabel = styled.label`
    color: #333;
    display: block;
    font-size: 1.1em;
    font-weight: 500;
    margin-bottom: 5px;
`;

const Input = styled.textarea`
    height: 100px;
    width: -webkit-fill-available;
    padding: 12px;
    font-size: 1rem;
    color: #333;
    background-color: ${PRIMARY_BUTTON_COLOR}10;
    border: 1px solid ${PRIMARY_BUTTON_COLOR}50;
    border-radius: 5px;
    resize: vertical;
    margin-bottom: 15px;
`;

const MessageInput = ({ customMessage, setCustomMessage }) => {

    return (
        <Container>
            <MessageLabel htmlFor="customMessage">Leave Us A Message:</MessageLabel>
            <Input
                id="customMessage"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Let us know all the details for your cake!"
            />
        </Container>
    );
};

export default MessageInput;
