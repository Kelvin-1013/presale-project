import React from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import '../styles/wallet-adapter.css'
import { WalletConnectProvider } from '../components/wallet/WalletConnectProvider';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectProvider>
      <Component {...pageProps} />
    </WalletConnectProvider>
  );
}

export default MyApp;