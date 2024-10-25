use anchor_lang::prelude::*;

use crate::state::PresaleDetails;
use crate::constants::PRESALE_SEED;

// Edit the details for a presale
pub fn edit_presale(
    ctx: Context<EditPresale>,
    _presale_identifier: u8,
    token_mint_address: Pubkey,
    quote_token_mint_address: Pubkey,
    token_amount: u64,
    max_token_amount_per_address: u64,
    price_per_token: u64
) -> Result<()> {
    
    let presale = &mut ctx.accounts.presale_details;

    // Set the presale details to the parameters given
    presale.token_mint_address = token_mint_address;
    presale.quote_token_mint_address = quote_token_mint_address;
    presale.token_amount = token_amount;
    presale.max_token_amount_per_address = max_token_amount_per_address;
    presale.price_per_token = price_per_token;

    msg!(
        "Edited the presale details for token: {}",
        presale.token_mint_address
    );

    Ok(())
}

#[derive(Accounts)]
#[instruction(
    presale_identifier: u8,
    token_mint_address: Pubkey,
    quote_token_mint_address: Pubkey,
    token_amount: u64,
    max_token_amount_per_address: u64,
    price_per_token: u64
)]
pub struct EditPresale<'info> {
    
    #[account(
        mut,
        seeds = [PRESALE_SEED, authority.key().as_ref(), [presale_identifier].as_ref()],
        bump = presale_details.bump
    )]
    pub presale_details: Box<Account<'info, PresaleDetails>>,
    
    #[account(mut)]
    pub authority: Signer<'info>,

}