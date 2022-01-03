import React, { Component } from 'react';
import Testimonials from '../components/general/Testimonials';
import MiniPortfolio from '../components/general/MiniPortfolio';
import SectionBanner from '../components/general/SectionBanner';
import SectionBannerWithImage from '../components/general/SectionBannerWithImage';
import StepsSection from '../components/general/StepsSection';
import BridalPageHero from '../components/general/BridalPageHero';

export default function BridalHenna() {
    return (
        <>
            <BridalPageHero />
            <StepsSection />
            <SectionBanner />
            <MiniPortfolio />
            <Testimonials />
        </>
    )
}
