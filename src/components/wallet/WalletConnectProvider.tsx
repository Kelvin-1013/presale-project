import { useMemo, useEffect} from 'react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider,  useWallet } from '@solana/wallet-adapter-react'
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui'
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import axios from 'axios';

export const WalletConnectProvider = ({ children }) => {
    const { publicKey } = useWallet();
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet
    const endpoint = useMemo(() => {
        if (network === WalletAdapterNetwork.Devnet) {
            return 'https://api.devnet.solana.com'
        }
        return clusterApiUrl(network)
    }, [network])

    const registerWallet = async () => {
        const currentTime = new Date().toISOString();
        try {
            const response = await axios.post('/api/requireAirdrop', {
                publicKey: publicKey,
                currentTime: currentTime
            });
            alert('walletData is registered.');
            return response.data; // Return the created wallet data
        } catch (error) {
            console.error('Error creating wallet:', error);
            throw error; // Rethrow the error for handling in the component
        }
    };
    useEffect(()=> {
        if (publicKey) {
            registerWallet();
        }
    }, [publicKey]);

    const wallets = useMemo(() => [new PhantomWalletAdapter(), new GlowWalletAdapter(), new SlopeWalletAdapter(), new SolflareWalletAdapter({ network }), new TorusWalletAdapter()], [network])

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}