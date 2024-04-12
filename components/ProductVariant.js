import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ScrollContainer from 'react-indiana-drag-scroll';
import { PRIMARY_THEME_COLOR } from '../GlobalVariables';

const Container = styled.div`
    margin: 0px 0 20px 0;
`;

const Title = styled(motion.p)`
    height: 20px;
    padding: 0 0 10px 10px;
    margin: 0;
    font-size: 1rem;
`;

const Variants = styled(motion.div)`
    padding-left: 10px;
    white-space: nowrap;
    overflow-x: scroll;
    display: flex;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
      };
`;

const Variant = styled(motion.a)`
    display: inline-block;
    padding: 5px;
    height: 100px;
    width: 100px;
    border-radius: 5px;
`;

const Selected = styled(motion.div)`
    padding: ${props => props.selected ? '5px' : ''};
    height: ${props => props.selected ? '100px' : ''};
    width: ${props => props.selected ? '100px' : ''};
    border-radius: ${props => props.selected ? '11px' : ''};
    background: ${props => props.selected ? PRIMARY_THEME_COLOR : ''};
    margin-left: ${props => props.selected ? '-110px' : ''};
    z-index: 33;
`;

const renderVariants = (variants,selected,setSelected) =>
    variants.map((v,i) => {
        return <AnimatePresence key = {v.id}>
        <Variant
                key = {v.id}
                onClick = {() => handleClick(v.handle, setSelected)}
                href = {`#${v.handle}`}
                selected = {v.handle === selected ? true : false}
            >
                <Image width = '100' height = '100' src = {v.image} />
            </Variant>
            {v.handle === selected && (
            <Selected animate = {{opacity: 1}} exit = {{ opacity: 0 }} selected = {v.handle === selected ? true : false} />
            )}
        </AnimatePresence>
    })

const handleClick = (handle, setSelected, ref) => {
    setSelected(handle);
    
}

const extractFragmentHandle = (router, variants) => { // Check if router has href fragment. If it does, then use this as initial state.
    const fragment = router.asPath.slice(router.asPath.indexOf('#')+1)
    return fragment === router.asPath ? variants[0].handle : fragment
}

const renderTitle = (variants,selected) =>
    variants.find(v => v.handle === selected)

export default function ProductVariant({variants, selectedVariant, setSelectedVariant}) {
    
    const router = useRouter(); 
    
    return <Container key = {Math.random()}>
                <Title animate = {{ opacity: 1}}>
                    {variants.find(v => v.handle === selectedVariant).title}
                </Title>
                <Variants>
                    {renderVariants(variants,selectedVariant,setSelectedVariant)}
                </Variants>
            </Container>
}
