"use client"
import { isWebGL2Available } from '@react-three/drei';
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';
import { useState, useEffect } from 'react';

export default function useAirdrop() {
    console.log('airdrop is available');
    const [walletPublicKey, setWalletPublicKey] = useState("");
    const [airdropStatus, setAirdrop] = useState(false);
    const [isWalletConnected, setIsConnected] = useState(false);
    const updatePublicKey = (publicKey: string) => {
        setWalletPublicKey(publicKey);
        // alert(publicKey);
        // console.log(walletPublicKey);
        // setIsConnected(true);
        setAirdrop(true);
    };

    function  setWalletConnected (isConnected : boolean) {
        // alert(isConnected);
        setIsConnected(isConnected);
        // alert(isWalletConnected);

    }
    return { airdropStatus, updatePublicKey, isWalletConnected, setWalletConnected };
}
