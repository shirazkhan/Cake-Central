import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW, PRIMARY_BANNER_COLOR, SECONDARY_BANNER_COLOR } from '../GlobalVariables';

// Styled Components
const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${SECONDARY_BANNER_COLOR};
  padding: 40px 20px;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;

  ${DESKTOP_VIEW} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  max-width: 1000px;
  margin: 30px auto;
  font-size: 1.2em;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1000px;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  flex: 1 1 calc(33.333% - 20px); /* 3 columns with 20px gap */

  ${DESKTOP_VIEW} {
    flex: 1 1 calc(16.666% - 20px); /* 6 columns with 20px gap */
  }
`;

const IconCircle = styled.div`
  background-color: ${PRIMARY_THEME_COLOR}90;
  border-radius: 50%;
  padding: 15px;
  width: 80px;
  height: 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  ${DESKTOP_VIEW} {
    width: 100px;
    height: 100px;
  }
`;

const IconImage = styled.img`
  width: 150px;
  height: 150px;
`;

const IconText = styled.span`
  font-size: 1.1em;
  text-align: center;
  margin-top: 10px;
  color: white;
`;

// Animation Variants
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Component
const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <BannerWrapper ref={ref}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants}>
        <Title>Why Choose Cake Central?</Title>
        <Description>
          From our robust packaging to our ever expanding range, here at Cake Central we do everything we can to ensure we are providing great quality products and services, so you don’t have to worry! All you have to do is order your <a href="/cakes-and-bakes" style={{ color: 'white', textDecoration: 'underline' }}>cakes & bakes</a> online through our website and we will do the rest...
        </Description>
        <IconsWrapper>
          <IconContainer>
            <IconCircle>
              <IconImage src="/icons/cake-delivery.svg" alt="Next day delivery" />
            </IconCircle>
            <IconText>Free local delivery in Grantham</IconText>
          </IconContainer>
          <IconContainer>
            <IconCircle>
              <IconImage src="/icons/elevate-your-menu.svg" alt="UK wide delivery" />
            </IconCircle>
            <IconText>UK Nationwide delivery for all our brownies and cookies</IconText>
          </IconContainer>
          <IconContainer>
            <IconCircle>
              <IconImage src="/icons/elevate-your-menu.svg" alt="Robust packaging" />
            </IconCircle>
            <IconText>Robust, protective packaging for safe delivery</IconText>
          </IconContainer>
          <IconContainer>
            <IconCircle>
              <IconImage src="/icons/elevate-your-menu.svg"alt="Competetive pricing" />
            </IconCircle>
            <IconText>Competitive pricing and value for money</IconText>
          </IconContainer>
          <IconContainer>
            <IconCircle>
              <IconImage src="/icons/elevate-your-menu.svg" alt="Expanding ranges" />
            </IconCircle>
            <IconText>We are always expanding our ranges</IconText>
          </IconContainer>
          <IconContainer>
            <IconCircle>
              <IconImage src="/icons/elevate-your-menu.svg" alt="All occasions" />
            </IconCircle>
            <IconText>Something to suit all occasions</IconText>
          </IconContainer>
        </IconsWrapper>
      </motion.div>
    </BannerWrapper>
  );
};

export default Banner;
