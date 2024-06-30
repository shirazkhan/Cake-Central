import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Banner from '../components/Banner';
import { PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR, WEBSITE_WIDTH } from '../GlobalVariables';

const Container = styled.div`
  max-width: ${WEBSITE_WIDTH};
  margin: 50px auto;
  padding: 0 20px;
  margin-top: -75px;
  position: relative;
  z-index: 2;
  font-size: 1.2em;
`;

const Section = styled(motion.section)`
  padding: 40px;
  margin-bottom: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const TextWrapper = styled.div`
  width: 75%;
  text-align: center;
  max-width: 600px;
  font-size: 1.2em;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
  color: ${PRIMARY_THEME_COLOR}; /* Changed title color to primary theme color */
`;

const Description = styled.p`
  
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Paragraph = styled.p`
  max-width: 800px;
  text-align: center;
  line-height: 1.6;
`;

const List = styled.ul`
  max-width: 800px;
  margin: 20px auto;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: disc;
  margin-left: 20px;
`;

const ParallaxContainer = styled.div`
  perspective: 150px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ParallaxLayer = styled.div`
  position: relative;
  z-index: ${(props) => props.layerIndex};
`;

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const RefundPolicy = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
  });

  return (
    <ParallaxContainer>
      <Banner
        backgroundImage="/patterns/sprinkles.svg"
        title="Refund/Refund Policy"
        description="We want every moment with our cakes and treats to be joyful. Here's our refund policy to ensure you have a delightful experience with us."
      />
      <Container>
        <ParallaxLayer layerIndex={1}>
          <Section>
            <Title>Refund/Refund Policy</Title>
            <Content>
              <Paragraph>
                We want every moment with our cakes and treats to be joyful. Here's our refund policy to ensure you have a delightful experience with us:
              </Paragraph>
              <List>
                <ListItem>Non-Perishable items may be returned within 30 days of date of purchase. Perishable goods such as food and gift cards unfortunately cannot be returned.</ListItem>
                <ListItem>If you aren't satisfied with the condition of a food product that you receive from us following an online purchase, please contact us immediately using the Contact Form with full feedback and attached pictures of the product you received.</ListItem>
                <ListItem>Refunds (if applicable) will be processed to your original method of payment within a certain amount of days.</ListItem>
                <ListItem>We do not offer refunds if we have warned you of postal delays in your area and you proceed with placing an order.</ListItem>
                <ListItem>Errors such as entering the wrong address by the customer are not eligible for a refund. However, we can arrange a replacement order if new delivery address details are provided at least 1 day before the selected delivery date.</ListItem>
              </List>
              <Paragraph>
                Inscription orders with offensive, obscene, or hateful language will not be fulfilled. Selection Boxes are subject to availability.
              </Paragraph>
            </Content>
          </Section>
        </ParallaxLayer>
        <ParallaxLayer layerIndex={2}>
          <Section
            ref={ref1}
            variants={variants}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
          >
            <Title>Need Help?</Title>
            <Content>
              <Paragraph>
                If you have any questions or need further assistance regarding our refund policy, please don't hesitate to <a href="/contact">contact us</a>. We're here to ensure every slice of joy is perfect!
              </Paragraph>
            </Content>
          </Section>
        </ParallaxLayer>
      </Container>
    </ParallaxContainer>
  );
};

export default RefundPolicy;
