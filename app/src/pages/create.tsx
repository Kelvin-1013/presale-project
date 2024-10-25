
import React, { useState, useMemo, useEffect } from 'react'
import BasicPage from '../components/basic/BasicPage'
import CreatePresaleForm from '../components/presales/CreatePresaleForm'
import usePresale from '../hooks/usePresale'
import ConnectWalletCard from '../components/wallet/ConnectWalletCard'
import AnimatedButton from '../components/animated/AnimatedButton'
import AnimatedOnViewTitleMd from '../components/animated/AnimatedOnViewTitleMd'
import { ClipLoader } from 'react-spinners';

export default function allPresales() {
  const { walletConnected, initializedWallet, transactionPending } = usePresale();
  const { handleTransactionPending } = usePresale();
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const clickHandler = async () => {
    setLoading(true);
    handleTransactionPending(true);
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
        <div className='flex flex-col items-center justify-center text-center pt-20 -mb-30 mt-36'>
          <div className='text-purple-600 text-5xl font-handwritten '>
            Now you are disconnected. <br />
            Connect your wallet!
          </div>
          <ConnectWalletCard />
        </div>
      }

      {connected && !loading &&
        <>
          <CreatePresaleForm />
        </>
      }
    </BasicPage>
  )
}
