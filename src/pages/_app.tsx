import React from 'react';
import { ClerkProvider } from "@clerk/nextjs";
import { AppProps } from 'next/app';
import '../styles/index.css';
import '../styles/wallet-adapter.css'
import { WalletConnectProvider } from '../components/wallet/WalletConnectProvider';
import Script from "next/script";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectProvider>
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#000000" },
          elements: {
            formButtonPrimary:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            socialButtonsBlockButton:
              "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
            socialButtonsBlockButtonText: "font-semibold",
            formButtonReset:
              "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
            membersPageInviteButton:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            card: "bg-[#fafafa]",
          },
        }}
      >
        <Component {...pageProps} />
      </ClerkProvider>
      <div>
        <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
      </div>
    </WalletConnectProvider>
  );
}

export default MyApp;