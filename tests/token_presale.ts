import * as anchor from "@project-serum/anchor";
import { Program, web3, BN } from "@project-serum/anchor";
import { TokenPresale } from "../target/types/token_presale";
import { PublicKey } from "@solana/web3.js";
import {
  TOKEN_PROGRAM_ID,
  MINT_SIZE,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  createInitializeMintInstruction,
  getAccount
} from "@solana/spl-token"; 
import { assert } from "chai";
import { 
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID
} from '@metaplex-foundation/mpl-token-metadata';
import { ASSOCIATED_PROGRAM_ID } from '@project-serum/anchor/dist/cjs/utils/token';

// BAB metadata - https://gateway.pinata.cloud/ipfs/QmbYunxDx4cpsf8KWdmDyiS8E41HW1QdBDLww3HUAyUgPP?_gl=1*1fecquc*_ga*MjA5NDM1ODAyMy4xNjU4MzI5NzY1*_ga_5RMPXG14TE*MTY3NTQyNDMxNC40LjEuMTY3NTQyNTU2OS4zNS4wLjA.

describe("token_presale", () => {
  // Configure the client to use the local cluster.

  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.TokenPresale as Program<TokenPresale>;
  const PROGRAM_ID = program.programId;

  const WALLET_SEED = "WALLET_SEED";
  const PRESALE_SEED = "PRESALE_SEED";

  const myWallet = anchor.AnchorProvider.env().wallet;
  const payer = anchor.AnchorProvider.env().wallet as anchor.Wallet;
  const myPubkey = myWallet.publicKey;

  const pubkey1 = anchor.web3.Keypair.generate().publicKey;
  const pubkey2 = anchor.web3.Keypair.generate().publicKey;
  const TEN = new BN(10);
  const ONE = new BN(1);
  const TWO = new BN(2);

  const tokenTitle = "BuildABonkToken";
  const tokenSymbol = "BAB";
  const tokenUri = "https://gateway.pinata.cloud/ipfs/QmbYunxDx4cpsf8KWdmDyiS8E41HW1QdBDLww3HUAyUgPP?_gl=1*1fecquc*_ga*MjA5NDM1ODAyMy4xNjU4MzI5NzY1*_ga_5RMPXG14TE*MTY3NTQyNDMxNC40LjEuMTY3NTQyNTU2OS4zNS4wLjA.";
  const quoteTokenTitle = "USDC";
  const quoteTokenSymbol = "USDC";
  const quoteTokenUri = "https://gateway.pinata.cloud/ipfs/QmW1YL2G1oY4RCHD78rhYJ15PP2Qo4Vd17wX2CmZpmn2vv?_gl=1*1wwza3w*_ga*MjA5NDM1ODAyMy4xNjU4MzI5NzY1*_ga_5RMPXG14TE*MTY3NjQ2MzgzOC43LjEuMTY3NjQ2Mzg0OS40OS4wLjA.";

  const mintKeypair: anchor.web3.Keypair = anchor.web3.Keypair.generate();
  const bABTokenPubkey = new PublicKey("FTiEdZ1fjNGTaHDgc7uwzMVFTKx1eDpDxR57Uhg6M4aK");
  const quoteTokenPubkey = new PublicKey("APaCo32kC5hkJVHotZv3uG3p3eZMCAvXRojqB9P7865v");
  const MINT_DECIMALS = 10 ** 9;

  const recipientWallet: anchor.web3.Keypair = anchor.web3.Keypair.generate();
  const presaleAuthorityPubkey = myPubkey;


  const getWalletPDA = async () => {
    return (
      await PublicKey.findProgramAddressSync(
        [Buffer.from(WALLET_SEED), myPubkey.toBuffer()],
        PROGRAM_ID
      )
    )[0];
  };

  const getPresalePDA = async (presaleIdentifier: number) => {
    return (
      await PublicKey.findProgramAddressSync(
        [Buffer.from(PRESALE_SEED), myPubkey.toBuffer(), Uint8Array.from([presaleIdentifier])],
        PROGRAM_ID
      )
    )[0];
  };

  

  console.log(`My pubkey: ${myPubkey}`);
  console.log(`pubkey1: ${pubkey1}`);
  console.log(`pubkey2: ${pubkey2}`);

  it("Wallet account is initialized!", async () => {
    const walletPDA = await getWalletPDA();
    console.log(`Wallet account address: ${walletPDA}`);

    const tx = await program.methods
      .initializeWallet( )
      .accounts({
        walletDetails: walletPDA,
        authority: myPubkey,
        systemProgram: web3.SystemProgram.programId,
      })
      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Presale account 0 is initialized!", async () => {

    const walletPDA = await getWalletPDA();
    const presalePDA = await getPresalePDA( 0 );
    console.log(`Wallet address: ${walletPDA}`);
    console.log(`Presale address: ${presalePDA}`);

    const tx = await program.methods
      .createPresale( pubkey1, pubkey2, TEN, ONE, TWO )
      .accounts({
        walletDetails: walletPDA,
        presaleDetails: presalePDA,
        authority: myPubkey,
        systemProgram: web3.SystemProgram.programId,
      })
      .rpc();

    console.log("Your transaction signature", tx);
  });
  it("Presale account 1 is initialized!", async () => {

    const walletPDA = await getWalletPDA();
    const presalePDA = await getPresalePDA( 1 );
    console.log(`Wallet address: ${walletPDA}`);
    console.log(`Presale address: ${presalePDA}`);

    const tx = await program.methods
      .createPresale( pubkey1, pubkey2, TEN, ONE, TWO )
      .accounts({
        walletDetails: walletPDA,
        presaleDetails: presalePDA,
        authority: myPubkey,
        systemProgram: web3.SystemProgram.programId,
      })
      .rpc();

    console.log("Your transaction signature", tx);
  });

  it("Edited presale account 1!", async () => {

    const presalePDA = await getPresalePDA( 1 );
    console.log(`Presale address: ${presalePDA}`);

    const tx = await program.methods
      .editPresale( 1, pubkey1, pubkey2, ONE, ONE, TEN )
      .accounts({
        presaleDetails: presalePDA,
        authority: myPubkey
      })
      .rpc();

    console.log("Your transaction signature", tx);
  });

  it("Got accounts!", async () => {

    const walletPDA = await getWalletPDA();
    const presalePDA = await getPresalePDA( 1 );
    console.log(`Presale address: ${presalePDA}`);

    const walletAccounts = await program.account.walletDetails.all();
    const presaleAccounts = await program.account.presaleDetails.all();
    const presaleAccount = await program.account.presaleDetails.fetch(presalePDA);
    const allAccounts = await program.account;

    // const todoAccounts = await program.account.todoAccount.all([authorFilter(publicKey.toString())])

    // const incompleteTodos = useMemo(() => todos.filter((todo) => !todo.account.marked), [todos])
    // const completedTodos = useMemo(() => todos.filter((todo) => todo.account.marked), [todos])

    console.log(walletAccounts);
    console.log(presaleAccounts);
    console.log(allAccounts);

  });

  /*

  it("Create an SPL Token!", async () => {

    const metadataAddress = (await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mintKeypair.publicKey.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    ))[0];

    const sx = await program.methods.createToken(
      quoteTokenTitle, quoteTokenSymbol, quoteTokenUri
    )
      .accounts({
        metadataAccount: metadataAddress,
        mintAccount: mintKeypair.publicKey,
        mintAuthority: payer.publicKey,
        payer: payer.publicKey,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      })
      .signers([mintKeypair, payer.payer])
      .rpc();

    console.log("Success!");
        console.log(`   Mint Address: ${mintKeypair.publicKey}`);
        console.log(`   Tx Signature: ${sx}`);
  });

  it("Mint some tokens to your wallet!", async () => {

    const associatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: mintKeypair.publicKey,
      owner: payer.publicKey,
    });

    const sx = await program.methods.mintTo(
      new anchor.BN(150)
    )
      .accounts({
        associatedTokenAccount: associatedTokenAccountAddress,
        mintAccount: mintKeypair.publicKey,
        mintAuthority: payer.publicKey,
        payer: payer.publicKey,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
      })
      .signers([payer.payer])
      .rpc();

    console.log("Success!");
        console.log(`   Mint Address: ${mintKeypair.publicKey}`);
        console.log(`   Tx Signature: ${sx}`);
  });
  */

  it("Mint 1M BAB tokens to your wallet!", async () => {

    const associatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: payer.publicKey,
    });

    const tx = await program.methods.mintTo(
      new anchor.BN(1000000 * MINT_DECIMALS)
    )
    .accounts({
      associatedTokenAccount: associatedTokenAccountAddress,
      mintAccount: bABTokenPubkey,
      mintAuthority: payer.publicKey,
      payer: payer.publicKey,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      systemProgram: anchor.web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
    })
    .signers([payer.payer])
    .rpc();

    console.log("Success!");
        console.log(`   Mint Address: ${bABTokenPubkey}`);
        console.log(`   Your BAB Token ATA: ${associatedTokenAccountAddress}`)
        console.log(`   Tx Signature: ${tx}`);
  });

  it("Mint 1M USDC tokens to your wallet!", async () => {

    const associatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: quoteTokenPubkey,
      owner: payer.publicKey,
    });

    const tx = await program.methods.mintTo(
      new anchor.BN(1000000 * MINT_DECIMALS)
    )
    .accounts({
      associatedTokenAccount: associatedTokenAccountAddress,
      mintAccount: quoteTokenPubkey,
      mintAuthority: payer.publicKey,
      payer: payer.publicKey,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      systemProgram: anchor.web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
    })
    .signers([payer.payer])
    .rpc();

    console.log("Success!");
        console.log(`   Mint Address: ${quoteTokenPubkey}`);
        console.log(`   Your USDC Token ATA: ${associatedTokenAccountAddress}`)
        console.log(`   Tx Signature: ${tx}`);
  });

  it("Deposit tokens to presale PDA 1!", async () => {

    const presalePDA = await getPresalePDA( 1 );

    console.log(`Presale address: ${presalePDA}`);

    console.log( `Mint: ${bABTokenPubkey}`)

    const fromAssociatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: payer.publicKey,
    });

    console.log(`From: ${fromAssociatedTokenAccountAddress}`);

    const toAssociatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: presalePDA,
    });

    console.log(`To: ${toAssociatedTokenAccountAddress}`);

    const sx = await program.methods.depositPresaleTokens(
      new anchor.BN(150 * MINT_DECIMALS),
      1
    )
    .accounts({
      mintAccount: bABTokenPubkey,
      fromAssociatedTokenAccount: fromAssociatedTokenAccountAddress,
      fromAuthority: payer.publicKey,
      toAssociatedTokenAccount: toAssociatedTokenAccountAddress,
      presaleDetailsPda: presalePDA,
      payer: payer.publicKey,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      systemProgram: anchor.web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
    })
    .signers([payer.payer])
    .rpc();

    console.log("Success!");
        console.log(`   Mint Address: ${bABTokenPubkey}`);
        console.log(`   Tx Signature: ${sx}`);
  });

  it("Withdraw tokens from presale PDA 1!", async () => {

    const presalePDA = await getPresalePDA( 1 );

    console.log(`Presale address: ${presalePDA}`);

    console.log( `Mint: ${bABTokenPubkey}`)

    const fromAssociatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: presalePDA,
    });

    console.log(`From: ${fromAssociatedTokenAccountAddress}`);

    const toAssociatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: payer.publicKey,
    });

    console.log(`To: ${toAssociatedTokenAccountAddress}`);

    const sx = await program.methods.withdrawPresaleTokens(
      new anchor.BN(150 * MINT_DECIMALS),
      1
    )
    .accounts({
      presaleDetailsPda: presalePDA,
      mintAccount: bABTokenPubkey,
      presaleAssociatedTokenAccount: fromAssociatedTokenAccountAddress,
      toAssociatedTokenAccount: toAssociatedTokenAccountAddress,
      recipient: payer.publicKey,
      authority: payer.publicKey,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      systemProgram: anchor.web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
    })
    .signers([payer.payer])
    .rpc({skipPreflight: true});

    console.log("Success!");
        console.log(`   Mint Address: ${bABTokenPubkey}`);
        console.log(`   Tx Signature: ${sx}`);
  });


  it("Buy tokens from presale 1!", async () => {

    const presalePDA = await getPresalePDA( 1 );

    console.log(`Presale address: ${presalePDA}`);

    console.log( `Presale token mint: ${bABTokenPubkey}`);
    console.log( `Quote token mint: ${quoteTokenPubkey}`);

    // Quote token ATAs

    const buyerQuoteTokenAssociatedTokenAccount = await anchor.utils.token.associatedAddress({
      mint: quoteTokenPubkey,
      owner: myPubkey,
    });
    const presaleQuoteTokenAssociatedTokenAccount = await anchor.utils.token.associatedAddress({
      mint: quoteTokenPubkey,
      owner: presalePDA,
    });

    // Presale token ATAs

    const buyerPresaleTokenAssociatedTokenAccount = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: myPubkey,
    });
    const presalePresaleTokenAssociatedTokenAccount = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: presalePDA,
    });


    const sx = await program.methods.buyPresaleTokens(
      new anchor.BN(150 * MINT_DECIMALS),
      1,
      presaleAuthorityPubkey
    )
    .accounts({
      quoteTokenMintAccount: quoteTokenPubkey,
      buyerQuoteTokenAssociatedTokenAccount: buyerQuoteTokenAssociatedTokenAccount,
      presaleQuoteTokenAssociatedTokenAccount: presaleQuoteTokenAssociatedTokenAccount,
      presaleTokenMintAccount: bABTokenPubkey,
      buyerPresaleTokenAssociatedTokenAccount: buyerPresaleTokenAssociatedTokenAccount,
      presalePresaleTokenAssociatedTokenAccount: presalePresaleTokenAssociatedTokenAccount,
      presaleDetailsPda: presalePDA,
      buyerAuthority: payer.publicKey,
      buyer: payer.publicKey,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      systemProgram: anchor.web3.SystemProgram.programId,
      tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
    })
    .signers([payer.payer])
    .rpc();

    console.log("Success!");
    console.log(`   Tx Signature: ${sx}`);
  });

  /*

  it("Transfer some tokens to another wallet!", async () => {

    const fromAssociatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: payer.publicKey,
    });
    const toAssociatedTokenAccountAddress = await anchor.utils.token.associatedAddress({
      mint: bABTokenPubkey,
      owner: recipientWallet.publicKey,
    });

    const sx = await program.methods.transferTokens(
      new anchor.BN(150 * MINT_DECIMALS)
    )
      .accounts({
        mintAccount: bABTokenPubkey,
        fromAssociatedTokenAccount: fromAssociatedTokenAccountAddress,
        owner: payer.publicKey,
        toAssociatedTokenAccount: toAssociatedTokenAccountAddress,
        recipient: recipientWallet.publicKey,
        payer: payer.publicKey,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
      })
      .signers([payer.payer])
      .rpc();

    console.log("Success!");
        console.log(`   Mint Address: ${bABTokenPubkey}`);
        console.log(`   Tx Signature: ${sx}`);
  });
  */




  
});
