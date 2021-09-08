import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Container = styled.div`

`;

const Title = styled.p`
    height: 20px;
    padding: 0 0 10px 10px;
    margin: 0;
    font-size: 1rem;
`;

const Variants = styled.div`
    padding-left: 10px;
    white-space: nowrap;
    overflow-x: scroll;
    display: block;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
      };
`;

const Variant = styled.a`
    display: inline-block;
    padding: 0 5px 0 5px;
    border: ${props => props.selected ? '1px solid #8c6900' : ''};
`;

const renderVariants = (variants,selected,setSelected,ref) =>

    variants.map(v => {
        return <Variant
            ref = {ref}
            key = {v.id}
            onClick = {() => handleClick(v.handle, setSelected, ref)}
            href = {`#${v.handle}`}
            selected = {v.handle === selected ? true : false}
        >
            <Image width = '100px' height = '100px' src = {v.image} />
        </Variant>
    })

const handleClick = (handle, setSelected, ref) => {
    setSelected(handle);
    
}

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. IF it does, then use this as initial state.
    const fragment = router.asPath.slice(router.asPath.indexOf('#')+1);
    if(fragment === router.asPath){
        return variants[0].handle
    }
    return fragment
}

export default function ProductVariant({variants}) {
    
    const router = useRouter();

    const [selected,setSelected] = useState(extractFragmentHandle(router, variants));

    return (
        <>
            <Container>
                <Title>{variants.find(v => v.handle === selected).title}</Title>
                <Variants>
                    {renderVariants(variants,selected,setSelected)}
                </Variants>
            </Container>
        </>
    )
}
