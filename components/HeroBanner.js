// HeroBanner.js
import React from 'react';
import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';
import { DESKTOP_VIEW, PRIMARY_BUTTON_COLOR, SECONDARY_BUTTON_COLOR } from '../GlobalVariables';
import Image from 'next/image';
import Button from './core/Button';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  perspective: 1px;
`;

const Background = styled(motion(Image))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35); /* Optional: darkens the background for better text visibility */
`;

const Content = styled.div`
  text-align: center;
  color: #fff;
  z-index: 1;
  text-shadow: 0px 2px 2px rgba(50, 50, 50, 0.4); 
  
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1em;
  margin-bottom: -25px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  max-width: 700px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const HeroBanner = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <HeroContainer>
      <Background
        priority
        src={'/images/white-pink-drip-cake-with-strawberries-chocolate.jpeg'}
        fill={true}
        quality={10}
        style={{ y }}
        alt='White Birthday Cake with Pink Drip, Strawberries and Chocolate on top.' />
      <Overlay />
      <Content>
        <Subtitle>Celebration & Wedding Cakes based in Grantham, Lincolnshire</Subtitle>
        <Title>Welcome to Cake Central</Title>
        <Description>Indulge in our wide variety of luxury cakes. Create your own bespoke design or choose a ready made design to your liking.</Description>
        <ButtonContainer>
          <Button href="/build-a-cake">Let's Build A Cake</Button>
          <Button href="/shop/cakes">Browse Our Cakes</Button>
        </ButtonContainer>
      </Content>
    </HeroContainer>
  );
};

export default HeroBanner;
