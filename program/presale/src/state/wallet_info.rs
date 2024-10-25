use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct UserInfo {
    // presale number
    pub next_presale_identifier: u64,
    //suming sold token amount cross presale stages
    pub sold_token_amount: u64,
}