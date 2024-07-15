import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW, WEBSITE_WIDTH, PRIMARY_BUTTON_COLOR } from '../GlobalVariables';

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
  justify-content: center;

  ${DESKTOP_VIEW} {
    flex-direction: row;
    justify-content: center;
    gap: 60px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  ${DESKTOP_VIEW} {
    width: 45%;
    height: 300px;
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
  font-weight: 500;

  ${DESKTOP_VIEW} {
    font-size: 1rem;
  }
`;

const ActionButton = styled(motion.button)`
  background-color: ${PRIMARY_BUTTON_COLOR};
  color: white;
  border: none;
  font-weight: 550;
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
        <ImageWrapper>
          <Image
            src="/temp/cake-delivery.jpeg"
            alt="Placeholder"
            layout="fill"
            quality={1}
            objectFit="cover"
          />
        </ImageWrapper>
        <TextWrapper>
          <Title>Free Delivery for Grantham Customers</Title>
          <Description>
            We're thrilled to offer free delivery for all our wonderful Grantham customers! Whether you're surprising a loved one or indulging in a treat for yourself, we'll bring your handcrafted cake right to your doorstep with a smile.
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
