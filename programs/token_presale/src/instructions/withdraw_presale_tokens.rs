use {
    anchor_lang::prelude::*,
    anchor_spl::{
        token,
        associated_token,
    },
};

use crate::state::PresaleDetails;
use crate::constants::PRESALE_SEED;


pub fn withdraw_presale_tokens(
    ctx: Context<WithdrawPresaleTokens>, 
    quantity: u64,
    presale_identifier: u8,
) -> Result<()> {

    let bump = &[ctx.accounts.presale_details_pda.bump];

    msg!("Withdrawing presale tokens from presale {}...", &presale_identifier);
    msg!("Mint: {}", &ctx.accounts.mint_account.to_account_info().key());   
    msg!("From Token Address: {}", &ctx.accounts.presale_associated_token_account.key());     
    msg!("To Token Address: {}", &ctx.accounts.to_associated_token_account.key());     
    token::transfer(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            token::Transfer {
                from: ctx.accounts.presale_associated_token_account.to_account_info(),
                to: ctx.accounts.to_associated_token_account.to_account_info(),
                authority: ctx.accounts.presale_details_pda.to_account_info(),
            },
            &[&[b"PRESALE_SEED", ctx.accounts.authority.key().as_ref(), &[presale_identifier], bump][..]],
        ),
        quantity,
    )?;

    msg!("Tokens withdrawn successfully.");

    Ok(())
}


#[derive(Accounts)]
#[instruction(quantity: u64, presale_identifier: u8)]
pub struct WithdrawPresaleTokens<'info> {

    #[account(
        mut,
        seeds = [PRESALE_SEED, authority.key().as_ref(), [presale_identifier].as_ref()],
        bump = presale_details_pda.bump
    )]
    pub presale_details_pda: Box<Account<'info, PresaleDetails>>,
    #[account(mut)]
    pub mint_account: Account<'info, token::Mint>,
    #[account(
        mut,
        associated_token::mint = mint_account,
        associated_token::authority = presale_details_pda,
    )]
    pub presale_associated_token_account: Account<'info, token::TokenAccount>,
    #[account(
        init_if_needed,
        payer = authority,
        associated_token::mint = mint_account,
        associated_token::authority = recipient,
    )]
    pub to_associated_token_account: Account<'info, token::TokenAccount>,
    pub recipient: SystemAccount<'info>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, token::Token>,
    pub associated_token_program: Program<'info, associated_token::AssociatedToken>,
}