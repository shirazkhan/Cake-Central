import React from 'react';
import Head from 'next/head';
import {Content, Primary, HeroContent} from '../src/styled/App';
import ShopCarousel from '../components/ShopCarousel';
import AnnouncementBanner from '../components/index/AnnouncementBanner';
import HomeHero from '../components/index/HomeHero'
import { cakes, cupcakes, brownies, cookies, cheesecakes, weddingcakes, milkcakes } from '../HomepageSettings';
import SocialBanner from '../components/index/SocialBanner';
import WhatsNew from '../components/WhatsNew';
import FreeDeliveryBanner from '../components/FreeDeliveryBanner';

export default function Index() {

    return <>
    <Head>
        <title>Order Cakes Online for UK Delivery | CakeCentral </title>
        <meta
            name="description"
            content="Handcrafted cakes from Lincolnshire, delivered to your doorstep across the UK. Explore our mouthwatering selection of unique cakes, perfect for any celebration or sweet craving. Order now for a taste of homemade indulgence!"
        />
    </Head>
        <HomeHero />
            <ShopCarousel data = {cakes} title={"CELEBRATION CAKES"} subtitle={"Your celebrations into sweet memories"}/>
            <ShopCarousel data = {weddingcakes} title={"WEDDING CAKES"} subtitle={"Baked with care, sealed with love"}/>
            <ShopCarousel data = {cupcakes} title={"CUPCAKES"} subtitle={"Tiny cakes, huge happiness"}/>
            <ShopCarousel data = {brownies} title={"BROWNIES"} subtitle={"Gooey goodness in every square"}/>
        <FreeDeliveryBanner />
        <WhatsNew />
        {/*<SocialBanner />*/}
    </>
}
