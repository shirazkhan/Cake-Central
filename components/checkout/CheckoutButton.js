import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import client from '../../apollo-client';
import { GET_CHECKOUT_URL } from '../../graphql/Queries';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR } from '../../GlobalVariables';

const Button = styled.button`
    height: 50px;
    width: 100%;
    background: ${PRIMARY_THEME_COLOR};
    border-radius: 30px;
    margin: 10px 0;
    box-shadow: 0 3px 4px 0 rgba(0,0,0,0.2);
    text-align: center;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 1em;
    cursor: pointer;

    ${DESKTOP_VIEW}{
        
    }
`;

export default function CheckoutButton({cartId}) {

    const [url, setUrl] = useState('');

    useEffect(() => {
        const handleFetchUrl = async (cartId) => {
            const { data } = await client.query(GET_CHECKOUT_URL(cartId));
            
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
