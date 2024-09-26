import React from 'react';
import { useRouter } from 'next/router';
import { FaTwitterSquare, FaGithub} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const TWITTER_LINK = 'https://twitter.com/zombieghostmg'
const GITHUB_LINK = 'https://github.com/ZombieGhostMG'
const TREE_LINK = 'https://linktr.ee/MoonGhostOfficial'


const BasicFooter = () => {

  const router = useRouter()

  return (
    <div className='bg-cA text-cC text-center py-16 flex justify-center align-middle flex-col '>
            <img src={'/images/MGLogo.png'} alt="" className='h-[50px] w-[50px] mx-auto mb-4 cursor-pointer' onClick={() => window.open(TREE_LINK, "_blank")}/>
            {/* <h2>MoonGhost Labs Ltd.</h2> */}
            <p className=' font-light '>Copyright © 2023 - All right reserved</p>
            <div className='flex justify-center align-middle flex-row'>
            <FaTwitterSquare size={50} className='text-cC mx-6 mt-4 cursor-pointer hover:text-cB transition-all duration-300' onClick={() => window.open(TWITTER_LINK, "_blank")}/>
            <FaGithub size={50} className='text-cC mx-6 mt-4 cursor-pointer hover:text-cB duration-300' onClick={() => window.open(GITHUB_LINK, "_blank")}/>
            <SiLinktree size={50} className='text-cC mx-6 mt-4 cursor-pointer hover:text-cB duration-300' onClick={() => window.open(TREE_LINK, "_blank")} />
            </div>
        
    </div>
  )
}

export default BasicFooter