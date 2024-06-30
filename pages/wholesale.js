import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import { WEBSITE_WIDTH, PRIMARY_THEME_COLOR } from '../GlobalVariables';

const Container = styled.div`
  max-width: ${WEBSITE_WIDTH};
  margin: 50px auto;
  padding: 0 20px;
  margin-top: -75px;
  position: relative;
  z-index: 2;
  font-size: 1.2em;
`;

const Section = styled.section`
  margin-bottom: 60px;
  background-color: #f4f4f4;
  max-width: 1000px;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
  color: ${PRIMARY_THEME_COLOR};
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

const WholesalePage = () => {
  return (
    <>
      <Banner
        backgroundImage="/patterns/sprinkles.svg"
        title="Wholesale Enquiries"
        description="Welcome to Cake Central UK's Wholesale Enquiries Page. Explore wholesale opportunities and place your orders with us."
      />
      <Container>
        <Section>
          <BenefitsContainer>
            <Benefit>
              <Icon src="/icons/elevate-your-menu.svg" alt="Elevate Your Menu Icon" />
              <Title>Elevate Your Menu</Title>
              <Description>
                Transform your restaurant or café’s menu with our exquisite whole cakes,
                patisseries, and renowned afternoon teas. Each treat is crafted using traditional
                methods and the finest ingredients.
              </Description>
            </Benefit>
            <Benefit>
              <Icon src="/icons/attract-more-customers.svg" alt="Attract More Customers Icon" />
              <Title>Attract More Customers</Title>
              <Description>
                Stand out from the competition with our beloved desserts on your menu. Capture
                patrons eager to experience our exquisite quality and elevate your offerings to keep
                customers returning.
              </Description>
            </Benefit>
            <Benefit>
              <Icon src="/icons/handmade-cake.svg" alt="Handmade Excellence Icon" />
              <Title>Handmade Excellence in Every Bite</Title>
              <Description>
                Experience handmade excellence with every bite. Our treats are a testament to
                dedication and expertise, crafted with love to offer unparalleled quality and
                attention to detail.
              </Description>
            </Benefit>
            <Benefit>
              <Icon src="/icons/convenient-ordering.svg" alt="Convenient Ordering Icon" />
              <Title>Convenient Ordering</Title>
              <Description>
                Easily order a variety of our beautiful bakes. Contact us today to learn more about how we
                can assist you.
              </Description>
            </Benefit>
          </BenefitsContainer>
        </Section>

        <Section>
          <Title>Why Choose Cake Central UK?</Title>
          <Description>
          At Cake Central UK, we take pride in offering the highest quality cakes and bakes.
          Our dedication to excellence and customer satisfaction ensures that partnering with us guarantees
          your establishment serves exceptional treats that leave customers eager for more.
          </Description>
        </Section>

        <Section>
          <Title>Request a Sample</Title>
          <Description>
            Interested in trying our products before committing to a wholesale order? Contact us to
            request a sample pack and experience the delicious taste and quality of Cake Central UK
            firsthand.
          </Description>
        </Section>

        <Section>
          <Title>Wholesale Enquiries</Title>
          <p>
            For wholesale sales inquiries and orders, please contact{' '}
            <strong>
              <a href="mailto:wholesale@cakecentral.co.uk">wholesale@cakecentral.co.uk</a>
            </strong>
            .
          </p>
        </Section>
      </Container>
    </>
  );
};

export default WholesalePage;
