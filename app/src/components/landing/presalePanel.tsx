import { useEffect, useState } from 'react';
import usePresale from '../../hooks/usePresale';
import Head from 'next/head';
import axios from 'axios';
import { PublicKey } from '@solana/web3.js';

const PresalePanel = () => {
    const [solPrice, setSolPrice] = useState(0);
    const { getPresaleEndTime, getStartedTime, walletBalance, tokenPrice, publicKey } = usePresale();
    const presaleEndTime = getPresaleEndTime();
    const presaleStartTime = getStartedTime();
    const [solAmount, setSolAmount] = useState(0);
    const [tokenAmount, setTokenAmount] = useState(0.0);
    const [walletAddress, setWalletAddress] = useState("undefined");
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [progress, setProgress] = useState(0);

    const changeWalletAddress = () => {
        const newAddress = prompt("Enter your new wallet address:");
        if (newAddress) {
            setWalletAddress(newAddress);
        }
    }
    const setManualTokenAmount = (e) => {
        setSolAmount(e.target.value * tokenPrice);
        setTokenAmount(e.target.value);
    }

    useEffect(() => {
        if (publicKey) {
            setWalletAddress(publicKey.toString());
        } else {
            setWalletAddress("undefined"); // or set it to an empty string if preferred
        }
    }, [publicKey]);

    useEffect(() => {
        const fetchSolPrice = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
                setSolPrice(response.data.solana.usd);
            } catch (error) {
                console.error("Error fetching SOL price:", error);
            }
        };

        fetchSolPrice();
    }, []);

    useEffect(() => {
        setTokenAmount(solAmount / tokenPrice);
    }, [solAmount]);

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date().getTime();
            const distance = presaleEndTime - now;

            if (distance < 0) {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setProgress(2);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining({ days, hours, minutes, seconds });

            const totalDuration = presaleEndTime - presaleStartTime;
            const timePassed = now - presaleStartTime;
            const newProgress = Math.min(Math.max((timePassed / totalDuration) * 100, 0), 100);
            setProgress(newProgress);
        };

        const timer = setInterval(calculateTimeRemaining, 1000);
        calculateTimeRemaining();
        return () => clearInterval(timer);
    }, [presaleEndTime, presaleStartTime]);

    return (
        <div className="border-spacing-11 bg-gradient-to-b from-[#ffffff6e]  to-[#4ef75770] my-5 flex flex-col items-center sm:p-6 xs:p-0 rounded-xl shadow-lg max-w-3xl mx-auto">
            {/* <div className="border-spacing-11 bg-gradient-to-b from-[#ffffff6e]  to-[#4ef75770] my-5 flex flex-col items-center p-6 rounded-xl shadow-lg max-w-3xl mx-auto"> */}
            <Head>
                <meta name="description" content="Join the most promising meme coin of today!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="font-bold animated-heading bg-[#2cc433]"><h1 className='text-5xl'>Presale</h1></div>
            <p className="text-xl mb-2 text-green-800 outline-cA font-bold font-roboto">Buy before the price goes up!</p>
            <div className="flex flex-col rounded-xl items-center bg-[#f7f7f7c4] shadow-md">
                <div className="flex space-x-2 px-4">
                    <div className="text-green-800 px-4 rounded text-center">
                        <span className="text-2xl font-bold">{timeRemaining.days}</span>
                        <div className="text-sm">days</div>
                    </div>
                    <div className="text-green-800 px-4 rounded text-center">
                        <span className="text-2xl font-bold">{timeRemaining.hours}</span>
                        <div className="text-sm">hours</div>
                    </div>
                    <div className="text-green-800 px-4 rounded text-center">
                        <span className="text-2xl font-bold">{timeRemaining.minutes}</span>
                        <div className="text-sm">min</div>
                    </div>
                    <div className="text-green-800 px-4 rounded text-center">
                        <span className="text-2xl font-bold">{timeRemaining.seconds}</span>
                        <div className="text-sm">sec</div>
                    </div>
                </div>
                <p className="text-center text-purple-700 text-sm ">{progress.toFixed(2)}% completed</p>
                <div className="w-full bg-gray-300 rounded-b-md">
                    <div
                        className={`h-4 rounded-bl-lg rounded-r-lg ${progress < 100 ? 'bg-orange-500' : 'bg-green-500'} progress-bar`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            <div className="flex flex-row space-x-4 mt-2">
                <div className=" px-1 py-1 rounded flex flex-col justify-between w-full animate-background-fade">
                    <div className="flex flex-col justify-between items-center">
                        <div className="text-white font-bold whitespace-nowrap">ROUND - 1</div>
                        <div className="text-white text-xs leading-tight whitespace-nowrap ">LIVE</div> {/* Added background animation class */}
                    </div>
                    <div className="text-yellow-300 leading-tight whitespace-nowrap">150,000,000</div>
                    <div className="text-white leading-tight whitespace-nowrap">Price: $0.0025</div>
                </div>

                <div className="bg-blue-600 px-1 py-1 rounded flex flex-col justify-between w-full">
                    <div className="flex flex-col justify-between items-center">
                        <div className="text-white font-bold whitespace-nowrap">ROUND - 2</div>
                        <div className="text-blue-200 text-xs leading-tight whitespace-nowrap">COMING SOON</div>
                    </div>
                    <div className="text-yellow-300 leading-tight whitespace-nowrap">200,000,000</div>
                    <div className="text-white leading-tight whitespace-nowrap">Price: $0.004</div>
                </div>

                <div className="bg-blue-600 px-1 py-1 rounded flex flex-col justify-between w-full">
                    <div className="flex flex-col justify-between items-center">
                        <div className="text-white font-bold whitespace-nowrap">ROUND - 3</div>
                        <div className="text-blue-200 text-xs leading-tight whitespace-nowrap">COMING SOON</div>
                    </div>
                    <div className="text-yellow-300 leading-tight whitespace-nowrap">50,000,000</div>
                    <div className="text-white leading-tight whitespace-nowrap">Price: $0.008</div>
                </div>
            </div>
            <div className="mt-4 flex flex-col items-center w-full">
                <label htmlFor="amount" className="block text-green-900 font-bold">
                    Enter the amount in SOLANA, min. 0.25 SOL:
                </label>
                <label htmlFor="amount" className="block text-purple-800 font-bold">
                    Now, your balance is
                    <span className="text-red-500 mx-1">
                        {walletBalance}
                    </span>
                    SOL
                </label>

                <div className="flex justify-end mt-1 w-full">
                    <input
                        type="number"
                        id="amount"
                        className="px-2 w-full py-1 rounded-l-lg border-2 border-yellow-400 bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="0"
                        min="0.25"
                        value={solAmount}
                        onChange={(e) => setSolAmount(parseFloat(e.target.value))}
                    />
                    <button className="bg-yellow-400 text-white px-7  py- rounded-r-lg shadow-md hover:bg-yellow-500 transition duration-300">
                        SOL
                    </button>
                </div>
                <div className="flex justify-end mt-2 w-full">
                    <input
                        type="number"
                        id="amount"
                        className="px-2 w-full py-1 rounded-l-lg border-2 border-yellow-400 bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="0"
                        value={tokenAmount}
                        onChange={setManualTokenAmount}
                    />
                    <button className="bg-yellow-400 text-white px-4 py- rounded-r-lg shadow-md hover:bg-yellow-500 transition duration-300">
                        TMONK
                    </button>
                </div>
            </div>

            <div className="mt-2 text-green-900 w-full">
                <label htmlFor="email" className="block ">Your E-mail address (gmail.com):</label>
                <input type="email" id="email" className="p-1 rounded text-green-800 w-full" placeholder="your email" />
            </div>

            <div className="mt-2 w-full">
                <label htmlFor="solanaAddress" className="block w-full min-w-max text-green-800">Your SOLANA address:</label>
                <input type="text" id="solanaAddress"
                    value={walletAddress} onChange={changeWalletAddress} className="p-1 rounded text-green-800 w-full" placeholder="your SOLANA address" />
            </div>

            <button className="mt-2 bg-yellow-500 text-green-900 px-6 py-2 rounded-xl text-lg font-bold">BUY $TMONK</button>
        </div>

    );
}

export default PresalePanel;