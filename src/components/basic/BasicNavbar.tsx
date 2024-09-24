import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AnimatedLi from '../animated/AnimatedLi';
import { motion, LayoutGroup, useCycle } from 'framer-motion';
import AnimatedLogo from '../animated/AnimatedLogo';
import AnimatedMenuToggle from '../animated/AnimatedMenuToggle';
import { goToTop } from '../../utils/ScrollToTopOnLoad'
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import WalletMultiButtonDynamic from '../wallet/WalletMultiButtonDynamic';

const DISCOVER_LINK = '/discover';
const CREATE_LINK = '/create';

const BasicNavbar = (props) => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  }

  const router = useRouter();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className='w-full h-[90px] bg-cA z-50 backdrop-blur-sm bg-opacity-60 px-6 sm:px-14'>
      <div className='px-2 sm:px-4 flex justify-between items-center h-full'>
        <div className='flex items-center'>
          <AnimatedLogo onClick={() => router.push('/')} text={`Save planet!`} className={'hidden sm:flex ml-5 sm:ml-0 text-cB'} />
          <AnimatedOnViewTitleMd onClick={() => router.push('/')} text={`Save planet!`} delay={0.3} className={' hidden xs:flex text-cB text-lg pl-2  md:text-5xl lg:text-6xl hover:text-cC cursor-pointer'} />
        </div>
        <div className='hidden md:flex'>

          <ul className='flex text-md lg:text-4xl text-cC items-center gap-4'>
            <AnimatedLi className={`${props.activePage === 'Home' ? 'hover:text-cB cursor-pointer border-b-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer text-[16px] sm:text-[24px]'} `} text='Home' onClick={() => { router.push('/'); goToTop(); }} />
            <AnimatedLi className={`${props.activePage === 'Whitepapaer' ? 'hover:text-cB cursor-pointer border-b-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer text-[16px] sm:text-[24px]'} `} text='Whitepapaer' onClick={() => { window.open('/whitepaper.pdf', '_blank'); goToTop(); }} />
            <AnimatedLi className={`${props.activePage === 'AboutUs' ? 'hover:text-cB cursor-pointer border-b-2 pr-4 lg:pr-4 mr-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer pr-4 text-[16px] sm:text-[24px]  '} `} text='AboutUs' onClick={() => { router.push('/'); goToTop(); }} />
            <AnimatedLi className={`${props.activePage === 'Tokenomics' ? 'hover:text-cB cursor-pointer border-b-2 pr-4 lg:pr-4 mr-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer pr-4 text-[16px] sm:text-[24px]  '} `} text='Tokenomics' onClick={() => { router.push('/'); goToTop(); }} />
            <AnimatedLi
              className={`${props.activePage === 'BuyOnServic' ? 'hover:text-cB cursor-pointer border-b-2 pr-4 lg:pr-4 mr-2 text-[16px] sm:text-[24px]' : 'hover:text-cB cursor-pointer pr-4 text-[16px] sm:text-[24px] '} `}
              text='BuyOnService'
              onClick={() => { window.open('https://smithii.io', '_blank'); goToTop(); }}
            />
            <WalletMultiButtonDynamic />
          </ul>
        </div>
        {/* Hamburger menu */}
        <motion.div className='md:hidden flex' animate={isOpen ? "open" : "closed"}>
          <WalletMultiButtonDynamic />
          <AnimatedMenuToggle toggle={() => { handleNav(); toggleOpen(); }} />
        </motion.div>

        {/* Mobile Menu */}
        <LayoutGroup>
          <motion.div className={nav ? `w-full bg-cA text-cC absolute top-[90px] left-0 flex justify-center text-center border-b-4` : `w-full bg-cA text-cC absolute top-[90px] left-0 flex justify-center text-center`} layout >
            {nav &&
              <motion.ul>
                <AnimatedLi className={'hover:text-cB cursor-pointer text-2xl border-b-2'} text='Home' onClick={() => { router.push('/'); goToTop(); }} />
                <AnimatedLi className={'hover:text-cB cursor-pointer text-2xl border-b-2'} text='Discover' onClick={() => { router.push(DISCOVER_LINK); goToTop(); }} />
                <AnimatedLi className={'hover:text-cB cursor-pointer text-2xl'} text='Create' onClick={() => { router.push(CREATE_LINK); goToTop(); }} />
              </motion.ul>}
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default BasicNavbar;
