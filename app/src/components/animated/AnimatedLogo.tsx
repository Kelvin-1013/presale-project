import React from 'react';
import { motion } from 'framer-motion';

const logoAnimation = {
  initial: { scale: 0.5, opacity: 0, rotate: -180 },
  animate: {
    scale: 1, opacity: 1, rotate: 0, transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.5,
      delay: 0.5
    }
  },
  exit: { scale: 0.5, opacity: 0, rotate: -180, transition: { duration: 1.5 } },
}

const AnimatedLogoMd = (props) => {
  return (
    <motion.img
      variants={logoAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className={`h-[30px] sm:h-[40px] pl-0.5 pr-1 sm:px-1.5 cursor-pointer ${props.className}`} // Adjusted sizes to half and changed px to rem
      src={'/images/BonkLogo.png'}
      alt='Logo'
      onClick={props.onClick}
    />
  );
}

const AnimatedLogoLg = (props) => {
  return (
    <motion.img
      variants={logoAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='h-[100px] sm:h-[30vh] sm:max-h-[250px] w-[100px] sm:w-auto pointer-events-none self-center mx-auto' // Adjusted sizes to half and changed px to rem
      src={'/images/BonkLogo.png'}
      alt='Logo'
      onClick={props.onClick}
    />
  );
}

export { AnimatedLogoLg }
export default AnimatedLogoMd;
