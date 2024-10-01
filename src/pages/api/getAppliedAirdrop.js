import connect from '../../lib/mongodb'; // Ensure you import the connect function

export default async function handler(req,res) {
  let client;

  try {
    client = await connect(); // Get the connected client
    const db = client.db('meme'); // Replace with your database name

    if(req.method === 'GET') {
      try {
        const wallets = db.collection('airdrop');
        const activeWallets = await wallets.find({activity: 1}).toArray();

        return res.status(200).json({wallets: activeWallets});
      } catch(getError) {
        console.error('Error getting wallets:',getError);
        return res.status(500).json({error: 'Failed to get wallets'});
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