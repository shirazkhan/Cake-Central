import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  z-index: 1;
`;

const SprinklesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Sprinkles = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 600;
  line-height: 1.2;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 1.2em;
  color: white;
  text-align: center;
  max-width: 75%;
`;

const Banner = ({ backgroundImage, title, description }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <BannerContainer>
      <SprinklesWrapper>
        <Sprinkles style={{ y }} backgroundImage={backgroundImage} />
      </SprinklesWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default Banner;
