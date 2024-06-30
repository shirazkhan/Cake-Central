import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import { SECONDARY_THEME_COLOR } from '../GlobalVariables';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  width: 80%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  margin-top: -75px;
  z-index: 3;
  position: relative;
`;

const Subtitle = styled.h2`
  color: #f06292;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const FunFact = styled.div`
  background: #fce4ec;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const PostcodeSection = styled.div`
  margin-top: 20px;
`;

const PostcodeTitle = styled.h3`
  color: #f06292;
`;

const PostcodeList = styled.ul`
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
  list-style-type: none;
  padding-left: 0;
`;

const PostcodeItem = styled.li`
  margin-bottom: 5px;
`;

const DeliveryPolicy = () => {
  const postcodes = [
    'DE7', 'DE72', 'DE74', 'DE75', 'DN22', 
    'LE1', 'LE2', 'LE4', 'LE5', 'LE6', 'LE7', 'LE8', 'LE11', 'LE12', 'LE13', 'LE14', 'LE15', 'LE16', 
    'LE21', 'LE41',
    'LN1', 'LN2', 'LN3', 'LN4', 'LN5', 'LN6', 'LN9', 'LN10',
    'NG1', 'NG2', 'NG3', 'NG4', 'NG5', 'NG6', 'NG7', 'NG8', 'NG9', 
    'NG10', 'NG11', 'NG12', 'NG13', 'NG14', 'NG15', 'NG16', 'NG17', 'NG18', 'NG19', 
    'NG20', 'NG21', 'NG22', 'NG23', 'NG24', 'NG25', 
    'NG31', 'NG32', 'NG33', 'NG34', 
    'NG70', 'NG80', 'NG90',
    'NN17', 'NN18',
    'PE1', 'PE2', 'PE3', 'PE4', 'PE5', 'PE6', 'PE8', 'PE9', 'PE10', 'PE11', 'PE12', 
    'PE20', 'PE21', 'PE22'
  ];

  return (
    <div>
      <Banner
        backgroundImage="/patterns/sprinkles.svg"
        title="Delivery Policy"
        description="Welcome to our Delivery Policy! We're thrilled to share our delightful treats with you. Here's everything you need to know about how we deliver our cakes, cookies, brownies, and cupcakes."
      />

      <Container>
        <Subtitle>Cookies and Brownies: Freshly Baked and Speedily Shipped!</Subtitle>
        <List>
          <ListItem><strong>Shipping:</strong> Our scrumptious cookies and brownies are baked fresh and shipped via Royal Mail or DPD, depending on the quantity.</ListItem>
          <ListItem><strong>Delivery Time:</strong> We ship these goodies as soon as possible to ensure they arrive fresh and delicious at your doorstep.</ListItem>
          <ListItem><strong>Packaging:</strong> Each order is carefully packaged to ensure your treats arrive in perfect condition.</ListItem>
        </List>

        <Subtitle>Fresh Cakes and Cupcakes: Baked with Love, Delivered with Care</Subtitle>
        <List>
          <ListItem><strong>Made from Scratch:</strong> Every cake and cupcake is made fresh from scratch with the finest ingredients.</ListItem>
          <ListItem><strong>Pickup Options:</strong> Due to their delicate nature, fresh cakes and cupcakes can't be delivered by regular courier services. They must be collected from our premises or delivered within a 30-mile radius of Grantham (NG31).</ListItem>
          <ListItem><strong>Delivery Options:</strong> We do offer delivery within a 30-mile radius of Grantham (NG31). Please contact us to discuss delivery arrangements.</ListItem>
        </List>

        <FunFact>Fun Fact: Did you know that our cakes are made with the same love and care as our cookies and brownies? Each cake is a piece of art, crafted to perfection!</FunFact>

        <PostcodeSection>
          <PostcodeTitle>Delivery Areas</PostcodeTitle>
          <PostcodeList>
            {postcodes.map((postcode, index) => (
              <PostcodeItem key={index}>{postcode}</PostcodeItem>
            ))}
          </PostcodeList>
        </PostcodeSection>
        
        <FunFact>If you don't see your postcode listed but think you're close by, give us a shout! We'll do our best to help you out!</FunFact>      
        
        <Subtitle>Contact Us</Subtitle>
        <Paragraph>If you have any questions or need further assistance, feel free to <a href="mailto:contact@cakecentral.com">contact us</a>. We're here to help and make your experience delightful!</Paragraph>
      </Container>
    </div>
  );
}

export default DeliveryPolicy;
