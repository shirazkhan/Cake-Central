import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import client from '../../apollo-client';
import { GET_CHECKOUT_URL } from '../../graphql/queries';
import { PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Button = styled.button`
    height: 50px;
    width: 100%;
    background: ${PRIMARY_THEME_COLOR};
    border-radius: 30px;
    margin-top: 10px;
    text-align: center;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 1em;
    cursor: pointer;
`;

export default function CheckoutButton({cartId}) {

    const [url, setUrl] = useState('');

    useEffect(() => {
        const handleFetchUrl = async (cartId) => {
            const { data } = await client.query(GET_CHECKOUT_URL(cartId));
            console.log(data);
            setUrl(data.cart.checkoutUrl);
        }
        handleFetchUrl(cartId);
    },[])

    return (
        <>
            <a href={url}>
                <Button>Go To Checkout</Button>
            </a>
        </>
    )
}
