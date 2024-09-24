import React from 'react';
import { useRouter } from 'next/router';
import { FaTwitterSquare, FaGithub, FaDiscord, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const TWITTER_LINK = 'https://twitter.com/@TMONK777'
const GITHUB_LINK = 'https://github.com/TowerTransition'
const TREE_LINK = 'https://linktr.ee/'
const INSTAGRAM_LINK = 'https://www.instagram.com/tmonk777/'
const DISCORD_LINK = 'https://discord.gg/2aNj737F'
const TELEGRAM_LINK = 'https://discord.gg/2aNj737F'

const BasicFooter = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col justify-center py-16 text-center align-middle bg-cA text-cC '>
      <img src={'/images/MGLogo.png'} alt="" className='h-[50px] w-[50px] mx-auto mb-4 cursor-pointer' onClick={() => window.open(TREE_LINK, "_blank")} />
      {/* <h2>MoonGhost Labs Ltd.</h2> */}
      <p className='font-light '>Copyright © 2024 - All right reserved</p>
      <div className='flex flex-row justify-center align-middle'>
        <FaTwitterSquare size={50} className='mx-6 mt-4 transition-all duration-300 cursor-pointer text-cC hover:text-cB' onClick={() => window.open(TWITTER_LINK, "_blank")} />
        <FaGithub size={50} className='mx-6 mt-4 duration-300 cursor-pointer text-cC hover:text-cB' onClick={() => window.open(GITHUB_LINK, "_blank")} />
        <FaDiscord size={50} className='mx-6 mt-4 duration-300 cursor-pointer text-cC hover:text-cB' onClick={() => window.open(DISCORD_LINK, "_blank")} />
        <FaInstagram size={50} className='mx-6 mt-4 duration-300 cursor-pointer text-cC hover:text-cB' onClick={() => window.open(INSTAGRAM_LINK, "_blank")} />
        <FaTelegram size={50} className='mx-6 mt-4 duration-300 cursor-pointer text-cC hover:text-cB' onClick={() => window.open(TELEGRAM_LINK, "_blank")} />
        <SiLinktree size={50} className='mx-6 mt-4 duration-300 cursor-pointer text-cC hover:text-cB' onClick={() => window.open(TREE_LINK, "_blank")} />
      </div>

    </div>
  )
}

export default BasicFooter