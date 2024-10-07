use {
    anchor_lang::prelude::*,
    anchor_spl::{
        token,
        associated_token,
    },
};

use crate::state::PresaleDetails;
use crate::constants::PRESALE_SEED;

pub fn deposit_presale_tokens(
    ctx: Context<DepositPresaleTokens>, 
    quantity: u64,
    presale_identifier: u8,
) -> Result<()> {

    msg!("Depositing presale tokens to presale {}...", presale_identifier);
    msg!("Mint: {}", &ctx.accounts.mint_account.to_account_info().key());   
    msg!("From Token Address: {}", &ctx.accounts.from_associated_token_account.key());     
    msg!("To Token Address: {}", &ctx.accounts.to_associated_token_account.key());     
    token::transfer(
        CpiContext::new(
            ctx.accounts.token_program.to_account_info(),
            token::Transfer {
                from: ctx.accounts.from_associated_token_account.to_account_info(),
                to: ctx.accounts.to_associated_token_account.to_account_info(),
                authority: ctx.accounts.from_authority.to_account_info(),
            },
        ),
        quantity,
    )?;

    msg!("Tokens deposited successfully.");

    Ok(())
}


#[derive(Accounts)]
#[instruction(quantity: u64, presale_identifier: u8)]
pub struct DepositPresaleTokens<'info> {
    #[account(mut)]
    pub mint_account: Account<'info, token::Mint>,
    #[account(
        init_if_needed,
        payer = payer,
        associated_token::mint = mint_account,
        associated_token::authority = from_authority,
    )]
    pub from_associated_token_account: Account<'info, token::TokenAccount>,
    #[account(constraint = payer.key() == from_authority.key())]
    pub from_authority: SystemAccount<'info>,
    #[account(
        init_if_needed,
        payer = payer,
        associated_token::mint = mint_account,
        associated_token::authority = presale_details_pda,
    )]
    pub to_associated_token_account: Account<'info, token::TokenAccount>,
    #[account(
        mut,
        seeds = [PRESALE_SEED, from_authority.key().as_ref(), [presale_identifier].as_ref()],
        bump = presale_details_pda.bump
    )]
    pub presale_details_pda: Box<Account<'info, PresaleDetails>>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, token::Token>,
    pub associated_token_program: Program<'info, associated_token::AssociatedToken>,
}