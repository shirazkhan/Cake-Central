import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import Banner from '../components/Banner';
import { PRIMARY_THEME_COLOR, WEBSITE_WIDTH, WEBSITE_NAME } from '../GlobalVariables';
import { useInView } from 'react-intersection-observer';

const Container = styled.div`
  max-width: ${WEBSITE_WIDTH};
  margin: 50px auto;
  padding: 0 20px;
  margin-top: -150px;
  position: relative;
  z-index: 2;
`;

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column-reverse; /* Start with column-reverse for mobile */
  align-items: center;
  padding: 40px;
  margin: 100px auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 1000px;

  @media (min-width: 768px) {
    flex-direction: ${({ index }) => (index % 2 === 0 ? 'row-reverse' : 'row')};
    justify-content: space-between;
    text-align: left;
    align-items: flex-start;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin: 0 40px;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
  color: ${PRIMARY_THEME_COLOR};

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.6;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px; /* Adjust height as needed */
  border-radius: 8px;
  margin: 20px auto;

  @media (min-width: 768px) {
    margin: 0;
  }
`;


const QuoteSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 100px 0;
  background-color: #ffcccb; /* Pink background color */
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;
  position: relative;
  margin: 100px auto;
  max-width: 800px;

  @media (min-width: 768px) {
    padding: 60px;
  }

  &:after {
    content: '';
    position: absolute;
    top: -20px; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 20px 20px 20px;
    border-style: solid;
    border-color: transparent transparent #ffcccb transparent; /* Pink color for the triangle */
  }
`;

const QuoteText = styled.p`
  font-size: 1.5em;
  font-style: italic;
  margin-bottom: 20px;
  color: #333;
`;

const StoryPage = () => {
  const controlsSection1 = useAnimation();
  const controlsSection2 = useAnimation();
  const controlsSection3 = useAnimation();
  const controlsImage1 = useAnimation();
  const controlsImage2 = useAnimation();
  const controlsImage3 = useAnimation();
  const controlsQuote1 = useAnimation(); // Separate animation control for first quote
  const controlsQuote2 = useAnimation(); // Separate animation control for second quote

  const [refSection1, inViewSection1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const [refSection2, inViewSection2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  const [refSection3, inViewSection3] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const [refImage1, inViewImage1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const [refImage2, inViewImage2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const [refImage3, inViewImage3] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const [refQuote1, inViewQuote1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const [refQuote2, inViewQuote2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  useEffect(() => {
    if (inViewSection1) {
      controlsSection1.start('visible');
    }
  }, [controlsSection1, inViewSection1]);

  useEffect(() => {
    if (inViewSection2) {
      controlsSection2.start('visible');
    }
  }, [controlsSection2, inViewSection2]);

  useEffect(() => {
    if (inViewSection3) {
      controlsSection3.start('visible');
    }
  }, [controlsSection3, inViewSection3]);

  useEffect(() => {
    if (inViewImage1) {
      controlsImage1.start('visible');
    }
  }, [controlsImage1, inViewImage1]);

  useEffect(() => {
    if (inViewImage2) {
      controlsImage2.start('visible');
    }
  }, [controlsImage2, inViewImage2]);

  useEffect(() => {
    if (inViewImage3) {
      controlsImage3.start('visible');
    }
  }, [controlsImage3, inViewImage3]);

  useEffect(() => {
    if (inViewQuote1) {
      controlsQuote1.start('visible');
    }
  }, [controlsQuote1, inViewQuote1]);

  useEffect(() => {
    if (inViewQuote2) {
      controlsQuote2.start('visible');
    }
  }, [controlsQuote2, inViewQuote2]);

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring' } },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <Head>
        <title>Our Story | {WEBSITE_NAME}</title>
        <meta name="description" content="Learn about our journey and passion for creating exceptional cakes. Meet the team behind the magic." />
        <meta name="keywords" content="our story, about us, cake business, bakery journey" />
      </Head>
      <Banner
        backgroundImage="/patterns/sprinkles.svg"
        title="Sweet Beginnings: Our Joyful Journey"
        description="Embark on our delightful tale—from a passion for cakes to creating a family-centered business and dreaming of a sweeter future."
      />
      <Container>
        <Section
          ref={refSection1}
          initial="hidden"
          animate={controlsSection1}
          variants={sectionVariants}
          index={1}
        >
          <TextWrapper>
            <Title>Inspiration Strikes</Title>
            <Paragraph>
              Our journey began with a deep-seated passion for baking and a creative spark that ignited within us. Coming from a diverse background, we found solace and joy in creating delightful cakes for friends and family.
            </Paragraph>
            <Paragraph>
              Moving to Grantham opened our eyes to a warm and supportive community, where the idea of bringing high-quality, personalized cake services to the area began to take root.
            </Paragraph>
          </TextWrapper>
          <ImageContainer ref={refImage1}>
            <motion.div
              initial="hidden"
              animate={controlsImage1}
              variants={imageVariants}
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
            <Image
              src="/images/pink-off-white-drip-flower-cake.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Picture of the author"
              style={{borderRadius: '8px'}}
            />
            </motion.div>
            
          </ImageContainer>
        </Section>
        <QuoteSection
          ref={refQuote1}
          initial="hidden"
          animate={controlsQuote1}
          variants={quoteVariants}
        >
          <QuoteText>"From a young age, I was captivated by the art of baking, spending countless hours in my parents' kitchen crafting cakes and experimenting with flavors to surprise my loved ones. Turning this passion into a thriving family-centered business in Grantham has been an incredible journey."</QuoteText>
        </QuoteSection>
        <Section
          ref={refSection2}
          initial="hidden"
          animate={controlsSection2}
          variants={sectionVariants}
          index={2}
        >
          <TextWrapper>
            <Title>Family-Centered Joy</Title>
            <Paragraph>
              Today, our passion for baking has blossomed into a thriving family-centered business. Every day, we delight in crafting cakes that not only taste delicious but also celebrate life's special moments.
            </Paragraph>
            <Paragraph>
              Our family plays a crucial role in every aspect of our business—from recipe creation to customer service—ensuring each cake reflects our dedication to quality and creativity.
            </Paragraph>
          </TextWrapper>
          <ImageContainer ref={refImage2}>
            <motion.div
              initial="hidden"
              animate={controlsImage2}
              variants={imageVariants}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Image
                src="/images/chocolate-fruit-cream-cupcakes.jpeg"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
                style={{borderRadius: '8px'}}
              />
            </motion.div>
          </ImageContainer>
        </Section>
        <QuoteSection
          ref={refQuote2}
          initial="hidden"
          animate={controlsQuote2}
          variants={quoteVariants}
        >
          <QuoteText>Our commitment to delivering high-quality, bespoke cakes has set us apart, and I’m confident that we’re on the path to becoming a beloved name nationwide. I’m excited about the delicious adventures ahead and all the sweet moments we’ll create together!"</QuoteText>
        </QuoteSection>
        <Section
          ref={refSection3}
          initial="hidden"
          animate={controlsSection3}
          variants={sectionVariants}
          index={3}
        >
          <TextWrapper>
            <Title>Sweet Dreams Ahead</Title>
            <Paragraph>
              Looking ahead, we envision expanding our reach beyond Grantham, spreading joy and sweetness to more communities. Our dream is to establish ourselves as a trusted name in the industry, known for our unique flavors, impeccable service, and heartfelt approach.
            </Paragraph>
            <Paragraph>
              With our commitment to continuous improvement and innovation, we are excited to embark on new adventures and create unforgettable experiences for our customers, one delicious cake at a time.
            </Paragraph>
          </TextWrapper>
          <ImageContainer ref={refImage3}>
          <motion.div
              initial="hidden"
              animate={controlsImage3}
              variants={imageVariants}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Image
                src="/images/sugar-petals-wedding-cake.jpeg"
                layout="fill"
                objectFit="cover"
                alt="Picture of the author"
                style={{borderRadius: '8px'}}
              />
            </motion.div>
          </ImageContainer>
        </Section>
      </Container>
    </>
  );
};

export default StoryPage;
