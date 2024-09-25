import Image from "next/image";
import React,{useState} from "react";
import {motion} from "framer-motion";

const ButtonAnimation = () => {
    const [isOpen,setIsOpen] = useState(false);

    const airdropAction = () => {
        // useAirdrop();
        setIsOpen(!isOpen); // Toggle sidebar visibility
    };

    return (
        <>
            <button
                className="fixed bottom-[140px] right-[30px] z-50  text-white font-bold rounded">
                <Image src="/monkey/buy.png" width={60} height={60} alt="buy" />
            </button>
            <div
                className="fixed bottom-[140px] right-[30px] z-40 animate-ping"
            >
                <Image src="/monkey/buy.png" width={60} height={60} alt="buy" />
            </div>

            <button
                className="fixed bottom-[250px] right-[30px] z-20 animate-bounce"
                onClick={airdropAction}
            >
                <Image src="/monkey/airdrop.png" width={60} height={60} alt="airdrop" />
            </button>

            {/* Left Sidebar */}
            <motion.div
                className={`fixed left-0 top-0 h-full w-1/3 bg-gradient-to-r from-yellow-400 to-orange-500 p-5 ${isOpen ? "block" : "hidden"
                    }`}
                initial={{x: -300}}
                animate={{x: isOpen ? 0 : -300}}
                transition={{type: "spring",stiffness: 300}}
            >
                <h2 className="text-2xl font-bold text-pink-600">Airdrop Criteria</h2>
                <ul className="mt-4 text-lg text-purple-600">
                    <li>Criteria 1: ...</li>
                    <li>Criteria 2: ...</li>
                    <li>Criteria 3: ...</li>
                </ul>
                <h2 className="text-2xl font-bold mt-4 text-teal-600">Method</h2>
                <p className="text-lg text-green-600">Explain your airdrop method here.</p>
                <button
                    onClick={() => setIsOpen(false)}
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                    Close
                </button>
            </motion.div>
        </>
    );
};

export default ButtonAnimation;