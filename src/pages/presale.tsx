import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import * as web3 from '@solana/web3.js';
// import toast, { ToastContainer } from "react-toastify";
import useSendTokens from '../hooks/useSendTokens';
import 'react-toastify/dist/ReactToastify.css';
import toast from 'toast';

const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS; // Change this to your token address

const Presale = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0);
  const [txSig, setTxSig] = useState(null);
  const { sendTokens } = useSendTokens();

  const handleTransaction = async () => {
    if (!publicKey) {
      toast.error("Please connect your wallet.");
      return;
    }

    const transaction = new web3.Transaction();
    const instruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      lamports: amount * web3.LAMPORTS_PER_SOL,
      toPubkey: new web3.PublicKey(TOKEN_ADDRESS),
    });

    transaction.add(instruction);

    try {
      const signature = await sendTransaction(transaction, connection);
      setTxSig(signature);
      await sendTokens(amount, publicKey);
      toast.success("Deposit Successful! Your token will appear in your wallet soon.");
    } catch (error) {
      console.error(error);
      toast.error("Transaction failed.");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Solana Token Presale</h1>
      <div className="mt-8">
        <p>Token Price: 1 SOL</p>
        <input
          type="number"
          className="p-2 mt-4 border"
          placeholder="Amount of tokens"
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button
          className="p-2 mt-4 text-white bg-blue-500"
          onClick={handleTransaction}
        >
          Buy Tokens
        </button>
      </div>
      {txSig && <p>Transaction Signature: {txSig}</p>}
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      /> */}
    </div>
  );
};

export default Presale;
