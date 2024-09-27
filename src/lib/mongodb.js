// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ensure this is set in your .env.local
let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
