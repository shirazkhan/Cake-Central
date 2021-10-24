import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const IFrameContainer = styled.div`
    position: relative;
    padding-bottom: 100vh;
    width: 300%;
    left: -100%;
    margin-top: -50px;
`;

const VideoContainer = styled.video`
    position: absolute; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    z-index: -99;
`;

const IFrame = styled.iframe`
    position: absolute; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;
    z-index: -99;
`;

const Button = styled.div`
    background: #8c6900;
    text-align: center;
    border-radius: 3px;
    padding: 5px;
    color: white;
    width: 150px;
`;

const FilterContainer = styled.div`
    z-index: 15;
    background: rgba(0,0,0,0.65);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
`;

const HeroButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly ;
    align-items: center;
    width: 100%;
    max-width: 100vw;
`;

const Div = styled.div`
    max-width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

const HeroTitle = styled.h2`
    font-family: 'Mrs Saint Delafield', cursive;
    color: white;
    font-size: 4em;
    font-weight: 400;
    margin: 0 auto;
    padding: 0;
`;

const HeroSubTitle = styled.h3`
    color: white;
    font-size: 0.75em;
    font-family: futura-pt, sans-serif;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 5px;
    margin: 0 auto;
    text-align: center;
`;

const HeroLogoContainer = styled.div`
    border: 1px solid white;
    padding: 40px 15px 0px 15px;
    margin-bottom: 30px;
`;

const HeroSlogan = styled.h3`
    color: white;
    font-size: 0.75em;
    font-family: futura-pt, sans-serif;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 1px;
    margin: 0 auto 30px auto;
    text-align: center;
`;

export default function HeroVideo() {
    return <>
        <Div>
            <IFrameContainer>
                <FilterContainer>
                    <HeroLogoContainer>
                        <HeroTitle>Bridal Mehndi</HeroTitle>
                        <HeroSubTitle>BY SIDRA KHAN</HeroSubTitle>
                    </HeroLogoContainer>
                    <HeroSlogan>Book Your Bridal Experience With Us!</HeroSlogan>
                    <HeroButtonContainer>
                        <Button>More Info</Button>
                        <Button>Set Appointment</Button>
                    </HeroButtonContainer>
                </FilterContainer>
                <VideoContainer autoPlay muted playsInline loop>
                <source src = '720p-35.m4v' type = 'video/mp4' />
            </VideoContainer>
                {/* <IFrame 
                    src="https://www.youtube.com/embed/EXtYTXfArFs?autoplay=1&playlist=EXtYTXfArFs&loop=1&controls=0&showinfo=0&mute=1"

                    /> */}
            </IFrameContainer>
            {/* <BackgroundVideo src = '720p-35.m4v' /> */}
        </Div>
    </>
}
