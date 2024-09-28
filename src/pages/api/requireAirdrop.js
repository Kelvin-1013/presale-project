// pages/api/wallet.js
import connect from '../../lib/mongodb'; // Ensure you import the connect function

export default async function handler(req,res) {
  let client;

  try {
    client = await connect(); // Get the connected client
    const db = client.db('airdrop'); // Replace with your database name

    if(req.method === 'POST') {
      const {publicKey} = req.body;

      if(!publicKey) {
        return res.status(400).json({error: 'Public key is required'});
      }

      try {
        // Insert the public key into the wallets collection
        const wallets = db.collection('wallets');
        const result = await wallets.insertOne({publicKey});

        // Respond with the inserted ID
        return res.status(201).json({id: result.insertedId});
      } catch(insertError) {
        console.error('Error inserting public key:',insertError);
        return res.status(500).json({error: 'Failed to register public key'});
      }
    } else {
      res.setHeader('Allow',['GET','POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch(connectionError) {
    console.error('Error connecting to MongoDB:',connectionError);
    return res.status(500).json({error: 'Database connection failed'});
  } finally {
    // Close the client connection if it was established
    if(client) {
      await client.close();
    }
  }
}
