import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW, PRIMARY_BANNER_COLOR, PRIMARY_BUTTON_COLOR } from '../GlobalVariables';
import Link from 'next/link';

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

const Button = styled(motion(Link))`
  background-color: ${PRIMARY_BUTTON_COLOR};
  color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: 30px;
  border: none;
  width: 50%;
  height: 15px;
  cursor: pointer;
  font-size: 0.9em;
  text-decoration: none;
  margin: 0 auto;

  &:visited {
    color: white;
  }

  ${DESKTOP_VIEW} {
    font-size: 1em;
  }
`;

const Banner = () => {
  return (
    <BannerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BannerImageContainer>
        <Image
          src="/temp/red-cherry-cake.jpeg"
          alt="Celebration Cakes"
          layout="fill"
          objectFit="cover"
          quality={1}
        />
      </BannerImageContainer>
      <BannerContent>
        <Title
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Design a Cake With Us!
        </Title>
        <Description
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
            We specialize in artisan, handmade fondant and buttercream cakes, going above and beyond with our realistic creations.</Description>
        <Description
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Whether it's a grand wedding or an intimate gathering, no cake is too big and no occasion is too small! We proudly deliver within a 30-mile radius of Grantham, ensuring your perfect cake arrives fresh and on time.</Description>
        <ButtonContainer>
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/our-story"
          >
            Our Story
          </Button>
        </ButtonContainer>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
