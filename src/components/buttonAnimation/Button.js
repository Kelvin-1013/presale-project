import Image from "next/image";
import React,{useState,useEffect} from "react";
import {motion} from "framer-motion";

const ButtonAnimation = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [isAirdropSidebar,setAirdropSidebar] = useState(false);

    const airdropAction = () => {
        // useAirdrop();
        if(!isAirdropSidebar) {
            setAirdropSidebar(!isAirdropSidebar); // Toggle sidebar visibility
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(!event.target.closest(".sidebar") && isAirdropSidebar === true && isOpen == false) {
                setIsOpen(true);
            }
            if(!event.target.closest(".sidebar") && isOpen == true) {
                setIsOpen(false);
                setAirdropSidebar(false);
            }
        };
        document.addEventListener("click",handleOutsideClick);

        return () => {
            document.removeEventListener("click",handleOutsideClick);
        };
    },);


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

            <motion.div id="sidebar"
                className={`z-50 fixed left-0 top-0 h-full w-1/3 bg-gradient-to-r from-yellow-400 to-orange-500 p-5 ${isAirdropSidebar ? "block" : "hidden"
                    }`}
                initial={{x: -300}}
                animate={{x: isAirdropSidebar ? 0 : -300}}
                transition={{type: "spring",stiffness: 300}}
            >
                <h2 className="text-2xl font-bold text-pink-600">Airdrop Criteria</h2>
                <ul className="mt-4 text-lg text-purple-600">
                    <li>Criteria 1: ...</li>
                    <li>Criteria 2: ...</li>
                    <li>Criteria 3: ...</li>
                </ul>
                <h2 className="mt-4 text-2xl font-bold text-teal-600">Method</h2>
                <p className="text-lg text-green-600">Explain your airdrop method here.</p>
                <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-700"
                >
                    Close
                </button>
            </motion.div>
        </>
    );
};

export default ButtonAnimation;