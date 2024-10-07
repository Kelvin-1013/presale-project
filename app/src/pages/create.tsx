
import React, { useState, useMemo, useEffect } from 'react'
import BasicPage from '../components/basic/BasicPage'
import CreatePresaleForm from '../components/presales/CreatePresaleForm'
import usePresale from '../hooks/usePresale'
import ConnectWalletCard from '../components/wallet/ConnectWalletCard'
import AnimatedButton from '../components/animated/AnimatedButton'
import AnimatedOnViewTitleMd from '../components/animated/AnimatedOnViewTitleMd'
import { ClipLoader } from 'react-spinners';

export default function allPresales() {
  const { walletConnected, initializedWallet, transactionPending, initializeWallet } = usePresale();
  const { handleTransactionPending } = usePresale();
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const clickHandler = async () => {
    setLoading(true);
    handleTransactionPending(true);
    const transactionPending = await initializeWallet()
    setLoading(transactionPending);
    handleTransactionPending(transactionPending);
  }

  useMemo(() => {
    setConnected(walletConnected);
    setInitialized(initializedWallet);
  }, [walletConnected, initializedWallet, loading])
  useEffect(() => {
    setConnected(walletConnected);
    setInitialized(initializedWallet);
  }, [walletConnected, initializedWallet, loading])



  return (
    <BasicPage activePage={'Create'}>
      {!connected &&
        <div className='flex flex-col items-center justify-center text-center pt-20 -mb-30'>
          <div className='text-purple-600 text-5xl font-handwritten '>
            Now you are disconnected. <br />
            Connect your wallet!
          </div>
          <ConnectWalletCard />
        </div>
      }
      {connected && !initialized &&
        <>
          <div className='max-w-[1240px] mx-auto px-4 py-16 items-center flex flex-col'>
            <div className='py-2 px-3 md:p-3 md:px-5 items-center flex flex-col rounded-3xl bg-gray-200 text-black'>
              <div className='w-[80vw] sm:w-[500px] md:w-[600px] lg:w-[900px] items-center flex-col bg-gray-200 p-4 my-2 mx-auto rounded-2xl transition-colors duration-300 justify-center text-center text-black'>
                <AnimatedOnViewTitleMd text={"Initialize Your Wallet"} className={"mx-auto self-center bg-gray-200 justify-center flex text-center text-black"} />
                <br />
                <div className='flex h-30 py-auto px-3 md:px-5 align-end mt-7 mb-3'>
                  <AnimatedButton type="submit" text={'Initialize'} className={"mx-auto mb-4 text-black"} onClick={clickHandler} />
                </div>
                <ClipLoader color={"#bg-gray-200"} loading={loading} size={20} />
              </div>
            </div>
          </div>
        </>

      }

      {connected && initialized && !loading &&
        <>
          <CreatePresaleForm />
        </>
      }
    </BasicPage>
  )
}
