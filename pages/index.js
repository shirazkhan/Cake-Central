import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {Content, Primary, HeroContent} from '../src/styled/App';
import ShopCarousel from '../components/ShopCarousel';
import AnnouncementBanner from '../components/index/AnnouncementBanner';
import HomeHero from '../components/index/HomeHero'
import { cakes, cupcakes, brownies, cookies, cheesecakes, weddingcakes, milkcakes } from '../HomepageSettings';
import SocialBanner from '../components/index/SocialBanner';
import WhatsNew from '../components/WhatsNew';
import FreeDeliveryBanner from '../components/FreeDeliveryBanner';
import HeroBanner from '../components/HeroBanner';
import { PRIMARY_BANNER_COLOR, WEBSITE_WIDTH, WEBSITE_NAME } from '../GlobalVariables';
import WhatsappHeader from '../components/WhatsappHeader';
import CategorySection from '../components/CategorySection';
import DesignACakeWithUs from '../components/DesignACakeWithUs';
import GoogleReviews from '../components/core/GoogleReviews';
import SlimBanner from '../components/core/SlimBanner';

const Container = styled.div`
    background: white;
    padding-bottom: 20px;
`;

const RoundedContainer = styled.div`
    border-radius: 20px;
    margin: -50px auto;
    position: relative;
    background: white;
    padding: 25px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    max-width: ${WEBSITE_WIDTH};
`;

const WhatsApp = styled.img`
    height: 50px;
    cursor: pointer;
`;


export default function Index() {

    return <>
    <Head>
  <title>Grantham's Best Custom Birthday & Wedding Cakes | Cake Central</title>
  <meta name="description" content="Discover the finest handcrafted cakes for all occasions at Cake Central. From weddings to birthdays, our cakes are baked to perfection and designed with love." />
  <meta name="keywords" content="cakes, handcrafted cakes, birthday cakes, wedding cakes, Cake Central, custom cakes, dessert bakery" />
  <meta name="author" content="Cake Central" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Grantham’s Birthday & Wedding Cake Specialists – Custom Cakes for Every Occasion" />
  <meta property="og:description" content="Explore our range of handcrafted cakes for weddings, birthdays, and more. Made with love and baked to perfection at Cake Central." />
  <meta property="og:image" content="/images/cake-central-home.jpg" />
  <meta property="og:url" content="https://cakecentral.co.uk" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Grantham’s Birthday & Wedding Cake Specialists – Custom Cakes for Every Occasion" />
  <meta name="twitter:description" content="Discover the finest handcrafted cakes for all occasions at Cake Central. Order yours today!" />
  <meta name="twitter:image" content="/images/cake-central-home.jpg" />
</Head>
    <WhatsappHeader />
    <HeroBanner/>
    <Container>
        <RoundedContainer>
            <DesignACakeWithUs />
            {/* <CategorySection /> */}
            {/* <ShopCarousel data = {cakes} title={"CELEBRATION CAKES"} subtitle={"Your celebrations into sweet memories"}/>
            <ShopCarousel data = {weddingcakes} title={"WEDDING CAKES"} subtitle={"Baked with care, sealed with love"}/>
            <ShopCarousel data = {cupcakes} title={"CUPCAKES"} subtitle={"Tiny cakes, huge happiness"}/>
            <ShopCarousel data = {brownies} title={"BROWNIES"} subtitle={"Gooey goodness in every square"}/> */}
        <FreeDeliveryBanner />
        {/* <WhatsNew /> */}
        </RoundedContainer>
    </Container>
    <GoogleReviews />
    {/* <SlimBanner>
        <span>Need a Hand? Chat Over WhatsApp</span>
        <span><WhatsApp src='/icons/whatsapp.svg' />07768 672154</span>
    </SlimBanner> */}
    {/*<SocialBanner />*/}
    </>
}
