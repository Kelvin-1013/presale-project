use anchor_lang::prelude::*;

pub mod constants;
pub mod errors;
pub mod state;
pub mod instructions;

use instructions::*;

declare_id!("8k8wGkeGBRkHbniT7PYpaS9zPC5jDhVbpG6jx9k2u9AG");

#[program]
pub mod token_presale {
    use super::*;

    pub fn initialize_wallet(
        ctx: Context<InitializeWallet>
    ) -> Result<()> {
        
        initialize_wallet::initialize_wallet(ctx)

    }

    pub fn create_presale(
        ctx: Context<CreatePresale>,
        token_mint_address: Pubkey,
        quote_token_mint_address: Pubkey,
        token_amount: u64,
        max_token_amount_per_address: u64,
        price_per_token: u64
    ) -> Result<()> {
        
        create_presale::create_presale(
            ctx,
            token_mint_address,
            quote_token_mint_address,
            token_amount,
            max_token_amount_per_address,
            price_per_token
        )

    }

    pub fn edit_presale(
        ctx: Context<EditPresale>,
        presale_identifier: u8,
        token_mint_address: Pubkey,
        quote_token_mint_address: Pubkey,
        token_amount: u64,
        max_token_amount_per_address: u64,
        price_per_token: u64
    ) -> Result<()> {
        
        edit_presale::edit_presale(
            ctx,
            presale_identifier,
            token_mint_address,
            quote_token_mint_address,
            token_amount,
            max_token_amount_per_address,
            price_per_token
        )

    }

    pub fn create_token(
        ctx: Context<CreateToken>, 
        token_title: String, 
        token_symbol: String, 
        token_uri: String,
    ) -> Result<()> {

        create_token::create_token(
            ctx, 
            token_title, 
            token_symbol, 
            token_uri,
        )
    }

    pub fn mint_to(
        ctx: Context<MintTo>, 
        quantity: u64,
    ) -> Result<()> {

        mint_to::mint_to(
            ctx, 
            quantity,
        )
    }

    pub fn transfer_tokens(
        ctx: Context<TransferTokens>, 
        quantity: u64,
    ) -> Result<()> {

        transfer_tokens::transfer_tokens(
            ctx, 
            quantity,
        )
    }

    pub fn deposit_presale_tokens(
        ctx: Context<DepositPresaleTokens>, 
        quantity: u64,
        presale_identifier: u8,
    ) -> Result<()> {

        deposit_presale_tokens::deposit_presale_tokens(
            ctx, 
            quantity,
            presale_identifier,
        )
    }

    pub fn withdraw_presale_tokens(
        ctx: Context<WithdrawPresaleTokens>, 
        quantity: u64,
        presale_identifier: u8,
    ) -> Result<()> {

        withdraw_presale_tokens::withdraw_presale_tokens(
            ctx, 
            quantity,
            presale_identifier,
        )
    }

    pub fn buy_presale_tokens(
        ctx: Context<BuyPresaleTokens>, 
        quantity: u64,
        presale_identifier: u8,
        presale_authority: Pubkey,
    ) -> Result<()> {

        buy_presale_tokens::buy_presale_tokens(
            ctx, 
            quantity,
            presale_identifier,
            presale_authority,
        )
    }

    pub fn start_presale(
        ctx: Context<StartPresale>, 
        presale_identifier: u8,
    ) -> Result<()> {

        start_presale::start_presale(
            ctx, 
            presale_identifier,
        )
    }


}






