import React from 'react';
import { motion } from 'framer-motion';

const AnimatedOnViewTitleMd = (props) => {
    const titleAnimate = {
        offscreen: { opacity: 0, scale: 0.7 },
        onscreen: {
            opacity: 1,
            scale: 1.1, // Slightly scale up when it comes into view
            transition: {
                type: 'spring',
                bounce: 0.5,
                duration: 1.5,
                delay: props.delay,
            }
        },
        scaleDown: {
            scale: 1,
            transition: {
                type: 'spring',
                bounce: 0.5,
                duration: 0.5,
            }
        }
    };

    return (
        <motion.h1
            viewport={{ once: true, amount: 1 }}
            onClick={props.onClick}
            variants={titleAnimate}
            initial="offscreen"
            whileInView="onscreen"
            animate={props.isScaledDown ? "scaleDown" : "onscreen"}
            className={`py-4 text-4xl sm:text-5xl md:text-7xl font-semibold ${props.className} bg-gradient-to-r from-green-600 to-orange-700 bg-clip-text text-transparent animate-gradient`}
        >
            {props.text}
        </motion.h1>
    );
};

export default AnimatedOnViewTitleMd;
