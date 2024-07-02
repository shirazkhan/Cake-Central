// HeroBanner.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { DESKTOP_VIEW } from '../GlobalVariables';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  perspective: 1px;

  ${DESKTOP_VIEW}{
    height: 80vh;
  }
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
  background: rgba(0, 0, 0, 0.0); /* Optional: darkens the background for better text visibility */
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HeroBanner = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <HeroContainer>
      <Background style={{ y }} />
      <Overlay />
      <Content>
        <Title>Welcome to Cake Heaven</Title>
        <Subtitle>Delicious Cakes for Every Occasion</Subtitle>
        <Description>Indulge in our wide variety of cakes made with love and the finest ingredients.</Description>
        <Button onClick={() => alert('Build a cake clicked')}>Let's build a cake</Button>
        <Button onClick={() => alert('Shop Now clicked')}>Shop Now</Button>
      </Content>
    </HeroContainer>
  );
};

export default HeroBanner;
