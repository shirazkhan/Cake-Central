import { useEffect, useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalStateContext } from '../pages/_app';

const WhatsAppIcon = () => {
  const { globalState } = useContext(GlobalStateContext);
  const [showIcon, setShowIcon] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    if (globalState.scrollYProgress > 0.02) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [globalState.scrollYProgress]);

  useEffect(() => {
    if (showIcon && showBubble) {
      const timer = setTimeout(() => {
        setShowBubble(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [showIcon, showBubble]);

  const handleClick = () => {
    window.open('https://wa.me/+447768672154', '_blank');
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
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.5 }}
              style={styles.bubble}
            >
              Let's chat over WhatsApp
            </motion.div>
          )}
        </AnimatePresence>
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
    right: '10px',
    cursor: 'pointer',
    zIndex: 8,
    
  },
  icon: {
    width: '65px',
    height: '65px',
        
  },
  bubble: {
    position: 'absolute',
    bottom: '13px', // Adjust as needed
    right: '65px',  // Adjust as needed
    backgroundColor: '#25D366',
    color: 'white',
    padding: '10px',
    fontWeight: '550',
    width: '175px',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    fontSize: '16px',
    zIndex: 9,
  },
};

export default WhatsAppIcon;
