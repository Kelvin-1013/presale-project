use anchor_lang::prelude::*;

use crate::state::WalletDetails;
use crate::constants::WALLET_SEED;

// Initialize a wallet_details PDA for your wallet
pub fn initialize_wallet(ctx: Context<InitializeWallet>) -> Result<()> {

    let wallet = &mut ctx.accounts.wallet_details;

    // Number of presales for a wallet will always be zero when initializing
    wallet.next_presale_identifier = 0;
    
    wallet.bump = *ctx.bumps.get("wallet_details").unwrap();
    
    msg!("Initialized your wallet");

    Ok(())
}

#[derive(Accounts)]
#[instruction()]
pub struct InitializeWallet<'info> {
    
    // Initialize the wallet_detils account
    #[account(
        init,
        payer = authority,
        space = 8 + std::mem::size_of::<WalletDetails>(),
        seeds = [WALLET_SEED, authority.key().as_ref()],
        bump
    )]
    pub wallet_details: Box<Account<'info, WalletDetails>>,
    
    // Set the authority to the transaction signer
    #[account(mut)]
    pub authority: Signer<'info>,
    
    // Must be included when initializing an account
    pub system_program: Program<'info, System>,
}