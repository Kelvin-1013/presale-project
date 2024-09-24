import { useMemo, useEffect } from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react';
import { setPublicKey } from "../../hooks/useAirdrop";

export const WalletConnectProvider = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet

    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Devnet) {
            return 'https://api.devnet.solana.com'
        }

        return clusterApiUrl(network)
    }, [network])

    const wallets = useMemo(() => [new PhantomWalletAdapter(), new GlowWalletAdapter(), new SlopeWalletAdapter(), new SolflareWalletAdapter({ network }), new TorusWalletAdapter()], [network])

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
    const { wallet, publicKey } = useWallet();
    useEffect(() => {
        if (publicKey) {
            setPublicKey(publicKey.toBase58());
            console.log('Connected wallet public key:', publicKey.toBase58());
        }
    }, [publicKey]);
    return <>{children}</>;
};