use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct WalletDetails {
    // Number of presales (opened and closed)
    pub next_presale_identifier: u8,
    // Bump used when creating the PDA
    pub bump: u8
}