
import connect from '../../lib/mongodb'; // Ensure you import the connect function

export default async function handler(req,res) {
  let client;

  try {
    client = await connect(); // Get the connected client
    const db = client.db('meme'); // Replace with your database name

    if(req.method === 'POST') {
      const {publicKey,currentTime} = req.body;

      if(!publicKey) {
        return res.status(400).json({error: 'Public key is required'});
      }

      try {
        // Check if the wallet already exists
        const wallets = db.collection('wallets');
        const existingWallet = await wallets.findOne({publicKey});

        if(existingWallet) {
          // If wallet exists, increment the visit number and update last visit time
          const updatedWallet = await wallets.updateOne(
            {publicKey},
            {
              $inc: {visitNumber: 1},
              $set: {lastVisit: currentTime}
            }
          );

          return res.status(200).json({message: 'Visit number updated',wallet: existingWallet});
        } else {
          // If wallet does not exist, create a new wallet entry
          const result = await wallets.insertOne({
            publicKey,
            visitNumber: 1,
            createdTime: currentTime,
            lastVisit: currentTime
          });

          // Respond with the inserted ID
          return res.status(201).json({id: result.insertedId,message: 'Wallet registered'});
        }
      } catch(insertError) {
        console.error('Error processing wallet:',insertError);
        return res.status(500).json({error: 'Failed to process wallet'});
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
