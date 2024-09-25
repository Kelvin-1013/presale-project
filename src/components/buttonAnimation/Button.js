import Image from "next/image";
import React,{useState} from "react";
import {motion} from "framer-motion";
import useAirdrop from '../../hooks/useAirdrop';

const ButtonAnimation = () => {
    const [isOpen,setIsOpen] = useState(false);

    const airdropAction = () => {
        useAirdrop();
        setIsOpen(!isOpen); // Toggle sidebar visibility
    }

    return (
        <>
            <button className="fixed bottom-[140px] right-[30px] z-50 ">
                <Image
                    src="/monkey/buy.png"
                    width={60}
                    height={60}
                    alt="buy"
                />
            </button>

            <div className="fixed bottom-[140px] right-[30px] z-40 animate-ping">
                <Image
                    src="/monkey/buy.png"
                    width={60}
                    height={60}
                    alt="buy"
                />
            </div>
            <button className="fixed bottom-[250px] right-[30px] z-20 animate-bounce" onClick={airdropAction}>
                <Image
                    src="/monkey/airdrop.png"
                    width={60}
                    height={60}
                    alt="airdrop"
                />
            </button>

            {/* Sidebar */}
            <motion.div
                className={`fixed top-0 right-0 h-full w-1/3 bg-yellow-500 p-5 shadow-lg ${isOpen ? 'block' : 'hidden'}`}
                initial={{x: 300}}
                animate={{x: isOpen ? 0 : 300}}
                transition={{type: 'spring',stiffness: 300}}
            >
                <h2 className="text-xl font-bold">Airdrop Criteria</h2>
                <ul className="mt-4">
                    <li>Criteria 1: ...</li>
                    <li>Criteria 2: ...</li>
                    <li>Criteria 3: ...</li>
                </ul>
                <h2 className="text-xl font-bold mt-4">Method</h2>
                <p>Explain your airdrop method here.</p>
                <button onClick={() => setIsOpen(false)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Close</button>
            </motion.div>
        </>
    );
}

export default ButtonAnimation;
