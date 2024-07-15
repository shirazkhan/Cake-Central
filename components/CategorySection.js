import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { DESKTOP_VIEW, PRIMARY_BANNER_COLOR, PRIMARY_BUTTON_COLOR, PRIMARY_THEME_COLOR } from '../GlobalVariables';

const Container = styled.div`
  width: 100%;
  margin: 40px 0;
`;

const Title = styled.h3`
  margin: 10px auto;
  text-align: center;
  padding: 0;
  font-size: 1.5em;
  color: ${PRIMARY_THEME_COLOR};
  text-shadow: 1px 1px 1px lightgrey;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${DESKTOP_VIEW} {
    padding: 20px;
  }
`;

const CategoryItem = styled(motion(Link))`
  position: relative;
  color: white;
  width: 100%;
  height: 300px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: 600;
  color: white
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (min-width: 768px) {
    width: 45%;
    height: 300px;
  }

  ${DESKTOP_VIEW} {
    width: 30%;
    height: 300px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const TextOverlay = styled.div`
  z-index: 1;
  color: white;
`;

const categories = [
  { name: 'Brownies & Blondies', imageUrl: '/temp/brownies.jpeg', link: '/shop/brownies-and-blondies' },
  { name: 'Cookies', imageUrl: '/temp/cookies.jpeg', link: '/shop/cookies' },
];

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20
};

const CategorySection = () => {
  return (
    <Container>
      <Title>Shop Our Nationwide Range:</Title>
      <ItemsWrapper>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            href={category.link}
            whileHover={{ scale: 1.05 }}
            transition={springTransition}
          >
            <Image
              src={category.imageUrl}
              alt={`${category.name} image`}
              layout="fill"
              objectFit="cover"
              quality={1}
              style={{ borderRadius: '10px' }}
            />
            <ImageOverlay>
              <TextOverlay>{category.name}</TextOverlay>
            </ImageOverlay>
          </CategoryItem>
        ))}
      </ItemsWrapper>
    </Container>
  );
};

export default CategorySection;
