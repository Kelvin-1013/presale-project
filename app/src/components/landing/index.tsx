// pages/index.js
import Head from 'next/head';
import SaleNewsMd from './saleNewsMd';
import PresalePanel from './presalePanel';
import SaleNews from './saleNews';
export default function page() {
  return (
    <div className="landing-page min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <Head>
        <title>$TMONK-PreSale</title>
        <meta name="description" content="Join the most promising meme coin of today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:hidden">
        <SaleNewsMd />
      </div>
      <div className='flex md:flex-row justify-between md:space-x-10 items-center sm:m-0'>
        <div className="hidden md:flex">
          <SaleNews />
        </div>
        <div className='flex flex-col items-center mx-auto '>
          <PresalePanel />
        </div>
      </div>
    </div>
  );
}
