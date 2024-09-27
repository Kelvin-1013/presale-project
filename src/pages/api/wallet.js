// pages/api/wallet.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('your-database-name'); // Replace with your database name

  if (req.method === 'POST') {
    const { walletPublicKey, registeredTime, visitNumber } = req.body;
    const newWallet = { walletPublicKey, registeredTime, visitNumber };
    
    const result = await db.collection('wallet').insertOne(newWallet);
    res.status(201).json(result.ops[0]);
  } else if (req.method === 'GET') {
    const wallets = await db.collection('wallet').find({}).toArray();
    res.json(wallets);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}