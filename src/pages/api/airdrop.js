// pages/api/airdrop.js
import { applyAirdrop } from '../../lib/airdrop';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { publicKey } = req.body;
    try {
      const id = await applyAirdrop(publicKey);
      return res.status(201).json({ message: 'Airdrop applied', id });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
