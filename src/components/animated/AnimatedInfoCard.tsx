import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { useRouter } from 'next/router';
import { goToTop } from '../../utils/ScrollToTopOnLoad'
import teamImages from '../../assets/images/teamImages/1.png'
import Image from 'next/image';

const cardAnimate = {
    offscreen: { opacity: 0, scale: 0.5 },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            bounce: 0.3,
            duration: 2
        }
    }
}




const AnimatedTeamCard = (props) => {

    const router = useRouter();


    return (

        <motion.div className='flex m-3' key={props.id}
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: true, amount: 0.4 }}
            variants={cardAnimate}
        >
            <motion.div variants={cardAnimate} className=' flex-col border-2 text-center rounded-3xl py-6 pb-3 px-8 w-[260px] md:w-[300px] lg:w-[360px]' >

                <h3 className='py-0 text-xl font-bold text-cB'>{props.title}</h3>
                {/* <img src={teamImages[props.gIndex]} alt='' className='w-[260px] md:w-[300px] lg:w-[360px] rounded-2xl my-4' /> */}
                <Image src={teamImages} alt='' className='w-[260px] md:w-[300px] lg:w-[360px] rounded-2xl my-4' />
                <h3 className='pb-2 text-xl font-normal'>{props.description}</h3>
                <div className='flex px-3 mb-3 h-30 py-auto md:px-5 align-end mt-7'>
                    <AnimatedButton type="submit" text={props.title} className={"mx-auto"} onClick={() => { router.push(props.link); goToTop(); }} />
                </div>

            </motion.div>
        </motion.div>
    );
}

export default AnimatedTeamCard;