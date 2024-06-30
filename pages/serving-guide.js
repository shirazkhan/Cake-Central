import React from 'react';
import styled from 'styled-components';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR, WEBSITE_WIDTH } from '../GlobalVariables';

const PosterTitle = styled.div`
  width: 100%;
  height: 500px;
  background: ${SECONDARY_THEME_COLOR};
  display: flex;
  flex-direction: column-reverse;

  ${DESKTOP_VIEW} {
    flex-direction: row;
    gap: 75px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  ${DESKTOP_VIEW} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 50%;
  }
`;

const TextWrapper = styled.div`
  width: 75%;
  color: white;
  text-shadow: 1px 1px 3px grey;
  text-align: center;
  max-width: 600px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 1em;
  font-size: 4em;
`;

const Description = styled.p``;

const Container = styled.div`
  max-width: ${WEBSITE_WIDTH};
  margin: 50px auto;
  padding: 0 20px;
`;

const ServingGuideTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
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

export default function ServingGuide(props) {
  return (
    <>
      <PosterTitle>
        <Section>
          <TextWrapper>
            <Title>Serving Guide</Title>
            <Description>Find out how many servings you can get from our delicious cakes!</Description>
            <Description>Whether you're planning a birthday party, wedding, or any celebration, we've got you covered.</Description>
          </TextWrapper>
        </Section>
        <Section style={{ backgroundImage: 'url("/sprinkles.svg")', backgroundPosition: 'center center', backgroundSize: 'cover' }} />
      </PosterTitle>
      <Container>
        <h2>How Many Servings Do You Need?</h2>
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
        <h2>Wedding Cakes</h2>
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
        <h2>Cupcakes, Brownies, and Cookies</h2>
        <p>Our cupcakes, brownies, and cookies are perfect for individual servings. These are quite large. We recommend:</p>
        <ul>
          <li>1-2 cupcakes per person</li>
          <li>1-2 brownies per person</li>
          <li>1-2 cookies per person</li>
        </ul>
        <h2>Contact Us</h2>
        <p>If you have any questions or need further assistance, don't hesitate to <a href="/contact">contact us</a>. We're here to help make your celebration as sweet as possible!</p>
      </Container>
    </>
  );
}
