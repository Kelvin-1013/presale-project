use anchor_lang::prelude::*;

declare_id!("BZYJCGmY42ivwqP1sYZuFuCbownEMsmjDSu1VkW5uiTZ");

#[program]
pub mod presale {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
