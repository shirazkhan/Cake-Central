import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW, WEBSITE_WIDTH, PRIMARY_BUTTON_COLOR } from '../GlobalVariables';

// Placeholder Image
const PlaceholderImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
`;

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #88CBEB;
  padding: 40px 20px;
  text-align: center;
  color: #113544;
  width: 85%;
  max-width: ${WEBSITE_WIDTH};
  margin: 25px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #113544;

  ${DESKTOP_VIEW} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 30px;
  color: #113544;
  max-width: 1000px;

  ${DESKTOP_VIEW} {
    font-size: 1rem;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProductContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  margin: 10px;

  ${DESKTOP_VIEW} {
    width: 300px;
  }
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  margin: 10px 0;
  color: #113544;

  ${DESKTOP_VIEW} {
    font-size: 1.2rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 0.8rem;
  margin: 5px 0;
  padding: 0 10px;
  color: #113544;

  ${DESKTOP_VIEW} {
    font-size: 0.9rem;
  }
`;

const ShopNowButton = styled(motion.button)`
  background-color: ${PRIMARY_BUTTON_COLOR};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 10px;
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
    threshold: 0.2,
  });

  return (
    <BannerWrapper ref={bannerRef}>
      <motion.div initial="hidden" animate={bannerInView ? "visible" : "hidden"} variants={containerVariants}>
        <Title>What's new from Cake Central?</Title>
        <Description>
          Our bakers at Cake Central make it look like a piece of cake, using high-quality, locally sourced ingredients to create new products and flavours to keep your tastebuds tingling. Have your cake and eat it, too, with the latest additions to the Cake Central family, including the Spiced Pumpkin Latte Cake, Funfetti Cake, and the all-new Christmas Cake.
        </Description>
        <ProductsWrapper>
          {[...Array(3)].map((_, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });
            return (
              <ProductContainer
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
                }}
              >
                <PlaceholderImage />
                <ProductTitle>Product {index + 1}</ProductTitle>
                <ProductDescription>Product Description {index + 1}</ProductDescription>
                <ShopNowButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  SHOP NOW
                </ShopNowButton>
              </ProductContainer>
            );
          })}
        </ProductsWrapper>
      </motion.div>
    </BannerWrapper>
  );
};

export default Banner;
