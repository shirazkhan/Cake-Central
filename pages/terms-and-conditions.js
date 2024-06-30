import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { WEBSITE_WIDTH, PRIMARY_THEME_COLOR } from '../GlobalVariables';

const Container = styled.div`
  padding: 20px;
  text-align: left;
  max-width: ${WEBSITE_WIDTH};
  margin: 0 auto;
  font-size: 1.2em;
`;

const Section = styled.section`
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  text-align: left;
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

export default function TermsAndConditions(props) {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Cake Central</title>
      </Head>
      <Container>
        <Section>
          <Title>Terms of Use Agreement</Title>
          <Paragraph>
            Please read carefully the following terms and conditions (the "Terms" or "Terms of Use"), because they constitute a binding agreement between you and Cake Central Limited. By accessing the Website or by using any of its services, you indicate your acceptance to these Terms. If you do not agree with any or all the Terms of Use, you may not access the Website or use any of its services. Please feel free to submit any questions that you may have regarding the Terms to:{' '}
            <Link href="mailto:info@cakecentral.co.uk">info@cakecentral.co.uk</Link>.
          </Paragraph>
        </Section>
        <Section>
          <Title>The Service</Title>
          <Paragraph>
            When using the Website, you may review food and place an order for food and merchandise. Upon completing your order online, Cake Central Limited will review your order and acknowledge receipt with an e-mail message that will be sent to your e-mail address. Please note that Cake Central Limited's e-mail notification does not constitute an acceptance of your order. The execution of your order and the charge of your credit card will be made directly by the venue that you ordered from and will be deemed as an acceptance of your order.
          </Paragraph>
        </Section>
        <Section>
          <Title>Availability</Title>
          <Paragraph>
            Our services are available only to, and may only be used by individuals who can be legally bound by contracts under the applicable law. Each user of the Website must have a valid credit or debit card and a valid e-mail address for contact purposes. Cake Central Limited's services are available only for credit and debit card types which are listed on the Website.
          </Paragraph>
          <Paragraph>
            The Website is not directed to children under the age of 18. If you are under 18 years old, you may browse the Website, however, you may not place an order online or provide Cake Central Limited with any of your personally identifiable information. Cake Central Limited will permanently delete a child’s personally identifiable information if a parent so requests by sending an e-mail to{' '}
            <Link href="mailto:info@cakecentral.co.uk">info@cakecentral.co.uk</Link>.
          </Paragraph>
          <Paragraph>
            We do not sell alcoholic products to persons under the age of 18 as per the Licensing Act 2003. Refusal of store pickup or driver delivery is at our discretion. By placing an order containing alcohol, you confirm that you and the intended recipient(s) are aged 18 years or over.
          </Paragraph>
        </Section>
        <Section>
          <Title>Acceptable Use of the Website</Title>
          <Paragraph>
            Subject to these Terms you may access and use the Website and order online. The following Terms define the acceptable use of the Website. While using the Website you agree to refrain from willfully, or carelessly -
          </Paragraph>
          <ul>
            <li>Interfering with or disrupting the functionality of the Website;</li>
            <li>Disobeying or breaching these Terms or any other applicable instructions conveyed by Cake Central Limited and its officers;</li>
            <li>Violating any applicable local, state, national or international law, statute, ordinance, rule or regulation;</li>
            <li>Impersonating any person or entity, or making any false statement about your identity, employment, agency or affiliation with any person or entity;</li>
            <li>Providing false or misleading credit card details and/or false delivery address when placing an order online;</li>
            <li>Displaying the Website or any part thereof in an exposed or concealed frame;</li>
            <li>Linking to certain elements on the Website independently from the web pages on which they originally appear;</li>
            <li>Emailing, transmitting or otherwise making available any information and materials that infringe third party’s rights, including Intellectual Property Rights;</li>
            <li>Emailing, transmitting or otherwise making available software viruses, Trojan horses, worms and any other malicious applications to computers and networks;</li>
            <li>Emailing, transmitting or otherwise making available any information or material which may constitute or encourage conduct that would constitute a criminal offense or civil wrongdoing or otherwise violates any applicable law;</li>
            <li>Emailing, transmitting or otherwise making available any information or material which may be deemed threatening, abusive, harassing, defamatory, libelous, vulgar, obscene or racially, ethnically or otherwise objectionable.</li>
          </ul>
        </Section>
      </Container>
    </>
  );
}
