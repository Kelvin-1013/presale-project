import React from 'react'
import WalletMultiButtonDynamic from './WalletMultiButtonDynamic'
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd'

export default function ConnectWalletCard() {
    return (
        <div className='max-w-[1240px] mx-auto px-4 items-center flex flex-col bg-gray-200'>
            <div className='  px-3 md:p-3 md:px-5  flex flex-col rounded-3xl ' >
                <AnimatedOnViewTitleMd text={"Connect Wallet"} className={"mx-auto self-center  justify-center flex text-center"} />
                <div className='flex h-30 py-auto px-3 md:px-5 align-end mb-3'>
                    <div className={"mx-auto mb-4"}>
                        <WalletMultiButtonDynamic />
                    </div>
                </div>
            </div>
        </div>
    )
}
