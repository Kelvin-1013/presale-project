// pages/index.js
import Head from 'next/head';
import SaleNews from './saleNews';
import PresalePanel from './presalePanel';

export default function page() {


  return (
    <div className="landing-page min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <Head>
        <title>$TMONK-PreSale</title>
        <meta name="description" content="Join the most promising meme coin of today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex md:flex-row justify-between space-x-10 items-center mx-auto'>
        <div >
          <SaleNews />
        </div>
        <div className='flex flex-col items-center mx-auto'>
          <PresalePanel />
        </div>
      </div>
    </div>
  );
}
