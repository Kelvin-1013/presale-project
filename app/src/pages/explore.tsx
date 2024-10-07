
import React from 'react'
import BasicPage from '../components/basic/BasicPage'
import PresaleSection from '../components/presales/PresaleSection';
import ConnectWalletCard from '../components/wallet/ConnectWalletCard';
import usePresale from '../hooks/usePresale'

export default function explore() {

  const { walletConnected, getAllPresales, transactionPending } = usePresale();

  return (
    <BasicPage activePage={'Discover'}>
      {walletConnected ? (
        <PresaleSection presales={getAllPresales} />

      ) : (
        <ConnectWalletCard />
      )
      }

    </BasicPage>
  )
}
