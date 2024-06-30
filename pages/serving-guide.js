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
`;

const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const TextWrapper = styled.div`
  width: 75%;
  text-align: center;
  max-width: 600px;
  font-size: 1.2em;
`;

const Title = styled.h2`
  margin: 20px 0 10px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  line-height: 1em;
  font-size: 2em;
  color: ${PRIMARY_THEME_COLOR}; /* Changed title color to primary theme color */
`;

const Description = styled.p`
  
`;

const ServingGuideTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TableHead = styled.th`
  background-color: ${PRIMARY_THEME_COLOR};
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ServingGuide(props) {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
  });

  const [ref5, inView5] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust the rootMargin as needed
  });

  return (
    <>
      <Banner
        backgroundImage="/patterns/sprinkles.svg"
        title="Serving Guide"
        description="Find out how many servings you can get from our delicious cakes! Whether you're planning a birthday party, wedding, or any celebration, we've got you covered."
      />
      <Container>
        <Section>
          <TextWrapper>
            <Title>How Many Servings Do You Need?</Title>
            <Description>Find out how many servings you can get from our delicious cakes!</Description>
            <Description>Whether you're planning a birthday party, wedding, or any celebration, we've got you covered.</Description>
          </TextWrapper>
        </Section>
        <Section
          ref={ref1}
          variants={variants}
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          <Title>Cakes</Title>
          <p>Use our serving guide to determine the perfect cake size for your event.</p>
          <ServingGuideTable>
            <thead>
              <TableRow>
                <TableHead>Size</TableHead>
                <TableHead>Round Cakes</TableHead>
                <TableHead>Square Cakes</TableHead>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>6 inch</TableCell>
                <TableCell>10-12 servings</TableCell>
                <TableCell>12-15 servings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>8 inch</TableCell>
                <TableCell>20-24 servings</TableCell>
                <TableCell>24-30 servings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10 inch</TableCell>
                <TableCell>30-38 servings</TableCell>
                <TableCell>35-45 servings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>12 inch</TableCell>
                <TableCell>40-50 servings</TableCell>
                <TableCell>50-60 servings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>14 inch</TableCell>
                <TableCell>50-60 servings</TableCell>
                <TableCell>60-75 servings</TableCell>
              </TableRow>
            </tbody>
          </ServingGuideTable>
        </Section>
        <Section
          ref={ref2}
          variants={variants}
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          <Title>Wedding Cakes</Title>
          <p>Wedding cakes are customized to your event and typically have larger portions per tier:</p>
          <ServingGuideTable>
            <thead>
              <TableRow>
                <TableHead>Tier</TableHead>
                <TableHead>Servings</TableHead>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>2 Tier</TableCell>
                <TableCell>30-40 servings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3 Tier</TableCell>
                <TableCell>60-80 servings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4 Tier</TableCell>
                <TableCell>100-120 servings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5 Tier</TableCell>
                <TableCell>150-200 servings</TableCell>
              </TableRow>
            </tbody>
          </ServingGuideTable>
        </Section>
        <Section
          ref={ref3}
          variants={variants}
          initial="hidden"
          animate={inView3 ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          <Title>Cupcakes, Brownies & Cookies</Title>
          <p>Our cupcakes, brownies, and cookies are perfect for individual servings. These are quite large. We recommend:</p>
          <ul>
            <li>1-2 cupcakes per person</li>
            <li>1-2 brownies per person</li>
            <li>1-2 cookies per person</li>
          </ul>
        </Section>
        <Section
          ref={ref4}
          variants={variants}
          initial="hidden"
          animate={inView4 ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          <Title>Contact Us</Title>
          <p>If you have any questions or need further assistance, don't hesitate to <a href="/contact">contact us</a>. We're here to help make your celebration as sweet as possible!</p>
        </Section>
      </Container>
    </>
  );
}
