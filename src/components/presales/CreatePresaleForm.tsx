import { PublicKey } from '@solana/web3.js';
import React, {useState} from 'react'
import AnimatedButton from '../animated/AnimatedButton'
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import usePresale from '../../hooks/usePresale';
import { BONK_TOKEN_PUBKEY } from '../../constants';

export default function CreatePresaleForm() {
    const {createPresale} = usePresale();
    const [presaleTokenAddress, setPresaleTokenAddress] = useState("");
    const [amountOfTokensForPresale, setAmountOfTokensForPresale] = useState(0);
    const [maxTokensPerWallet, setMaxTokensPerWallet] = useState(0);
    const [price, setPrice] = useState(0);

    const handlePresaleTokenAddressChange = (e) => {
        setPresaleTokenAddress(e.target.value);
    };

    const handleAmountOfTokensForPresaleChange = (e) => {
        setAmountOfTokensForPresale(e.target.value);
    };

    const handleMaxTokensPerWalletChange = (e) => {
        setMaxTokensPerWallet(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const presaleTokenAddressPubkey = new PublicKey(presaleTokenAddress);
        createPresale(
            presaleTokenAddressPubkey, 
            BONK_TOKEN_PUBKEY, 
            amountOfTokensForPresale, 
            maxTokensPerWallet, 
            price)
        
    };
    

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 items-center flex flex-col'>
        <div className=' py-2 px-3 md:p-3 md:px-5  items-center flex flex-col rounded-3xl bg-cB' >
            <div className='w-[80vw]  sm:w-[500px] md:w-[600px] lg:w-[900px] items-center flex-col bg-cA p-4 my-2 al mx-auto rounded-2xl transition-colors duration-300 justify-center'>
                <AnimatedOnViewTitleMd text={"Create Your Presale"} className={"mx-auto self-center text-cB justify-center flex text-center" }/>
                <form onSubmit={handleSubmit} className={"w-full"}>
                    <div className='flex flex-col md:flex-row px-1 sm:px-3 md:px-5 align-middle justify-between my-5 leading-[1.5rem]'>
                        <h1 className={"text-cB text-3xl py-auto self-center font-medium text-center" }>Presale Token Address:</h1>
                        <input onChange={handlePresaleTokenAddressChange} type="text"  className={" h-10 flex w-[100%] sm:w-[90%] md:w-[60%] px-auto self-center md:self-start p-3 rounded-2xl bg-cC focus:outline-cB text-cB text-xl"}/>
                    </div>
                    <div className='flex flex-col md:flex-row  px-3 sm:px-3 md:px-5 align-middle justify-between my-5'>
                        <h1 className={"text-cB text-3xl py-auto self-center font-medium text-center " }>Amount of Tokens:</h1>
                        <input onChange={handleAmountOfTokensForPresaleChange} type="text"  className={" h-10 flex w-[100%] sm:w-[90%] md:w-[60%] px-auto self-center md:self-start p-3 rounded-2xl bg-cC focus:outline-cB text-cB text-xl"}/>
                    </div>
                    <div className='flex flex-col md:flex-row  px-3 sm:px-3 md:px-5 align-middle justify-between my-5 leading-[1.5rem]'>
                        <h1 className={"text-cB text-3xl py-auto self-center font-medium text-center" }>Max Tokens Per Wallet:</h1>
                        <input onChange={handleMaxTokensPerWalletChange} type="text"  className={" h-10 flex w-[100%] sm:w-[90%] md:w-[60%] px-auto self-center md:self-start p-3 rounded-2xl bg-cC focus:outline-cB text-cB text-xl" }/>
                    </div>
                    <div className='flex flex-col md:flex-row  px-3 sm:px-3 md:px-5 align-middle justify-between my-5 leading-[1.5rem]'>
                        <h1 className={"text-cB text-3xl py-auto mx-auto lg:mx-0 self-center font-medium text-center" }>Price:</h1>
                        <input onChange={handlePriceChange} type="text"  className={" h-10 flex w-[100%] sm:w-[90%] md:w-[60%] px-auto self-center md:self-start p-3 rounded-2xl bg-cC focus:outline-cB text-cB text-xl"}/>
                    </div>
                    <div className='flex h-30 py-auto px-3 md:px-5 align-end mt-7 mb-3'>
                        <AnimatedButton type="submit" text={'Create'} className={"mx-auto"}/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
