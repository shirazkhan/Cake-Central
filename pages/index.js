import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Content, Primary, HeroContent} from '../src/styled/App';
import BackgroundVideo from 'react-background-video-player';
import HeroVideo from '../components/HeroVideo';
import ShopCarousel from '../components/ShopCarousel';
import AnnouncementBanner from '../components/index/AnnouncementBanner';
import HomeHero from '../components/index/HomeHero'
import { cakes, cupcakes, brownies, cookies, cheesecakes, weddingcakes, milkcakes } from '../HomepageSettings';
import SocialBanner from '../components/index/SocialBanner';
import CollectionCollage from '../components/index/CollectionCollage';

export default function Index() {

    return <>
    <Content>
        <AnnouncementBanner />
        <HomeHero />
            <ShopCarousel data = {cakes} title={"CELEBRATION CAKES"} subtitle={"Your celebrations into sweet memories"}/>
            <ShopCarousel data = {weddingcakes} title={"WEDDING CAKES"} subtitle={"Baked with care, sealed with love"}/>
            <ShopCarousel data = {cupcakes} title={"CUPCAKES"} subtitle={"Tiny cakes, huge happiness"}/>
            <ShopCarousel data = {brownies} title={"BROWNIES"} subtitle={"Gooey goodness in every square"}/>
            <ShopCarousel data = {milkcakes} title={"MILK CAKES"} subtitle={"Gooey goodness in every square"}/>
        <SocialBanner />
    </Content>
    </>
}
