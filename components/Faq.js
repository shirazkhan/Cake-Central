import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PRIMARY_THEME_COLOR } from '../GlobalVariables';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  gap: 20px;
`;

const AccordionTitle = styled(motion.div)`
  background: #f1f1f1;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const AccordionContent = styled(motion.div)`
  overflow: hidden;
  height: 0px;
  display: flex;
  align-items: center;
`;

const Answer = styled.p`
  margin: 15px auto 0 auto;
  width: 90%;
`;

const FAQAccordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionSection>
      {questions.map((item, index) => (
        <div key={index}>
          <AccordionTitle
            onClick={() => toggleAccordion(index)}
            initial={{ backgroundColor: `${PRIMARY_THEME_COLOR}50` }}
            whileHover={{ backgroundColor: `${PRIMARY_THEME_COLOR}` }}
            transition={{ duration: 0.3 }}
          >
            {item.question}
          </AccordionTitle>
          <AccordionContent
            initial={{ height: 0 }}
            animate={{ height: activeIndex === index ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Answer>{item.answer}</Answer>
          </AccordionContent>
        </div>
      ))}
    </AccordionSection>
  );
};

export default FAQAccordion;
