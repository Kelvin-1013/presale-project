"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AnimatedLi from '../animated/AnimatedLi';
import { motion, LayoutGroup, useCycle } from 'framer-motion';
import AnimatedLogo from '../animated/AnimatedLogo';
import AnimatedMenuToggle from '../animated/AnimatedMenuToggle';
import { goToTop } from '../../utils/ScrollToTopOnLoad'
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import WalletMultiButtonDynamic from '../wallet/WalletMultiButtonDynamic';
import Image from 'next/image';

const DISCOVER_LINK = '/discover';
const CREATE_LINK = '/create';
const PRESALE_LINK = '/presale';
const nativeColors = [
  '#FF69B4', // Color 1
  '#33CC33', // Color 2
  '#66CCCC', // Color 3
  '#FFCC00', // Color 4
  '#0099CC', // Color 5
  '#FF99CC', // Color 6
  '#CCCCCC', // Color 7
];

const BasicNavbar = (props) => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  }
  const SignOut = () => {
    localStorage.setItem('isAdmin', JSON.stringify(false));
    router.push('/');
  }
  const router = useRouter();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className=' w-full h-[90px] bg-green-500 z-[2000] backdrop-blur-sm bg-opacity-60 px-1 sm:px-5 md:py-0' >
      <div className='flex items-center justify-between h-full '>
        <div className='flex items-center'>
          <AnimatedLogo onClick={() => router.push('/')} className={' ml-2 sm:ml-0 pt-2 text-cB '} />
          <AnimatedOnViewTitleMd
            onClick={() => router.push('/')}
            text={`Save planet!`}
            delay={0.3}
            className={' xl:text-5xl lg:text-3xl md:text-1xl sm:text-lg hidden lg:flex text-cB   hover:text-cC cursor-pointer'}
            style={{
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              transition: 'text-decoration-color 0.5s ease-in-out',
            }}
          />
        </div>
        <div className='hidden md:flex'>
          <ul className=' text-shadow-white font-handwritten  flex items-center gap-4 md:text-xl xl:text-6xl lg:text-4xl text-cB'>
            {!props.isAdmin &&
              (
                <>

                  <AnimatedLi className={`${props.activePage === 'Whitepapaer' ? 'font-handwritten  hover:text-cB cursor-pointer border-b-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer text-[16px] sm:text-[24px]'} `} text='Home' onClick={() => { router.push('/'); goToTop(); }} />
                  <AnimatedLi className={`${props.activePage === 'Whitepapaer' ? 'font-handwritten  hover:text-cB cursor-pointer border-b-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer text-[16px] sm:text-[24px]'} `} text='Whitepaper' onClick={() => { window.open('https://publuu.com/flip-book/664981/1481321', '_blank'); goToTop(); }} />
                  <AnimatedLi
                    className={`${props.activePage === 'roadmap' ? 'font-handwritten  hover:text-cB cursor-pointer border-b-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer text-[16px] sm:text-[24px]'} `}
                    text='Roadmap'
                    onClick={() => {
                      const roadmapSection = document.getElementById('roadmap-section');
                      if (roadmapSection) {
                        roadmapSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  />
                  <AnimatedLi
                    className={`${props.activePage === 'FAQ' ? 'hover:text-cB cursor-pointer border-b-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer text-[16px] sm:text-[24px]'} `}
                    text='FAQ'
                    onClick={() => {
                      const roadmapSection = document.getElementById('faq_id');
                      if (roadmapSection) {
                        roadmapSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  />
                  <WalletMultiButtonDynamic />
                </>)}
            {props.isAdmin &&
              (
                <div className='font-handwritten  text-shadow-white flex flex-row '>
                  <WalletMultiButtonDynamic />
                  <button onClick={() => { SignOut() }} className='items-center'>
                    <Image src="/icon/logout.png" width={40} height={40} alt="signout" />
                  </button>
                </div>)}
          </ul>
        </div>

        <motion.div className='flex md:hidden' animate={isOpen ? "open" : "closed"}>
          <WalletMultiButtonDynamic />
          <AnimatedMenuToggle toggle={() => { handleNav(); toggleOpen(); }} />
        </motion.div>
        <LayoutGroup>
          <motion.div className={nav ? `z-10 w-full font-handwritten  text-shadow-white bg-cA text-cC absolute top-[90px] left-0 flex justify-center text-center border-b-4` : `w-full bg-cA z-10 text-cC absolute top-20  left-0 flex justify-center text-center `} layout>
            {nav &&
              <motion.ul className="flex space-x-4 "> {/* Added flex and spacing for horizontal layout */}
                <AnimatedLi className={'hover:text-cB  text-[#d431d4d3] cursor-pointer text-2xl flex items-center'} text='Home' onClick={() => { router.push('/'); goToTop(); }} />
                <AnimatedLi className={'hover:text-cB  text-[#d431d4d3] cursor-pointer text-2xl flex items-center'} text='Whitepaper' onClick={() => { window.open('https://publuu.com/flip-book/664981/1481321'); goToTop(); }} />
                <AnimatedLi className={'hover:text-cB  text-[#d431d4d3] cursor-pointer text-2xl flex items-center'} text='Buy' onClick={() => { window.open('https://tools.smithii.io/launches-list/solana', '_blank') }} />
                <AnimatedLi className={'hover:text-cB  text-[#d431d4d3] cursor-pointer text-2xl flex items-center'} text='Signout' onClick={() => SignOut()} />
                {/* <AnimatedLi className={'hover:text-cB cursor-pointer text-2xl flex items-center'} text='• presale' onClick={() => { router.push(PRESALE_LINK); goToTop(); }} /> */}
              </motion.ul>
            }
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default BasicNavbar;
