import React from 'react';
import styled from 'styled-components';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR, WEBSITE_WIDTH } from '../GlobalVariables';
import Faq from '../components/Faq';

const PosterTitle = styled.div`
    width: 100%;
    height: 600px;
    background: ${SECONDARY_THEME_COLOR};
    display: flex;
    flex-direction: column-reverse;
    font-size: 1.2em;

    ${DESKTOP_VIEW}{
        width: 100%;
        height: 500px;
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
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    ${DESKTOP_VIEW}{
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

const Description = styled.p`

`;

const CategoryTitle = styled.h2`
    margin-bottom: 10px;
    margin-left: 10px;
    max-width: 1000px;
    width: 100%;
`;

const Container = styled.div`
    max-width: ${WEBSITE_WIDTH};
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 25px;
    border: 1px solid red;
    width: 100%;
`;

const Category = styled.div`
    height: 60px;
    width: 200px;
    border: 2px solid ${PRIMARY_THEME_COLOR}90;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`;

const questions = {
  'Delivery and Pickup': [
    {
      question: 'Do You Deliver?',
      answer: 'Yes, we offer delivery services. Please contact us for more details on delivery options and fees.'
    },
    {
      question: 'Can I Collect Later Than My Time Slot?',
      answer: 'We try to be flexible with pickup times. Please let us know in advance if you need to adjust your pickup time.'
    },
    {
      question: 'Can I Get My Cake With Less Than 3 Days Notice?',
      answer: 'We recommend placing orders at least three days in advance. For last-minute orders, please contact us to check availability.'
    }
  ],
  'Cake Options and Customization': [
    {
      question: 'What Flavours Do You Offer?',
      answer: 'We offer a wide variety of flavors. Please visit our website or contact us for a full list of available flavors.'
    },
    {
      question: 'Do You Cater For Allergies?',
      answer: 'Yes, we can accommodate various allergies and dietary restrictions. Please inform us when placing your order.'
    },
    {
      question: 'Do You Provide Cake Stands And Knives?',
      answer: 'Yes, we provide cake stands and knives upon request. Please let us know your requirements when ordering.'
    },
    {
      question: 'I Have No Idea What Type Of Cake I Would Like – Can You Help?',
      answer: 'Absolutely! We are happy to assist you in choosing the perfect cake based on your preferences and occasion.'
    },
    {
      question: 'Can You Copy A Cake Exactly?',
      answer: 'We strive to replicate cakes as closely as possible. Please provide us with detailed photos and descriptions.'
    },
    {
      question: 'How Much Notice Do You Need?',
      answer: 'We typically require at least three days\' notice for orders. Larger or more complex cakes may require more time.'
    },
    {
      question: 'What’s The Smallest / Largest Cake You Do?',
      answer: 'We offer a variety of cake sizes to suit different occasions. Please contact us to discuss your specific requirements.'
    },
    {
      question: 'Do You Have A Minimum Order Amount For Cupcakes, Brownies, Biscuits Etc?',
      answer: 'Yes, we have minimum order amounts for these items. Please contact us for details on specific minimums.'
    },
    {
      question: 'Are Your Cakes Halal?',
      answer: 'Yes, our cakes are Halal certified. Please let us know if you have any dietary requirements or concerns.'
    },
    {
      question: 'What Floral Options Do You Have For Cakes?',
      answer: 'We offer a variety of floral decorations for cakes. Contact us to discuss your preferences and options.'
    },
    {
      question: 'Can I Have Different Flavours In Each Tier Of My Cake?',
      answer: 'Yes, you can choose different flavors for each tier of your cake to cater to different tastes.'
    }
  ],
  'Orders and Payments': [
    {
      question: 'Do You Require A Deposit?',
      answer: 'Yes, we require a deposit to confirm your order. The deposit amount will be discussed during the ordering process.'
    },
    {
      question: 'How Should I Pay?',
      answer: 'We accept various payment methods including credit/debit cards, bank transfers, and cash. Please choose your preferred method.'
    },
    {
      question: 'Can I Make Last Minute Changes To The Cake?',
      answer: 'We will do our best to accommodate last-minute changes. Please contact us as soon as possible to discuss any modifications.'
    }
  ],
  'Storage and Maintenance': [
    {
      question: 'How Should I Store My Cake?',
      answer: 'To keep your cake fresh, store it in a cool, dry place away from direct sunlight. Refrigeration may be recommended for certain cakes.'
    },
    {
      question: 'How Tall Are Your Cakes?',
      answer: 'Our cakes vary in height depending on the design and number of tiers. Contact us for specific details on cake heights.'
    }
  ],
  'Additional Services': [
    {
      question: 'Do You Offer Cake Decorating Classes?',
      answer: 'Yes, we offer cake decorating classes. Visit our website or contact us for class schedules and availability.'
    },
    {
      question: 'Do You Do Edible Prints And Glitter Toppers To Purchase?',
      answer: 'Yes, we provide edible prints and glitter toppers for cakes. Contact us for more information on available designs.'
    }
  ],
  'Changes and Cancellations': [
    {
      question: 'Can I Return My Cake If I Don’t Want It Anymore?',
      answer: 'Unfortunately, we do not accept returns on cakes. Please contact us if there are any issues with your order.'
    }
  ]
};

const Faqs = () => {
  return (
    <>
      <PosterTitle>
        <Section>
          <TextWrapper>
            <Title>FAQs</Title>
            <Description>Got a question about your Cake Central order? Dive into our FAQs below – your answer might be waiting for you in there!</Description>
            <Description>If you don’t spot what you’re looking for, no worries! We’re excited to help, so feel free to reach out to us anytime.</Description>
          </TextWrapper>
        </Section>
        <Section style={{backgroundImage: 'url("/sprinkles.svg")',}}>
        </Section>
      </PosterTitle>
      <Container>
        {/*<CategoryContainer>
          <Category>Delivery & Pickup</Category>
          <Category>Cake Options & Customization</Category>
          <Category>Orders & Payment</Category>
          <Category>Cake Care</Category>
          <Category>Changes & Cancellations</Category>
          <Category>Additional Services</Category>
          </CategoryContainer> */}

        {/* Render FAQAccordion for each category */}
        {Object.entries(questions).map(([category, questionsArray]) => (
          <div style={{width: '100%', margin: '0 auto'}} key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <Faq questions={questionsArray} />
          </div>
        ))}
      </Container>
    </>
  );
}

export default Faqs;
