import React from 'react';
import AnimatedOnViewTitleLg from '../animated/AnimatedOnViewTitleLg';
import aboutInfo from './aboutInfo';
import AnimatedInfoCard from '../animated/AnimatedInfoCard';
import AnimatedOnViewP from '../animated/AnimatedOnViewP';
import { motion } from 'framer-motion';

const AboutSection = () => {

    const aboutElements = aboutInfo.map(
        item => {
            return (
                <AnimatedInfoCard key={item.id} title={item.title} description={item.description} link={item.link} />

            )
        }
    )


    return (
        <div className='w-full text-center bg-cA text-cC'>
            <motion.div className='max-w-[1240px] mx-auto px-4 py-16 overflow-hidden'>
                <AnimatedOnViewTitleLg className="mb-6 " text='Join the $TMONK Troop!' />
                <AnimatedOnViewP className='mb-8 text-cC' text='Are you ready to meme for a better world? Grab your $TMONK tokens, join the revolution, and help us prove that even a bunch of keyboard-wielding primates can change the planet!
                 Join us now and be a part of the future of Solana!' />
                <motion.div className='flex justify-center flex-row max-w-[1240px] flex-wrap overflow-hidden'>
                    {aboutElements}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AboutSection;