import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW, WEBSITE_WIDTH } from '../GlobalVariables';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #113544;
  padding: 40px 20px;
  text-align: center;
  color: #ffffff;
  width: 85%;
  max-width: ${WEBSITE_WIDTH};
  margin: 25px auto;
  border-radius: 20px;
`;

const BannerContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${DESKTOP_VIEW} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: #333;
  font-size: 1.5rem;

  ${DESKTOP_VIEW} {
    width: 45%;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;

  ${DESKTOP_VIEW} {
    width: 45%;
    margin-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ffffff;

  ${DESKTOP_VIEW} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 30px;
  color: #ffffff;
  max-width: 1000px;

  ${DESKTOP_VIEW} {
    font-size: 1rem;
  }
`;

const ActionButton = styled(motion.button)`
  background-color: #FFABBB;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8fa3;
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Banner = () => {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <BannerWrapper ref={bannerRef}>
      <BannerContent initial="hidden" animate={bannerInView ? "visible" : "hidden"} variants={containerVariants}>
        <PlaceholderImage>Placeholder</PlaceholderImage>
        <TextWrapper>
          <Title>Free Delivery with Cake Central Club!</Title>
          <Description>
            Join the Cake Central Club for free standard delivery for a whole year, along with exclusive perks, offers, and more at an affordable price.
          </Description>
          <ActionButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            FIND OUT MORE
          </ActionButton>
        </TextWrapper>
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
