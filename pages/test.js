import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW } from '../GlobalVariables';
import LocallityHeroBanner from '../components/LocallityHeroBanner'

// Styled Components
const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #113544;
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

  ${DESKTOP_VIEW} {
    font-size: 1rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
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
  background-color: white;
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
  width: 40px;
  height: 40px;

  ${DESKTOP_VIEW} {
    width: 50px;
    height: 50px;
  }
`;

const IconText = styled.span`
  font-size: 0.7rem;
  text-align: center;
  margin-top: 10px;
  color: white;

  ${DESKTOP_VIEW} {
    font-size: 0.8rem;
  }
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
    threshold: 0.1,
  });

  return (
    <LocallityHeroBanner />
  );
};

export default Banner;
