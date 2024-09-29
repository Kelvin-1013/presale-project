// lib/mongodb.js
const {MongoClient,ServerApiVersion} = require('mongodb');

// Use your MongoDB connection string here
const uri = "mongodb+srv://kelvin-1013:everysecond1013@cluster0.z54oc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect the client to the server
async function connect() {
  try {
    // Check if the client is already connected
    if(!client.topology || !client.topology.isConnected()) {
      await client.connect();
      console.log("Connected to MongoDB!");
    }
    return client;
  } catch(error) {
    console.error("Error connecting to MongoDB:",error);
    throw new Error("Failed to connect to MongoDB"); // Rethrow the error for further handling if needed
  }
}

module.exports = connect;
