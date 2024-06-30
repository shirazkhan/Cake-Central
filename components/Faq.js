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
  color: black; /* Font color changed to black */
  cursor: pointer;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${PRIMARY_THEME_COLOR};
  }
`;

const AccordionContent = styled(motion.div)`
  overflow: hidden;
`;

const Answer = styled.p`
  margin: 10px 0;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 5px;
`;

const ToggleIcon = styled.svg`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
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
            initial={{ backgroundColor: `${PRIMARY_THEME_COLOR}40` }}
            whileHover={{ scale: 1.05, backgroundColor: `${PRIMARY_THEME_COLOR}` }} /* Bouncy hover animation */
            whileTap={{ scale: 0.95 }} /* Scale down slightly on tap */
            transition={{ type: 'spring', stiffness: 800, damping: 100 }} /* Spring animation settings */
          >
            <ToggleIcon
              viewBox="0 0 24 24"
              initial={{ rotate: 0 }}
              animate={{ rotate: activeIndex === index ? 25 : 0 }} /* Rotate to 45 degrees when active */
              transition={{ type: 'spring', stiffness: 400, damping: 20 }} /* Bouncy animation */
            >
              {/* Plus icon */}
              <svg><line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" />
              <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" /></svg>
            </ToggleIcon>
            <span style={{ marginLeft: '10px', flex: 1 }}>{item.question}</span>
          </AccordionTitle>
          <AccordionContent
            initial={{ height: 0 }}
            animate={{ height: activeIndex === index ? 'auto' : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }} /* Bouncy animation for content */
          >
            <Answer>{item.answer}</Answer>
          </AccordionContent>
        </div>
      ))}
    </AccordionSection>
  );
};

export default FAQAccordion;
