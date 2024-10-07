// lib/airdrop.js
const connect = require('./mongodb');

// export async function applyAirdrop(publicKey) {
async function applyAirdrop(publicKey) {
  if(!publicKey) {
    throw new Error('Public key is required');
  }

  const client = await connect(); // Use the connect function
  const database = client.db('airdrop');
  const wallets = database.collection('wallets');

  // Save the public key to MongoDB
  const result = await wallets.insertOne({publicKey});
  return result.insertedId;
}

// applyAirdrop('7aQWVF47Sz8r33mCB8PuMToosps4MAexZRWToKBnZVX1');