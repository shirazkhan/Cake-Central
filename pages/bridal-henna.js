import React from 'react';
import Testimonials from '../components/general/Testimonials';
import MiniPortfolio from '../components/general/MiniPortfolio';
import SectionBanner from '../components/general/SectionBanner';
import SectionBannerWithImage from '../components/general/SectionBannerWithImage';
import StepsSection from '../components/general/StepsSection';

export default function BridalHenna() {
    return (
        <>
            <SectionBanner />
            <StepsSection />
            <MiniPortfolio />
            <Testimonials />
        </>
    )
}
