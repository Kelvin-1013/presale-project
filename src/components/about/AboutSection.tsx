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
                <AnimatedInfoCard key={item.id} title={item.title} description={item.description} link={item.link}/>
                
            )
        }
    )
    

    return (
        <div className='w-full bg-cA text-cC text-center'>
            <motion.div className='max-w-[1240px] mx-auto px-4 py-16 overflow-hidden'>
                <AnimatedOnViewTitleLg className=" mb-6" text='Build Your BONK!' />
                <AnimatedOnViewP className=' mb-8 text-cC' text='Welcome to our revolutionary platform for token building, presale hosting, and buying.
                 Our platform is designed to make the process of creating, hosting, and buying tokens seamless and efficient. With our DeFi, opensource programs, you can easily create your own tokens, host successful presales, and buy tokens from other projects with safety and ease.
                 Join us now and be a part of the future of Solana!' />
                <motion.div className='flex justify-center flex-row max-w-[1240px] flex-wrap overflow-hidden'>
                    {aboutElements}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AboutSection;