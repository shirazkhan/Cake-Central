import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { WEBSITE_WIDTH, PRIMARY_THEME_COLOR, WEBSITE_NAME } from '../GlobalVariables';

const Container = styled.div`
  text-align: left;
  padding: 20px;
  max-width: ${WEBSITE_WIDTH};
  margin: 0 auto;
  font-size: 1.2em;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Main = styled.main`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: ${PRIMARY_THEME_COLOR};
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
`;

const Link = styled.a`
  color: ${PRIMARY_THEME_COLOR};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function PrivacyPolicy(props) {
  return (
    <>
      <Head>
  <title>Privacy Policy | {WEBSITE_NAME}</title>
  <meta name="description" content="Understand how we collect, use, and protect your data through our privacy policy." />
  <meta name="keywords" content="privacy policy, data protection, customer privacy" />
</Head>
      <Container>

        <Main>
          <Section>
            <Title>Introduction to Privacy</Title>
            <Paragraph>
              At Cake Central, we value your privacy. This policy outlines our privacy practices for the Cake Central services and explains how we collect and utilize your personal information. We are committed to keeping your information safe and secure. If you have any concerns or wish to have your details removed, please contact us via email at{' '}
              <Link href="mailto:info@cakecentral.co.uk">info@cakecentral.co.uk</Link>.
            </Paragraph>
          </Section>

          <Section>
            <Title>Notice about Children's Privacy</Title>
            <Paragraph>
              Our services are intended for users aged 18 and above. If you are under 18, you may browse our services but are prohibited from providing any personally identifiable information or making purchases.
            </Paragraph>
          </Section>

          <Section>
            <Title>What Information Do We Collect?</Title>
            <Paragraph>
              Cake Central collects your personal information with your consent. When placing an order, you will be required to provide details such as your full name, a valid email address, complete credit or debit card information, and delivery and billing addresses.
            </Paragraph>
          </Section>

          <Section>
            <Title>Understanding Your Site Visits</Title>
            <Paragraph>
              We may employ various measures to gather information about your online habits to enhance your experience. This may include recording the frequency and scope of your use of our services, the duration of your sessions, the web pages visited, and your IP address.
            </Paragraph>
            <Paragraph>
              Cake Central may collect and organize this information directly or through third-party services, such as Google Analytics.
            </Paragraph>
          </Section>

          <Section>
            <Title>Utilization of Your Personal Information</Title>
            <Paragraph>
              We utilize the information you provide to facilitate smooth transactions. This includes contacting you regarding your orders, providing updates and notifications throughout the order process via email and SMS, and, with your consent, sending marketing information about our products and services.
            </Paragraph>
            <Paragraph>
              We may also use your information to comply with applicable laws, prevent fraud, collect fees, and assist in dispute resolution.
            </Paragraph>
          </Section>

          <Section>
            <Title>Information Sharing</Title>
            <Paragraph>
              Cake Central may occasionally use your data for remarketing and customer feedback efforts. We do not sell, rent, or lease your personally identifiable information to third parties for marketing purposes. However, we may utilize this data to improve customer feedback and remarketing efforts.
            </Paragraph>
            <Paragraph>
              We may request birthdays to enhance our marketing efforts and provide personalized offers.
            </Paragraph>
          </Section>

          <Section>
            <Title>Third-Party Software</Title>
            <Paragraph>
              We utilize various third-party services for website performance, marketing, and remarketing purposes, including Google Analytics, Rakuten, Google Shopping, Klaviyo, and AdRoll. These services may collect data for personalization of ads and marketing communications.
            </Paragraph>
          </Section>

          <Section>
            <Title>Opt Out and Deletion of Personally Identifiable Information</Title>
            <Paragraph>
              You may opt out of Cake Central's mailing lists at any time by contacting our data controller via email. You can also delete your account or request deletion of your personally identifiable information stored on our database. We may retain certain aggregated or anonymized information for statistical and marketing purposes.
            </Paragraph>
          </Section>

          <Section>
            <Title>Information Security</Title>
            <Paragraph>
              Cake Central implements security systems and procedures, such as SSL protocol and encryption, to secure your personal information. While we take measures to reduce security risks, we cannot guarantee absolute security. In the event of a security breach, affected users will be notified.
            </Paragraph>
          </Section>

          <Section>
            <Title>Changes to this Privacy Policy</Title>
            <Paragraph>
              Cake Central may update this policy periodically. Substantial changes will be notified on our services thirty (30) days prior to taking effect. Other changes will be effective seven (7) days after posting unless required by legal obligations.
            </Paragraph>
            <Paragraph>
              If you disagree with any amendments, please refrain from further use of our services.
            </Paragraph>
          </Section>

          <Section>
            <Title>Contact Us</Title>
            <Paragraph>
              For any requests, comments, or questions regarding this privacy policy, please contact Cake Central via email at <Link href="mailto:info@cakecentral.co.uk">info@cakecentral.co.uk</Link>.
            </Paragraph>
          </Section>
        </Main>
      </Container>
    </>
  );
}
