import React from 'react';
import styled from 'styled-components';
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
  background-color: #e0e0e0;
  border-radius: 10px;

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
        <BannerTitle>Your Special Day, Your Dream Cake</BannerTitle>
        <BannerText>
        At Cake Central, each luxury wedding cake is crafted with meticulous care, tailored to meet the unique desires of our clients.
        </BannerText>
        <BannerText>
          Eager to collaborate, we invite you to discuss your bespoke needs, ensuring every detail is perfect.
        </BannerText>
        <BannerText>
        Because we pride ourselves on creating high-quality, custom wedding cakes, your details help us make magic happen. Share all the specifics so we can get back to you swiftly and accurately.
        </BannerText>
      </TextContent>
      <ImagePlaceholder />
    </BannerContainer>
  );
};

export default BannerComponent;
