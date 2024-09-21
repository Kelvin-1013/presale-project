import React, {useState} from 'react'
import AnimatedButton from '../animated/AnimatedButton'
import AnimatedOnViewTitleMd from '../animated/AnimatedOnViewTitleMd'
import usePresale from '../../hooks/usePresale'
import { ClipLoader } from 'react-spinners';

export default function InitializeWalletCard() {
  const {handleTransactionPending} = usePresale();
  const [loading, setLoading] = useState(false);
  const  clickHandler = async () => {
    setLoading(true);
    handleTransactionPending(true);
    const transactionPending = await initializeWallet()
    setLoading(transactionPending);
    handleTransactionPending(transactionPending);

  }
  const { initializeWallet} = usePresale();
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 items-center flex flex-col'>
        <div className=' py-2 px-3 md:p-3 md:px-5  items-center flex flex-col rounded-3xl bg-cB' >
            <div className='w-[80vw]  sm:w-[500px] md:w-[600px] lg:w-[900px] items-center flex-col bg-cA p-4 my-2 al mx-auto rounded-2xl transition-colors duration-300 justify-center text-center'>
                <AnimatedOnViewTitleMd text={"Initialize Your Wallet"} className={"mx-auto self-center text-cB justify-center flex text-center" }/>
                <div className='flex h-30 py-auto px-3 md:px-5 align-end mt-7 mb-3'> 
                        <AnimatedButton type="submit" text={'Initialize'} className={"mx-auto mb-4"} onClick={clickHandler}/>
                </div>
                <ClipLoader color={"#e83838"} loading={loading} size={20} />
            </div>
        </div>
    </div>
  )
}
