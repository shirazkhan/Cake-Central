// HeroBanner.js
import React from 'react';
import styled from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';
import { PRIMARY_BUTTON_COLOR, SECONDARY_BUTTON_COLOR } from '../GlobalVariables';
import Link from 'next/link';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  perspective: 1px;
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/patterns/sprinkles.svg');
  background-size: cover;
  background-position: center;
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

const Button = styled.button`
  font-size: 1.1rem;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  text-shadow: 0px 2px 2px rgba(50, 50, 50, 0.4); 
  background-color: ${PRIMARY_BUTTON_COLOR};
  font-weight: 500;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${SECONDARY_BUTTON_COLOR};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HeroBanner = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <HeroContainer>
      <Background style={{ y }} />
      <Overlay />
      <Content>
        <Subtitle>Celebration & Wedding Cakes based in Grantham</Subtitle>
        <Title>Welcome to Cake Central</Title>
        <Description>Indulge in our wide variety of luxury cakes. Create your own bespoke design or choose a ready made design to your liking.</Description>
        <Button><Link style={{color:'white'}} href="/bespoke-cake-order" >Let's build a cake</Link></Button>
        <Button><Link style={{color:'white'}} href="/bespoke-cake-order" >Shop Now</Link></Button>
      </Content>
    </HeroContainer>
  );
};

export default HeroBanner;
