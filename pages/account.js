import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getSession, signIn } from 'next-auth/client';

export default function account() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const securePage = async() => {
            const session = await getSession();
            if(!session){
                signIn()
            } else{
                setLoading(false);
            }
        }
        securePage()
    },[])
    
    if(loading){
        <h1>Loading...</h1>
    }
    return (
        <>
            THIS IS THE ACCOUNTS PAGE
        </>
    )
}
