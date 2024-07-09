import React from 'react';
import styled from 'styled-components';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR } from '../GlobalVariables';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${PRIMARY_THEME_COLOR};
  width: 100%;
  border-radius: 20px;
  margin: 20px auto;
  
  ${DESKTOP_VIEW} {
    flex-direction: row;
    height: 500px;
  }
`;

const BannerImageContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  ${DESKTOP_VIEW} {
    flex: 1;
    height: 100%;
  }
`;

const BannerContent = styled.div`
  flex: 1;
  color: white;
  text-align: center;
  padding: 20px;

  ${DESKTOP_VIEW} {
    text-align: left;
    padding: 20px 40px;
  }
`;

const Title = styled.h1`
  font-size: 1.8em;
  margin-bottom: 20px;

  ${DESKTOP_VIEW} {
    font-size: 2.5em;
  }
`;

const Description = styled.p`
  font-size: 1em;
  margin-bottom: 30px;

  ${DESKTOP_VIEW} {
    font-size: 1.2em;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Banner = ({location}) => {
  return (
    <BannerContainer>
      <BannerContent>
        <Title>Brownies, Blondies and Cookies delivered in {location}</Title>
        <Description>
          Cake Central is a family-run business from Grantham providing the best custom-made wedding cakes, birthday cakes, and celebration cakes across the UK. We specialize in artisan, handmade fondant and buttercream cakes and go above and beyond with our realistic cakes. No cake is too big and no occasion is too small!
        </Description>
      </BannerContent>
      <BannerImageContainer>
        <BannerImage src="/temp/cookies.jpeg" alt="Celebration Cakes" />
      </BannerImageContainer>
    </BannerContainer>
  );
};

export default Banner;
