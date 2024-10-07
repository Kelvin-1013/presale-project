import * as anchor from '@project-serum/anchor';
import { BN } from "@project-serum/anchor";
import { useEffect, useMemo, useState } from 'react';
import { PRESALE_PROGRAM_PUBKEY, PRESALE_SEED, WALLET_SEED } from '../constants';
import { IDL, TokenPresale } from '../interfaces/token_presale';
import { SystemProgram, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes';
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey';
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { authorFilter } from '../utils';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function usePresale() {
    const [tokenPrice, setTokenPrice] = useState(0.0025);
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const anchorWallet = useAnchorWallet();
    const [walletConnected, setWalletConnected] = useState(false);
    const [initializedWallet, setInitializedWallet] = useState(false);
    const [nextPresaleIdentifier, setNextPresaleIdentifier] = useState(0);
    const [myPresales, setMyPresales] = useState([]);
    const [allPresales, setAllPresales] = useState([]);
    const [loading, setLoading] = useState(false);
    const [transactionPending, setTransactionPending] = useState(false);
    const [walletBalance, setWalletBalance] = useState(0);
    const program = useMemo(() => {
        if (anchorWallet) {
            const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions())
            return new anchor.Program(IDL, PRESALE_PROGRAM_PUBKEY, provider)
        }
    }, [connection, anchorWallet]);

    
    const handleTransactionPending = (pending: boolean) => {
        setTransactionPending(pending);
    }
    const getPresaleEndTime = () => {
        return 12032102198;
    }
    const getStartedTime = () => {
    // return Math.floor(Date.now() / 1000);
        return 12000000000;
    }

    const getSolanaAirdrop = async () => {
            const airdropSignature = connection.requestAirdrop(
                publicKey,
                2 * LAMPORTS_PER_SOL,
            );
            try{
                const txId = await airdropSignature;
                console.log(`Airdrop Transaction Id: ${txId}`);
                console.log(`https://explorer.solana.com/tx/${txId}?cluster=devnet`)
                return false
            }
            catch(err){
                console.log(err);
                return false
            }
        }

        const buyToken =({walletAdress, solAmount}) => {

        }

    const registerWallet = async () => {
        const currentTime = new Date().toISOString();
        try {
            const response = await axios.post('/api/registerWallet', {
                publicKey: publicKey,
                currentTime: currentTime
            });
            localStorage.setItem('publicKey', publicKey.toString());
            return response.data; // Return the created wallet data
        } catch (error) {
            console.error('Error creating wallet:', error);
            throw error; // Rethrow the error for handling in the component
        }
    };
    const fetchWalletBalance = async () => {
        try {
                const balance = await connection.getBalance(new PublicKey(publicKey));
                setWalletBalance(balance / LAMPORTS_PER_SOL); // Assuming the API returns { balance: <amount> }
            } catch (error) {
                console.error('Error fetching wallet balance:', error);
            }
    };

    useEffect(() => {
        if (publicKey) {
            registerWallet();
            fetchWalletBalance();
        }
        else{
            localStorage.removeItem('publicKey');
        }
    }, [publicKey]);

    useEffect(() => {
        const findWalletAccounts = async () => {
            if (program && publicKey && !transactionPending) {
                try {
                    setLoading(true);
                    const [walletPDA, walletBump] = await findProgramAddressSync([Buffer.from(WALLET_SEED), publicKey.toBuffer()], program.programId);
                    const walletDetailsAccount = await program.account.walletDetails.fetch(walletPDA);
                    const nextPresaleIdentifier = walletDetailsAccount.nextPresaleIdentifier;
                    setNextPresaleIdentifier(nextPresaleIdentifier);

                    if (walletDetailsAccount) {
                        setInitializedWallet(true)
                        const myPresaleAccounts = await program.account.presaleDetails.all([authorFilter(publicKey.toString())]);
                        setMyPresales(myPresaleAccounts);
                        const allPresaleAccounts = await program.account.presaleDetails.all();
                        setAllPresales(allPresaleAccounts);
                    } else {
                        setInitializedWallet(false)
                    }
                } catch (error) {
                    console.log(error)
                    setInitializedWallet(false)
                    setMyPresales([])
                } finally {
                    setLoading(false)
                }
            }
        }

        findWalletAccounts()
    }, [publicKey, program, transactionPending, connection, anchorWallet]);

    useEffect(() => {
        if (program && publicKey) {
            setWalletConnected(true);
        }
        else {
            setWalletConnected(false);
        }
    }, [publicKey, program]);

    const initializeWallet = async () => {
        if (program && publicKey) {
            try {
                setTransactionPending(true)
                const [walletPDA, walletBump] = findProgramAddressSync([Buffer.from(WALLET_SEED), publicKey.toBuffer()], program.programId)

                const tx = await program.methods
                    .initializeWallet( )
                    .accounts({
                        walletDetails: walletPDA,
                        authority: publicKey,
                        systemProgram: SystemProgram.programId,
                    })
                    .rpc();
                setInitializedWallet(true)
                toast.success('Successfully initialized user.')
                return false
            } catch (error) {
                console.log(error)
                toast.error(error.toString())
                return false
            } finally {
                setTransactionPending(false)
            }
        }
    }

    const createPresale = async (
        tokenAccount: PublicKey,
        quoteTokenAccount: PublicKey,
        tokenAmount: number,
        maxTokensPerWallet: number,
        price: number,
        minTokensPerWallet : number,
        lpLaunchPrice : number,
        softcap : number,
        hardcap : number) => {
        let tokenAmountBN = new BN(tokenAmount);
        let maxTokensPerWalletBN = new BN(maxTokensPerWallet);
        let priceBN = new BN(price);
        if (program && publicKey) {
            try {
                setTransactionPending(true)
                const [walletPDA, walletBump] = findProgramAddressSync([utf8.encode(WALLET_SEED), publicKey.toBuffer()], program.programId)
                const [presalePDA, presaleBump] = findProgramAddressSync([utf8.encode(PRESALE_SEED), publicKey.toBuffer(), Uint8Array.from([nextPresaleIdentifier])], program.programId)

                await program.methods
                    .createPresale(tokenAccount, quoteTokenAccount, tokenAmountBN, maxTokensPerWalletBN, priceBN)
                    .accounts({
                        walletDetails: walletPDA,
                        presaleDetails: presalePDA,
                        authority: publicKey,
                        systemProgram: SystemProgram.programId,
                    })
                    .rpc()
                toast.success('Successfully created a presale.')
            } catch (error) {
                console.log(error)
                toast.error(error.toString())
            } finally {
                setTransactionPending(false)
            }
        }
    }

    const editPresale = async (tokenAccount: PublicKey, quoteTokenAccount: PublicKey, tokenAmount: number, maxTokensPerWallet: number, price: number, presaleIdentifier: number) => {
        let tokenAmountBN = new BN(tokenAmount);
        let maxTokensPerWalletBN = new BN(maxTokensPerWallet);
        let priceBN = new BN(price);
        if (program && publicKey) {
            try {
                setTransactionPending(true)
                const [walletPDA, walletBump] = findProgramAddressSync([utf8.encode(WALLET_SEED), publicKey.toBuffer()], program.programId)
                const [presalePDA, presaleBump] = findProgramAddressSync([utf8.encode(PRESALE_SEED), publicKey.toBuffer(), Uint8Array.from([presaleIdentifier])], program.programId)

                await program.methods
                    .editPresale(nextPresaleIdentifier, tokenAccount, quoteTokenAccount, tokenAmountBN, maxTokensPerWalletBN, priceBN)
                    .accounts({
                        presaleDetails: presalePDA,
                        authority: publicKey
                    })
                    .rpc()
                toast.success('Successfully edited a presale.')
            } catch (error) {
                console.log(error)
                toast.error(error.toString())
            } finally {
                setTransactionPending(false)
            }
        }
    }

    const getAllPresales = useMemo(() => allPresales.filter((presale) => presale), [allPresales])

    return {walletConnected, initializedWallet, initializeWallet, loading, transactionPending, createPresale, editPresale, handleTransactionPending, getAllPresales, getSolanaAirdrop, getPresaleEndTime, getStartedTime , publicKey , walletBalance, tokenPrice , buyToken }
}
