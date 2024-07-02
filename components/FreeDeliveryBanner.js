import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW, WEBSITE_WIDTH, PRIMARY_BANNER_COLOR, PRIMARY_BUTTON_COLOR, SECONDARY_BUTTON_COLOR } from '../GlobalVariables';

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${PRIMARY_BANNER_COLOR};
  padding: 40px 20px;
  text-align: center;
  color: #ffffff;
  width: 85%;
  max-width: ${WEBSITE_WIDTH};
  margin: 25px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
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

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  background-image: url('path/to/your/image.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 20px;

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
    width: 100%;
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
  background-color: ${PRIMARY_BUTTON_COLOR};
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
        <ImageWrapper />
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
