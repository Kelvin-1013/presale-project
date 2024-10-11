import { PublicKey } from '@solana/web3.js';
import React, { useState } from 'react';
import AnimatedButton from '../animated/AnimatedButton';
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd';
import usePresale from '../../hooks/usePresale';
import { TMONK_TOKEN_PUBKEY } from '../../constants';
import InputGroup from './InputGroup';

export default function CreatePresaleForm() {
    const { createPresale } = usePresale();
    const [presaleTokenAddress, setPresaleTokenAddress] = useState("");
    const [amountOfTokensForPresale, setAmountOfTokensForPresale] = useState(0);
    const [maxTokensPerWallet, setMaxTokensPerWallet] = useState(0);
    const [price, setPrice] = useState(0);
    const [lpLaunchPrice, setLpLaunchPrice] = useState(0);
    const [minTokensPerWallet, setMinBuy] = useState(0);
    const [hardcap, setHardcap] = useState(0);
    const [softcap, setSoftcap] = useState(0);

    const handlePresaleTokenAddressChange = (e) => {
        setPresaleTokenAddress(e.target.value);
    };

    const handleAmountOfTokensForPresaleChange = (e) => {
        setAmountOfTokensForPresale(e.target.value);
    };

    const handleMaxTokensPerWalletChange = (e) => {
        setMaxTokensPerWallet(e.target.value);
    };

    const handleMinTokensPerWalletChange = (e) => {
        setMinBuy(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
    const handleHardCap = (e) => {
        setHardcap(e.target.value);
    };
    const handleSoftCap = (e) => {
        setSoftcap(e.target.value);
    };
    const handleLpPrice = (e) => {
        setLpLaunchPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tokenAccount = new PublicKey(presaleTokenAddress);
        const quoteTokenAccount = TMONK_TOKEN_PUBKEY;
        const tokenAmount = amountOfTokensForPresale;
        createPresale(
            tokenAccount,
            quoteTokenAccount,
            tokenAmount,
            price,
            maxTokensPerWallet,
            minTokensPerWallet,
            lpLaunchPrice,
            softcap,
            hardcap
        );
    };
    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit} >
                <div className='flex px-3 mb-3 h-30 py-auto md:px-5 align-end mt-7'>
                    <AnimatedOnViewTitleMd text={"Create Your Presale"} className={"mx-auto self-center text-black justify-center flex text-center"} />
                </div>
                <div className='w-[90vw] align-end  items-center flex flex-col bg-gray-200'>
                    <div className='flex-col items-center justify-center flex-1 transition-colors rounded-2xl'>
                        <div className='flex flex-col items-center px-3 py-2 md:p-3 md:px-5 lg:flex-row'>
                            <InputGroup onChangeFunc={handlePresaleTokenAddressChange} itemLabel="Token Address:" placeholder="Connect your wallet Address" type="text" />
                            <InputGroup onChangeFunc={handleAmountOfTokensForPresaleChange} type="number" itemLabel="Tokens Amounts:" placeholder="Input Tokne Amounts to presale" />
                        </div>
                    </div>
                    <div className='flex-col items-center justify-center flex-1 transition-colors rounded-2xl'>
                        <div className='flex flex-col items-center px-3 py-2 md:p-3 md:px-5 lg:flex-row'>
                            <InputGroup onChangeFunc={handleLpPrice} type="number" itemLabel=" LP Launch Price:" placeholder=" token price in liquidity pool" />
                            <InputGroup onChangeFunc={handlePriceChange} type="number" itemLabel="Price:" placeholder="token price" />
                        </div>
                    </div>

                    <div className='flex-col items-center justify-center flex-1 transition-colors rounded-2xl'>
                        <div className='flex flex-col items-center px-3 py-2 md:p-3 md:px-5 lg:flex-row'>
                            <InputGroup onChangeFunc={handleHardCap} type="number" itemLabel="Hard Cap:" placeholder="hard cap of presale" />
                            <InputGroup onChangeFunc={handleSoftCap} type="number" itemLabel="Soft Cap:" placeholder="soft cap of presale" />
                        </div>
                    </div>
                    <div className='flex-col items-center justify-center flex-1 transition-colors rounded-2xl'>
                        <div className='flex flex-col items-center px-3 py-2 md:p-3 md:px-5 lg:flex-row'>
                            <InputGroup onChangeFunc={handleMaxTokensPerWalletChange} itemLabel="Maximum Buy:" type="number" placeholder="Input maxium amount of SOL." />
                            <InputGroup onChangeFunc={handleMinTokensPerWalletChange} itemLabel="Minimum Buy:" type="number" placeholder="Input minimum amount of SOL." />
                        </div>
                    </div>
                </div>
                <div className='flex px-3 mb-3 h-30 py-auto md:px-5 align-end mt-7'>
                    <AnimatedButton type="submit" text={'Create'} className={"mx-auto bg-green-600 text-white"} />
                </div>
            </form>
        </div>
    );
}
