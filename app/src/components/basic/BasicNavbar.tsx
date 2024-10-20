import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLogo from '../animated/AnimatedLogo'
import WalletMultiButtonDynamic from '../wallet/WalletMultiButtonDynamic'
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import { X } from 'lucide-react'

import Settings from './Settings'
import Image from 'next/image';
import MarketPrice from './MarketPrice'

const navItems = [
  { name: 'Feature', href: '#feature' },
  { name: 'Whitepaper', href: 'https://publuu.com/flip-book/664981/1481321' },
  { name: 'Roadmap', href: '#roadmap-section' },
  { name: 'Contact', href: '#contact' },
]
const BasicNavbar = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isRTL, setIsRTL] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showMarketPrice, setShowMarketPrice] = useState(true)
  const router = useRouter()

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 10)
      setShowMarketPrice(currentScrollY <= lastScrollY || currentScrollY === 0)
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = () => setIsOpen(!isOpen)
  const signOut = () => {
    localStorage.setItem('isAdmin', JSON.stringify(false))
    router.push('/')
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // Add logic to actually change the theme
  }
  const toggleDirection = () => {
    setIsRTL(!isRTL)
    // Add logic to change the text direction
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnimatePresence>
          {showMarketPrice && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <MarketPrice />
            </motion.div>
          )}
        </AnimatePresence>
        <header className={`flex items-center transition-all backdrop-blur-sm duration-300 ${isScrolled ? 'bg-green-700 shadow-md' : 'bg-[#349134a2]'}`}>
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between h-16">
              <AnimatedLogo onClick={() => router.push('/')} className={'  cursor-pointer'} />
              <AnimatedOnViewTitleMd
                onClick={() => router.push('/')}
                text={isAdmin ? `Your are on admin mode!` : `Save planet!`}
                delay={0.3}
                className={' xl:text-5xl lg:text-3xl md:text-1xl sm:text-lg hidden lg:flex text-white   hover:text-cC cursor-pointer'}
                style={{
                  textDecoration: 'underline',
                  textDecorationThickness: '2px',
                  transition: 'text-decoration-color 0.5s ease-in-out',
                }}
              />
              <nav className="items-center hidden space-x-4 md:flex">
                {!isAdmin && navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="text-white transition duration-300 hover:text-green-200">
                    {item.name}
                  </Link>
                ))}
                {isAdmin && (
                  (
                    <div className='flex flex-row font-handwritten text-shadow-white '>
                      <button onClick={() => { signOut() }} className='items-center '>
                        Sign out
                        {/* <Image src="/icon/logout.png" width={40} height={40} alt="signout" /> */}
                      </button>
                    </div>)
                )}
                <WalletMultiButtonDynamic />
                <Settings toggleDark={toggleDarkMode} toggleDir={toggleDirection} />

              </nav>

              <div className="flex items-center md:hidden">
                <WalletMultiButtonDynamic />
                <button onClick={handleNav} className="ml-4 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 z-50 pt-20 bg-[#348f69c7]"
          >
            <button
              onClick={handleNav}
              className="absolute text-white transition duration-300 top-4 right-4 hover:text-green-200"
            >
              <X size={24} />
            </button>
            <div className="container px-4 mx-auto">
              <nav className="flex flex-col items-center space-y-4">
                {!isAdmin && (
                  <>
                    <Link href="/" className="text-xl text-white transition duration-300 hover:text-green-200" onClick={() => { handleNav(); window.scrollTo(0, 0); }}>
                      Home
                    </Link>
                    <Link href="https://publuu.com/flip-book/664981/1481321" target="_blank" className="text-xl text-white transition duration-300 hover:text-green-200" onClick={handleNav}>
                      Whitepaper
                    </Link>
                    <button
                      className="text-xl text-white transition duration-300 hover:text-green-200"
                      onClick={() => {
                        handleNav();
                        const roadmapSection = document.getElementById('roadmap-section');
                        if (roadmapSection) {
                          roadmapSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Roadmap
                    </button>
                    <button
                      className="text-xl text-white transition duration-300 hover:text-green-200"
                      onClick={() => {
                        handleNav();
                        const faqSection = document.getElementById('faq_id');
                        if (faqSection) {
                          faqSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      FAQ
                    </button>
                  </>
                )}
                {isAdmin && (
                  <div className='flex flex-row text-xl text-white transition duration-300 hover:text-green-200 font-handwritten text-shadow-white'>
                    <button onClick={() => { signOut(); handleNav(); }} className='items-center'>
                      Sign out
                    </button>
                  </div>
                )}
                <WalletMultiButtonDynamic />
                <Settings toggleDark={toggleDarkMode} toggleDir={toggleDirection} />
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default BasicNavbar
