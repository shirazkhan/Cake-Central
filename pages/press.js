import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import { WEBSITE_WIDTH, PRIMARY_THEME_COLOR } from '../GlobalVariables';

const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
  margin-top: -50px;
  position: relative;
  z-index: 2;
  font-size: 1.2em;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 60px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: ${PRIMARY_THEME_COLOR};
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 10px;
`;

const ContactDetail = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  color: ${PRIMARY_THEME_COLOR};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const PressEnquiriesPage = () => {
  return (
    <>
      <Banner
        backgroundImage="/sprinkles.svg"
        title="Press Enquiries"
        description="Welcome to Cake Central's Press Enquiries Page. Find information for journalists, bloggers, and media professionals here."
      />
      <Container>
        <Section>
          <Title>Contact Information</Title>
          <ContactInfo>
            <ContactTitle>PR & Media Enquiries</ContactTitle>
            <ContactDetail>
              For media inquiries, interviews, and requests, please contact:
              <br />
              <ContactLink href="mailto:press@cakecentral.co.uk">press@cakecentral.co.uk</ContactLink>
            </ContactDetail>
          </ContactInfo>
          <ContactInfo>
            <ContactTitle>General Enquiries</ContactTitle>
            <ContactDetail>
              For general information about Cake Central, please contact:
              <br />
              <ContactLink href="mailto:info@cakecentral.co.uk">info@cakecentral.co.uk</ContactLink>
            </ContactDetail>
          </ContactInfo>
        </Section>
        <Section>
          <Title>About Cake Central</Title>
          <p>
            Cake Central is a leading provider of bespoke cakes, specializing in creating
            delicious and beautifully designed cakes for all occasions. Founded with a passion
            for baking and creativity, Cake Central has grown into a beloved brand known for
            its quality, innovation, and dedication to customer satisfaction.
          </p>
          <p>
            Whether it's weddings, birthdays, corporate events, or other special occasions, we
            are committed to delivering cakes that not only taste exceptional but also serve as
            a centerpiece of joy and celebration.
          </p>
        </Section>
        <Section>
          <Title>Press Kit</Title>
          <p>
            For journalists and bloggers looking to learn more about Cake Central, our press kit
            provides comprehensive information about our company, including key milestones, notable
            achievements, and high-resolution images of our cakes.
          </p>
          <p>
            To request our press kit or additional media resources, please contact us at
            <br />
            <ContactLink href="mailto:press@cakecentral.com">press@cakecentral.com</ContactLink>.
          </p>
        </Section>
        <Section>
          <Title>Media Coverage</Title>
          <p>
            Discover what the media is saying about Cake Central. From feature stories to reviews
            and mentions, explore how our cakes have made headlines and delighted customers across
            various platforms.
          </p>
          <p>
            Stay updated with our latest media coverage by following us on social media:
            <br />
            <ContactLink href="https://facebook.com/cakecentraluk">Facebook</ContactLink>,{' '}
            <ContactLink href="https://tiktok.com/@cakecentraluk">TikTok</ContactLink>,{' '}
            <ContactLink href="https://instagram.com/cakecentraluk">Twitter</ContactLink>,{' '}
            <ContactLink href="https://x.com/cakecentraluk">X</ContactLink>
          </p>
        </Section>
      </Container>
    </>
  );
};

export default PressEnquiriesPage;
