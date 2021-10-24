import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Content, Primary, HeroContent} from '../src/styled/App';
import BackgroundVideo from 'react-background-video-player';
import HeroVideo from '../components/HeroVideo';
import ShopCarousel from '../components/ShopCarousel';

export default function Index() {

    return <>
    <Content>
        <HeroVideo />
        <ShopCarousel />
    </Content>
    </>
}
