use anchor_lang::prelude::*;

use crate::state::PresaleInfo;
use crate::constants::PRESALE_SEED;

// Edit the details for a presale
pub fn create_presale(
    ctx: Context<CreatePresale>,
    token_mint_address: Pubkey,
    price_per_token: u64,
    max_token_amount_per_address: u64,
    min_token_amount_per_address: u64,
    softcap_amount: u64,
    hardcap_amount: u64,
) -> Result<()> {

    let presale_info = &mut ctx.accounts.presale_info;
    let wallet = &mut ctx.accounts.wallet_details;
    let authority = &ctx.accounts.authority;

    presale_info.token_mint_address = token_mint_address;
    presale_info.softcap_amount = softcap_amount;
    presale_info.hardcap_amount = hardcap_amount;
    presale_info.deposit_token_amount = 0;
    presale_info.sold_token_amount = 0;
    presale_info.start_time = 0;
    presale_info.end_time = 1;
    presale_info.max_token_amount_per_address = max_token_amount_per_address;
    presale_info.min_token_amount_per_address = min_token_amount_per_address;
    presale_info.price_per_token = price_per_token;
    presale_info.is_live = false;
    presale.authority = ctx.accounts.authority.key();
    presale_info.is_soft_capped = false;
    presale_info.is_hard_capped = false;
    wallet.next_presale_identifier = wallet.next_presale_identifier.checked_add(1).unwrap();
    msg!(
        "Presale has created for token: {}",
        presale_info.token_mint_address
    );

    Ok(())
}

#[derive(Accounts)]
#[instruction(
    token_mint_address: Pubkey,
    softcap_amount: u64,
    hardcap_amount: u64,
    max_token_amount_per_address: u64,
    price_per_token: u64,
    start_time: u64,
    end_time: u64,
    authority: Signer<'info>,
)]
pub struct CreatePresale<'info> {
    #[account(
        init_if_needed,
        seeds = [PRESALE_SEED],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<PresaleInfo>(),
    )]
    pub presale_info: Box<Account<'info, PresaleInfo>>,

    #[account(
        init_if_needed,
        seeds = [WALLET_SEED, authority.key().as_ref()],
        bump = wallet_details.bump
    )]
    pub wallet_details: Box<Account<'info, WalletDetails>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}