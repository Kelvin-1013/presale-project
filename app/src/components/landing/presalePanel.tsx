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
                setProgress(0);
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
            <div className="font-bold animated-heading bg-[#2cc433]"><h1 className='text-5xl'>Presale  Soon</h1></div>
            <p className="mb-2 text-xl font-bold text-green-800 outline-cA font-roboto">Buy before the price goes up!</p>
            <div className="flex flex-col rounded-xl items-center bg-[#f7f7f7c4] shadow-md">
                <div className="flex px-4 space-x-2">
                    <div className="px-4 text-center text-green-800 rounded">
                        <span className="text-2xl font-bold">{timeRemaining.days}</span>
                        <div className="text-sm">days</div>
                    </div>
                    <div className="px-4 text-center text-green-800 rounded">
                        <span className="text-2xl font-bold">{timeRemaining.hours}</span>
                        <div className="text-sm">hours</div>
                    </div>
                    <div className="px-4 text-center text-green-800 rounded">
                        <span className="text-2xl font-bold">{timeRemaining.minutes}</span>
                        <div className="text-sm">min</div>
                    </div>
                    <div className="px-4 text-center text-green-800 rounded">
                        <span className="text-2xl font-bold">{timeRemaining.seconds}</span>
                        <div className="text-sm">sec</div>
                    </div>
                </div>
                <p className="text-sm text-center text-purple-700 ">{progress.toFixed(2)}% completed</p>
                <div className="w-full bg-gray-300 rounded-b-md">
                    <div
                        className={`h-4 rounded-bl-lg rounded-r-lg ${progress < 100 ? 'bg-orange-500' : 'bg-green-500'} progress-bar`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            <div className="flex flex-row mt-2 space-x-4">
                <div className="flex flex-col justify-between w-full px-1 py-1 rounded animate-background-fade">
                    <div className="flex flex-col items-center justify-between">
                        <div className="font-bold text-white whitespace-nowrap">ROUND - 1</div>
                        <div className="text-xs leading-tight text-white whitespace-nowrap ">SOON</div> {/* Added background animation class */}
                    </div>
                    <div className="leading-tight text-yellow-300 whitespace-nowrap">150,000,000</div>
                    <div className="leading-tight text-white whitespace-nowrap">Price: $0.0025</div>
                </div>

                <div className="flex flex-col justify-between w-full px-1 py-1 bg-blue-600 rounded">
                    <div className="flex flex-col items-center justify-between">
                        <div className="font-bold text-white whitespace-nowrap">ROUND - 2</div>
                        <div className="text-xs leading-tight text-blue-200 whitespace-nowrap">COMING SOON</div>
                    </div>
                    <div className="leading-tight text-yellow-300 whitespace-nowrap">200,000,000</div>
                    <div className="leading-tight text-white whitespace-nowrap">Price: $0.004</div>
                </div>

                <div className="flex flex-col justify-between w-full px-1 py-1 bg-blue-600 rounded">
                    <div className="flex flex-col items-center justify-between">
                        <div className="font-bold text-white whitespace-nowrap">ROUND - 3</div>
                        <div className="text-xs leading-tight text-blue-200 whitespace-nowrap">COMING SOON</div>
                    </div>
                    <div className="leading-tight text-yellow-300 whitespace-nowrap">50,000,000</div>
                    <div className="leading-tight text-white whitespace-nowrap">Price: $0.008</div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full mt-4">
                <label htmlFor="amount" className="block font-bold text-green-900">
                    Enter the amount in SOLANA, min. 0.25 SOL:
                </label>
                <label htmlFor="amount" className="block font-bold text-purple-800">
                    Now, your balance is
                    <span className="mx-1 text-red-500">
                        {walletBalance}
                    </span>
                    SOL
                </label>

                <div className="flex justify-end w-full mt-1">
                    <input
                        type="number"
                        id="amount"
                        className="w-full px-2 py-1 text-green-900 bg-white border-2 border-yellow-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="0"
                        min="0.25"
                        value={solAmount}
                        onChange={(e) => setSolAmount(parseFloat(e.target.value))}
                    />
                    <button className="text-white transition duration-300 bg-yellow-400 rounded-r-lg shadow-md px-7 py- hover:bg-yellow-500">
                        SOL
                    </button>
                </div>
                <div className="flex justify-end w-full mt-2">
                    <input
                        type="number"
                        id="amount"
                        className="w-full px-2 py-1 text-green-900 bg-white border-2 border-yellow-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="0"
                        value={tokenAmount}
                        onChange={setManualTokenAmount}
                    />
                    <button className="px-4 text-white transition duration-300 bg-yellow-400 rounded-r-lg shadow-md py- hover:bg-yellow-500">
                        TMONK
                    </button>
                </div>
            </div>

            <div className="w-full mt-2 text-green-900">
                <label htmlFor="email" className="block ">Your E-mail address (gmail.com):</label>
                <input type="email" id="email" className="w-full p-1 text-green-800 rounded" placeholder="your email" />
            </div>

            <div className="w-full mt-2">
                <label htmlFor="solanaAddress" className="block w-full text-green-800 min-w-max">Your SOLANA address:</label>
                <input type="text" id="solanaAddress"
                    value={walletAddress} onChange={changeWalletAddress} className="w-full p-1 text-green-800 rounded" placeholder="your SOLANA address" />
            </div>

            <button className="px-6 py-2 mt-2 text-lg font-bold text-green-900 bg-yellow-500 rounded-xl">BUY $TMONK</button>
        </div>

    );
}

export default PresalePanel;
