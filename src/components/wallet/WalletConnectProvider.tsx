import { useMemo, useEffect, useState } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react';
import useAirdrop from "../../hooks/useAirdrop";

export const WalletConnectProvider = ({ children }) => {

    const network = WalletAdapterNetwork.Devnet
    const QUICKNODE_RPC = 'YOUR_QUICKNODE_RPC_ENDPOINT';
    const [balance, setBalance] = useState<number | null>(0);
    // const endpoint = QUICKNODE_RPC;
    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Devnet) {
            return 'https://api.devnet.solana.com'
        }

        return clusterApiUrl(network)
    }, [network])

    const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter({ network }), new TorusWalletAdapter()], [network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletConnectedComponent>
                        {children}
                    </WalletConnectedComponent>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
const WalletConnectedComponent = ({ children }) => {
    const { updatePublicKey, setWalletConnected } = useAirdrop();
    const { wallet, publicKey, connected } = useWallet();
    useEffect(() => {
        if (publicKey) {

            updatePublicKey(publicKey.toBase58());
            setWalletConnected(true);
            console.log('Connected wallet public key:', publicKey.toBase58());
        }
        if (!connected) {
            setWalletConnected(true);
        }
        if (connected) {
            // alert(connected)
            setWalletConnected(false);
        }
    }, [connected]);
    // useEffect()
    return <>{children}</>;
};