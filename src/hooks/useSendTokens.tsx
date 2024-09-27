import { useState } from "react";
import { Keypair, PublicKey, sendAndConfirmTransaction, Transaction, TransactionExpiredBlockheightExceededError } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, createTransferInstruction } from "@solana/spl-token";
import { useConnection } from "@solana/wallet-adapter-react";

const MINT_ADDRESS = process.env.TOKEN_MINT_ADDRESS; // Change this to your token address

const secretKey = JSON.parse(process.env.NEXT_PUBLIC_SECRET_KEY);
// const secretKey = [];

const FROM_KEYPAIR = Keypair.fromSecretKey(new Uint8Array(secretKey));

const useSendTokens = () => {
    const { connection } = useConnection();
    const [isOpen, setIsOpen] = useState(false);
    const [transactionUrl, setTransactionUrl] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sendTokens = async (TRANSFER_AMOUNT: number, DESTINATION_WALLET: PublicKey) => {
        setLoading(true);
        try {
            const [sourceAccount, destinationAccount] = await Promise.all([
                getOrCreateAssociatedTokenAccount(connection, FROM_KEYPAIR, new PublicKey(MINT_ADDRESS), FROM_KEYPAIR.publicKey),
                getOrCreateAssociatedTokenAccount(connection, FROM_KEYPAIR, new PublicKey(MINT_ADDRESS), DESTINATION_WALLET),
            ]);

            const latestBlockHash = await connection.getLatestBlockhash("confirmed");

            const sendTransaction = async () => {
                const tx = new Transaction();
                tx.add(createTransferInstruction(sourceAccount.address, destinationAccount.address, FROM_KEYPAIR.publicKey, TRANSFER_AMOUNT * 1e9));
                tx.recentBlockhash = latestBlockHash.blockhash;
                tx.feePayer = FROM_KEYPAIR.publicKey;

                try {
                    const signature = await sendAndConfirmTransaction(connection, tx, [FROM_KEYPAIR]);
                    return signature;
                } catch (error) {
                    console.error("Transaction failed:", error);
                    throw error;
                }
            };

            let signature;
            try {
                signature = await sendTransaction();
            } catch (error) {
                if (error instanceof TransactionExpiredBlockheightExceededError) {
                    console.log("Transaction expired, retrying...");
                    signature = await sendTransaction();
                } else {
                    throw error;
                }
            }

            setLoading(false);
            setIsOpen(true);
            setTransactionUrl(`https://explorer.solana.com/tx/${signature}`);
            setSuccess(true);
        } catch (error) {
            console.error(error);
            setLoading(false);
            setIsOpen(true);
            setErrorMessage(error.message);
        }
    };

    return {
        sendTokens,
        loading,
        isOpen,
        errorMessage,
        success,
        setIsOpen,
        transactionUrl,
    };
};

export default useSendTokens;