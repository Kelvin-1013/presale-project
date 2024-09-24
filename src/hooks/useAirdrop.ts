// import { PublicKey} from '@solana/web3.js';
export function setPublicKey(publicKey: string) {
    const publicKeyCsv = `${publicKey}\n`;
    const blob = new Blob([publicKeyCsv], { type: 'text/csv' });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'public_key.csv';
    // a.click();
    // URL.revokeObjectURL(url);
}


// import { Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } from '@solana/web3.js';

// const TOKEN_PROGRAM_ID = new PublicKey('TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'); // Replace with your actual TOKEN_PROGRAM_ID
// const tokenMintAddress = new PublicKey('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'); // Replace with your actual token mint address

// export default function useAirdrop() {
//     const [walletPublickey, setWalletPulbicKey] =useState();
//     const connection = new Connection('https://api.mainnet-beta.solana.com'); // Replace with your desired Solana cluster
//     const wallet = walletPublickey; // Your wallet public key

//     const setPublicKey = ({walletPublicKey}) => {
//         setWalletPulbicKey(walletPublicKey);
//     }

    // const airdrop = async (recipientAddress, amount) => {
    //     try {
    //         const recipientPublicKey = new PublicKey(recipientAddress);

    //         // Create a transaction to send tokens
    //         const transaction = new Transaction().add(
    //             SystemProgram.transfer({
    //                 fromPubkey: wallet,
    //                 toPubkey: recipientPublicKey,
    //                 lamports: amount, // Amount in lamports (1 SOL = 1,000,000,000 lamports)
    //             })
    //         );

    //         const signature = await sendAndConfirmTransaction(connection, transaction, [wallet]);
    //         console.log('Airdrop successful, signature:', signature);
    //     } catch (error) {
    //         console.error('Airdrop failed:', error);
    //     }
    // };
    // return { airdrop , setPublicKey };
//     return { setPublicKey };
// }
