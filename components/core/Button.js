import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";  // Still using Next.js's Link component
import { PRIMARY_BUTTON_COLOR, DESKTOP_VIEW } from "../../GlobalVariables";

// StyledButton now uses <button> tag
const StyledButton = styled(motion.button)`
  background-color: ${PRIMARY_BUTTON_COLOR};
  color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-radius: 30px;
  border: none;
  min-width: 150px;
  height: 15px;
  cursor: pointer;
  font-size: 0.9em;
  text-decoration: none;
  margin: 0 auto;

  &:visited {
    color: white;
  }

  ${DESKTOP_VIEW} {
    font-size: 1em;
  }
`;

const Button = ({ href, children, ...props }) => {
  return (
    <Link href={href} passHref> {/* passHref to ensure proper link behavior */}
      <StyledButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        {...props}
      >
        {children}
      </StyledButton>
    </Link>
  );
};

export default Button;
