import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { GlobalStateContext } from '../pages/_app';

const WhatsAppIcon = () => {
  const { globalState, dispatch } = useContext(GlobalStateContext);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    if (!globalState.isDesktop && globalState.scrollYProgress > 0.1) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [globalState.scrollYProgress, globalState.isDesktop]);

  const handleClick = () => {
    window.location.href = 'https://wa.me/+447768672154';
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showIcon ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 100 }}
        style={styles.iconContainer}
        onClick={handleClick}
        exit={{ opacity: 0, y: 20 }}
      >
        <motion.img
          src="/icons/whatsapp.svg"
          alt="WhatsApp Icon"
          style={styles.icon}
          animate={{ rotate: [0, 0, 0, 0, 0, 0, 15, -15, 15, -15, 0, 0, 0, 0, 0, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 4.5,
            delay: 0.5,
          }}
          key="wiggle"
        />
      </motion.div>
    </>
  );
};

const styles = {
  iconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    zIndex: 8,
  },
  icon: {
    width: '65px',
    height: '65px',
  },
};

export default WhatsAppIcon;
