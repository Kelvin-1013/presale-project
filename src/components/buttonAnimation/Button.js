import {useConnection,useWallet} from '@solana/wallet-adapter-react';
import Image from "next/image";
import React,{useState,useEffect} from "react";
import {motion} from "framer-motion";
import useAirdrop from "../../hooks/useAirdrop";

const ButtonAnimation = () => {
    const {publicKey,sendTransaction} = useWallet();
    const [isOpen,setIsOpen] = useState(false);
    const [isAirdropSidebar,setAirdropSidebar] = useState(false);
    const {isWalletConnected} = useAirdrop();
    const airdropAction = () => {
        if(!publicKey) {
            alert("Please connect your wallet");
            return;
        }
        setAirdropSidebar(true);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {

            const sidebar = document.getElementById("sidebar");
            const airdrop = document.getElementById("airdrop");
            if(!sidebar.contains(event.target) && isAirdropSidebar && !airdrop.contains(event.target)) {
                setAirdropSidebar(false); // Close sidebar only if it's open
            }
        };
        document.addEventListener("click",handleOutsideClick);

        return () => {
            document.removeEventListener("click",handleOutsideClick);
        };
    },);

    return (
        <>
            <button onClick={() => window.open('https://tools.smithii.io/launches-list/solana','_blank')}
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
                id='airdrop'
            >
                <Image src="/monkey/airdrop.png" width={60} height={60} alt="airdrop" />
            </button>

            <motion.div id="sidebar"
                className={`xl:w-1/4 md:w-1/2  xs:w-3/4 z-50 fixed left-0 top-0 h-full w-1/3 bg-gradient-to-r from-yellow-400 to-orange-500 p-5 ${isAirdropSidebar ? "block" : "hidden"
                    }`}
                initial={{x: -300}}
                animate={{x: isAirdropSidebar ? 0 : -300}}
                transition={{type: "spring",stiffness: 300}}
            >
                <h2 className="font-bold text-green-800 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">Airdrop Applied sucessfully</h2>
                <h2 className="text-2xl text-pink-600 font-4ld"><br /></h2>
                <h2 className="text-4xl font-bold text-pink-600">Airdrop Criteria</h2>
                <div className="overflow-y-auto max-h-72">
                    <details className="mt-4">
                        <summary className="text-lg text-purple-600 cursor-pointer">Community Engagement</summary>
                        <ul className="pl-5 list-disc">
                            <li>👉 Social Media Interaction</li>
                            <li>👉 Content Creation</li>
                        </ul>
                    </details>
                    <details className="mt-4">
                        <summary className="text-lg text-purple-600 cursor-pointer">Wallet Activity</summary>
                        <ul className="pl-5 list-disc">
                            <li>👉 Minimum Balance Requirement</li>
                            <li>👉 Transaction History</li>
                        </ul>
                    </details>
                    <details className="mt-4">
                        <summary className="text-lg text-purple-600 cursor-pointer">Referral Program</summary>
                        <ul className="pl-5 list-disc">
                            <li>👉 Invite Friends</li>
                        </ul>
                    </details>
                    <details className="mt-4">
                        <summary className="text-lg text-purple-600 cursor-pointer">Holding Other Tokens</summary>
                        <ul className="pl-5 list-disc">
                            <li>👉 Token Holder Criteria</li>
                        </ul>
                    </details>
                    <details className="mt-4">
                        <summary className="text-lg text-purple-600 cursor-pointer">Participation in Governance</summary>
                        <ul className="pl-5 list-disc">
                            <li>👉 Voting Participation</li>
                        </ul>
                    </details>
                    <details className="mt-4">
                        <summary className="text-lg text-purple-600 cursor-pointer">Feedback Contribution</summary>
                        <ul className="pl-5 list-disc">
                            <li>👉 Surveys and Feedback</li>
                        </ul>
                    </details>
                </div>
                {/* <h2 className="mt-4 text-2xl font-bold text-teal-600">Method</h2> */}
                <p className="my-5 font-serif font-extrabold text-center text-[#1d1836] xl:text-4xl md:text-2xl">$TMONK will contribute to the planet!</p>
                <div className="flex items-center justify-center ">
                    {/* <button
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-4 mt-4 text-white bg-red-500 rounded md:text-xl xl:text-4xl hover:bg-red-700 "
                    >
                        Close
                    </button> */}
                </div>
            </motion.div>
        </>
    );
};

export default ButtonAnimation;