import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR, SECONDARY_THEME_COLOR, WEBSITE_WIDTH, WEBSITE_NAME } from '../GlobalVariables';
import Faq from '../components/Faq';
import Banner from '../components/Banner';

const Section = styled.section`
  margin: 25px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  font-size: 1.2em;
  max-width: 1000px;
  background-color: #f9f9f9;
  width: 80%;
`;

const CategoryTitle = styled.h2`
    margin-bottom: 50px;
    max-width: 1000px;
    width: 100%;
`;

const Container = styled.div`
    max-width: ${WEBSITE_WIDTH};
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    position: relative;
    z-index: 2;
    font-size: 1em;
`;



const questions = {
  'Delivery and Pickup': [
    {
      question: 'Do You Deliver?',
      answer: `Yes, we offer delivery services. Please contact us for more details on delivery options and fees.`
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
      answer: 'We offer a wide variety of flavors. Please contact us for a full list of available flavors.'
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
    },
    {
      question: 'Can I Collect Later Than My Time Slot?',
      answer: 'We try to be flexible with pickup times. Please let us know in advance if you need to adjust your pickup time.'
    },
    {
      question: 'Can I Add Extra Items To My Order?',
      answer: 'Yes, you can add items to your order if requested at least 5 days prior the delivery or collection date. Additional items are subject to availability and may require extra payment.'
    },
    {
      question: 'What If I Need To Change The Design Or Flavor Of My Cake?',
      answer: 'Design and flavor changes can be requested up to 5 days before the delivery or collection date. However, changes may incur an additional charge depending on the complexity or ingredients.'
    },
    {
      question: 'Do You Charge A Fee For Cancellations?',
      answer: 'No fee is charged for cancellations made at least 7 days before the delivery or collection date. Cancellations made within 7 days are non-refundable.'
    },
    {
      question: 'Can I Cancel My Order If I’ve Already Paid A Deposit?',
      answer: 'Deposits are non-refundable for cancellations made within 7 days of the scheduled delivery or collection date. For cancellations made before this period, your deposit will be refunded in full.'
    },
    {
      question: 'What Happens If I Need To Cancel Due To Unforeseen Circumstances?',
      answer: 'We understand that situations may arise unexpectedly. Please contact us as soon as possible, and we’ll do our best to accommodate you. Refunds or rescheduling options will depend on the timing of your request.'
    },
    {
      question: 'Can Someone Else Collect My Order On My Behalf?',
      answer: 'Yes, someone else can collect your order. Please provide us with their name and contact information in advance to ensure a smooth handover.'
    },
    {
      question: 'What If I Need To Change The Delivery Address?',
      answer: 'Delivery address changes must be made at least 72 hours before the delivery date. If the new address is outside our delivery range, we may need to charge a delivery fee.'
    }
    
  ]
};

const Faqs = () => {
  return (
    <>
    <Head>
  <title>FAQs | {WEBSITE_NAME}</title>
  <meta name="description" content="Find answers to frequently asked questions about our cakes, ordering process, delivery, and more." />
  <meta name="keywords" content="FAQs, cake delivery questions, cake ordering, cake policy" />
</Head>
    <Banner
        backgroundImage="/patterns/sprinkles.svg"
        title="FAQs"
        description="Got a question about your Cake Central order? Dive into our FAQs below – your answer might be waiting for you in there!"
      />
      <Container>
        {Object.entries(questions).map(([category, questionsArray]) => (
          <Section key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <Faq questions={questionsArray} />
          </Section>
        ))}
      </Container>
    </>
  );
}

export default Faqs;
