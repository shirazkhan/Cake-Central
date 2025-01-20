import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DESKTOP_VIEW, PRIMARY_BANNER_COLOR, SECONDARY_BANNER_COLOR } from '../GlobalVariables';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: -50px auto 20px auto;
  padding: 20px;
  background-color: ${SECONDARY_BANNER_COLOR};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 85%;
  z-index: 5;
  font-size: 1.2em;

  ${DESKTOP_VIEW} {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    max-width: 1000px;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  padding: 20px;

  ${DESKTOP_VIEW} {
    padding-right: 50px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  ${DESKTOP_VIEW} {
    width: 50%;
  }
`;

const BannerTitle = styled.h2`
  margin-bottom: 15px;
  color: white;
`;

const BannerText = styled.p`
  color: white;
  margin-bottom: 10px; /* Adds spacing between paragraphs */
`;

const BannerComponent = () => {
  return (
    <BannerContainer>
      <TextContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BannerTitle>Explore Bespoke Cake Designs</BannerTitle>
        <BannerText>
          At Cake Central, each luxury cake is crafted with care, tailored to meet the unique desires of our clients.
        </BannerText>
        <BannerText>
          Eager to collaborate, we invite you to discuss your bespoke needs, ensuring every detail is perfect.
        </BannerText>
        <BannerText>
          Your specific information helps us serve you better, enabling us to provide quick, accurate responses to all inquiries.
        </BannerText>
      </TextContent>
      <ImagePlaceholder>
        <Image
          src="/images/laylas-cake-3.jpg"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
          style={{borderRadius: '8px'}}
        />
      </ImagePlaceholder>
    </BannerContainer>
  );
};

export default BannerComponent;
