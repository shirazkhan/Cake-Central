import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #FFABBB;
  text-align: center;
`;

const Logo = styled.img`
  width: 80%;
  max-width: 800px;
  filter: drop-shadow( 1px 1px 4px rgba(0, 0, 0, 0.3));
`;

const Title = styled(motion.h1)`
  color: #FFABBB;
  font-size: 3em;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #333;
  font-size: 1.2em;
  width: calc(100% - 100px);
  margin: 20px auto;
  color: white;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);

`;

const Subscribe = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 2px solid #88CBEB;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #88CBEB;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #76B3D7;
  }
`;

const Contact = styled.p`
  margin-top: 20px;
  color: #333;
`;

const Link = styled.a`
  color: #88CBEB;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <Container>
      <Logo src="/logos/svg/CakeCentral-Logo-White-Full.svg" alt="Cake Central Logo" />
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Coming Soon
      </Title>
      <Description>We're baking something sweet and will be here soon. Stay tuned!</Description>
      <Subscribe>
        <Description>Enter your email to get notified when we launch:</Description>
        <form action="subscribe.php" method="post">
          <Input type="email" name="email" placeholder="Your Email Address" required />
          <Button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Notify Me
          </Button>
        </form>
      </Subscribe>
      <Contact>Contact us at <Link href="mailto:info@cakecentral.co.uk">info@cakecentral.co.uk</Link></Contact>
    </Container>
  );
};

export default App;
