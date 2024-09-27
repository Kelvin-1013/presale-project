// pages/api/email.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('your-database-name'); // Replace with your database name

  if (req.method === 'POST') {
    const { walletPublicKey, email, sendMessage, receiveMessage, friendsName } = req.body;
    const newEmail = { walletPublicKey, email, sendMessage, receiveMessage, friendsName };
    
    const result = await db.collection('email').insertOne(newEmail);
    res.status(201).json(result.ops[0]);
  } else if (req.method === 'GET') {
    const emails = await db.collection('email').find({}).toArray();
    res.json(emails);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
