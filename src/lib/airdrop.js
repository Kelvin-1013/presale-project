// lib/airdrop.js
import clientPromise from './mongodb';

export async function applyAirdrop(publicKey) {
  if (!publicKey) {
    throw new Error('Public key is required');
  }

  const client = await clientPromise;
  const database = client.db('airdrop');
  const wallets = database.collection('wallets');

  // Save the public key to MongoDB
  const result = await wallets.insertOne({ publicKey });
  return result.insertedId;
}
