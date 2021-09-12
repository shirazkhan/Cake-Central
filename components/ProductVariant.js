import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
    background: ${props => props.selected ? '#8c690040' : ''};
    margin-left: ${props => props.selected ? '-110px' : ''};
    z-index: 33;
`;

const renderVariants = (variants,selected,setSelected) =>
    variants.map(v => {
        return <>
        <AnimatePresence>
            <Variant
                key = {v.id}
                onClick = {() => handleClick(v.handle, setSelected)}
                href = {`#${v.handle}`}
                selected = {v.handle === selected ? true : false}
            >
                <Image width = '100px' height = '100px' src = {v.image} />
            </Variant>
                {v.handle === selected && (
                <Selected animate = {{opacity: 1}} exit = {{ opacity: 0 }} selected = {v.handle === selected ? true : false} />
                )}
            </AnimatePresence>
        </>
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
                <AnimatePresence>
                    <Title key = 'title' animate = {{ opacity: 1}} exit = {{ opacity: 0}}>{variants.find(v => v.handle === selected).title}</Title>
                </AnimatePresence>
                <Variants>
                    {renderVariants(variants,selected,setSelected)}
                </Variants>
            </Container>
        </>
    )
}
