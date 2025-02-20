import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { DESKTOP_VIEW, PRIMARY_BANNER_COLOR } from '../GlobalVariables';
import Button from './core/Button';

const BannerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${PRIMARY_BANNER_COLOR};
  overflow: hidden;
  width: 90%;
  border-radius: 20px;
  margin: 20px auto;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ${DESKTOP_VIEW} {
    flex-direction: row;
    width: 90%;
    height: 500px;
  }
`;

const BannerImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${DESKTOP_VIEW} {
    flex: 1;
    width: 50%;
    height: 100%;
  }
`;

const BannerContent = styled.div`
  color: white;
  text-align: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  width: 90%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: column;

  ${DESKTOP_VIEW} {
    position: static;
    transform: none;
    background: none;
    width: 100%;
    flex: 1;
    padding: 20px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 1.8em;
  margin-bottom: 20px;

  ${DESKTOP_VIEW} {
    font-size: 2.5em;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2em;
  margin-bottom: 30px;
  width: calc(100% - 80px);
  margin: 0 auto;
  font-weight: 500;

  ${DESKTOP_VIEW} {
    font-size: 1.2em;
    width: calc(100% - 40px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  margin: 0 auto;

  ${DESKTOP_VIEW} {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImageContainer>
        <Image
          src="/temp/red-cherry-cake.jpeg"
          alt="Celebration Cakes"
          fill
          style={{objectFit: "cover"}}
          quality={1}
          priority
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </BannerImageContainer>
      <BannerContent>
        <Title>
          Design a Cake With Us!
        </Title>
        <Description>
            We specialize in artisan, handmade fondant and buttercream cakes, going above and beyond with our realistic creations.</Description>
        <Description>
            Whether it's a grand wedding or an intimate gathering, no cake is too big and no occasion is too small! We proudly deliver within a 30-mile radius of Grantham, ensuring your perfect cake arrives fresh and on time.</Description>
        <ButtonContainer>
          <Button href="/our-story">Our Story</Button>
        </ButtonContainer>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
