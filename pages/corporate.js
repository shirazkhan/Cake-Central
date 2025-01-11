import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Banner from '../components/Banner';
import { WEBSITE_WIDTH, PRIMARY_THEME_COLOR, WEBSITE_NAME } from '../GlobalVariables';

const Container = styled.div`
  max-width: ${WEBSITE_WIDTH};
  margin: 50px auto;
  padding: 0 20px;
  margin-top: -150px;
  position: relative;
  z-index: 2;
`;

const Section = styled.section`
  margin: 50px 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  font-size: 1.2em;
  max-width: 1000px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
  color: ${PRIMARY_THEME_COLOR};
  line-height: 1em;
`;

const Text = styled.p`
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.6;
`;

const List = styled.ul`
  margin-bottom: 20px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  max-width: 1000px;
  font-size: 1.2em;
`;

const ContactTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`;

const ContactText = styled.p`
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  color: ${PRIMARY_THEME_COLOR};
  text-decoration: none;
  font-weight: bold;
`;

const CorporatePage = () => {
  return (
    <>
    <Head>
  <title>Corporate Orders | {WEBSITE_NAME}</title>
  <meta name="description" content="Explore our corporate cake options for events, team celebrations, and branded treats." />
  <meta name="keywords" content="corporate cakes, business cakes, branded cakes, corporate events" />
</Head>
      <Banner
        backgroundImage="/patterns/sprinkles.svg"
        title="Corporate Cakes for Your Occasions"
        description="Impress clients, celebrate milestones, or show appreciation to colleagues with our delightful cakes."
      />
      <Container>
        <Section>
          <Title>Why Choose Cake Central?</Title>
          <Text>
            We specialize in crafting bespoke cakes that perfectly match your corporate events. Whether you're looking to customize icing colors, create unique cupcake designs, or add personalized logos, we're here to cater to your needs.
          </Text>
        </Section>
        
        <Section>
          <Title>What We Offer</Title>
          <List>
            <ListItem>Delivery across select locations in the UK, including Lincolnshire, Nottinghamshire, Boston, Peterborough and more.</ListItem>
            <ListItem>Tailored options such as bespoke icing colors to match your corporate branding.</ListItem>
            <ListItem>Customized cupcake designs available with a minimum order and lead time.</ListItem>
          </List>
        </Section>

        <ContactInfo>
          <Title>Corporate Enquiries</Title>
          <ContactText>
            Should you have any questions or special requirements, please contact our cupcake specialists on {' '}
            <ContactLink href="mailto:corporate@cakecentral.co.uk">corporate@cakecentral.co.uk</ContactLink>. We're committed to making your corporate celebrations deliciously memorable.
          </ContactText>
        </ContactInfo>
      </Container>
    </>
  );
};

export default CorporatePage;
