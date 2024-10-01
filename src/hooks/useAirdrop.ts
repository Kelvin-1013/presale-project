"use client"
import { useState, useEffect } from 'react';

export default function useAirdrop() {
    console.log('airdrop is available');
    const [walletPublicKey, setWalletPublicKey] = useState("");
    const [airdropStatus, setAirdrop] = useState(false);
    const [isWalletConnected, setIsConnected] = useState(false);
    const updatePublicKey = (publicKey: string) => {
        setWalletPublicKey(publicKey);
        setAirdrop(true);
    };

    function  setWalletConnected (isConnected : boolean) {
        setIsConnected(isConnected);
    }
    return { airdropStatus, updatePublicKey, isWalletConnected, setWalletConnected };
}
