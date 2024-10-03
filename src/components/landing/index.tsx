// pages/index.js

import Head from 'next/head';
import { useEffect, useState } from 'react';
import usePresale from '../../hooks/usePresale';

export default function Home() {
  const { getPresaleEndTime } = usePresale();
  const presaleEndTime = getPresaleEndTime();

  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const distance = presaleEndTime - now;

      if (distance < 0) {
        // Presale has ended
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return; // Exit if the presale has ended
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeRemaining, 1000);

    // Initial calculation
    calculateTimeRemaining();

    return () => clearInterval(timer); // Cleanup on unmount
  }, [presaleEndTime]);

  return (
    <div className="landing-page min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <Head>
        <title>$TMONK-PreSale</title>
        <meta name="description" content="Join the most promising meme coin of today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex flex-row '>
          <div className='hidden md:flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg max-w-3xl  mx-5'>

            <div className="flex flex-col space-y-4 mt-4">

              <div className="bg-gray-700 p-4 rounded flex justify-between">
                <span>ROUND - 3 (coming soon)</span>
                <span>1,000,000,000 BULE</span>
                <span>Price: $0.0009</span>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="amount" className="block mb-2">Enter the amount in SOLANA, min. 0.2 SOL:</label>
              <input type="number" id="amount" className="p-2 rounded bg-gray-600 text-white" placeholder="0" />
            </div>

            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 px-4 py-2 rounded">Solana</button>
              <button className="bg-blue-500 px-4 py-2 rounded">BULE</button>
            </div>
          </div>
          <div className='className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto'>

            <h1 className="text-4xl font-bold mb-4">PRE-SALE</h1>
            <p className="text-xl mb-2">BUY IN BEFORE PRICE INCREASE!</p>
            <p className="text-lg mb-4">Listing price = <span className="font-bold">$0.0025</span></p>

            <div className="flex space-x-4 mb-4">
              <div className="bg-blue-600 p-2 rounded">{timeRemaining.days} days</div>
              <div className="bg-blue-600 p-2 rounded">{timeRemaining.hours} hours</div>
              <div className="bg-blue-600 p-2 rounded">{timeRemaining.minutes} minutes</div>
              <div className="bg-blue-600 p-2 rounded">{timeRemaining.seconds} sec</div>
            </div>

            <h2 className="text-3xl font-bold mb-4">Round 1/3</h2>
            <p className="text-lg mb-2">Amount Raised: <span className="font-bold">0.6615% / $1,650,000</span></p>

            <div className="flex space-x-4 mb-4">
              <img src="/dex-tools.png" alt="DEXTools" className="h-8" />
              <img src="/dex-screener.png" alt="DEXScreener" className="h-8" />
              <img src="/raydium.png" alt="Raydium" className="h-8" />
              <img src="/jupiter.png" alt="Jupiter" className="h-8" />
            </div>

            <h2 className="text-2xl font-bold mb-4">THE MOST PROMISING MEMECOIN OF TODAY!</h2>
            <p className="mb-4">Doge and Pepe are a thing of the past.</p>
            <p className="mb-4 bg-blue-500 p-4 rounded">NOW IS THE TIME OF THE BULL!</p>
            <p className="mb-4">Grab the bull by the horns and be there when the next big wave breaks out.</p>

            <div className="flex flex-col space-y-4 mt-4">
              <div className="bg-green-600 p-4 rounded flex justify-between">
                <span>ROUND - 1</span>
                <span>750,000,000 BULE</span>
                <span>Price: $0.0004</span>
              </div>
              <div className="bg-green-700 p-4 rounded flex justify-between">
                <span>$100</span>
                <span>5% *BULE token BONUS</span>
              </div>
              <div className="bg-gray-700 p-4 rounded flex justify-between">
                <span>ROUND - 2 (coming soon)</span>
                <span>750,000,000 BULE</span>
                <span>Price: $0.0006</span>
              </div>
              <div className="bg-gray-700 p-4 rounded flex justify-between">
                <span>ROUND - 3 (coming soon)</span>
                <span>1,000,000,000 BULE</span>
                <span>Price: $0.0009</span>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="amount" className="block mb-2">Enter the amount in SOLANA, min. 0.2 SOL:</label>
              <input type="number" id="amount" className="p-2 rounded bg-gray-600 text-white" placeholder="0" />
            </div>

            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 px-4 py-2 rounded">Solana</button>
              <button className="bg-blue-500 px-4 py-2 rounded">BULE</button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
