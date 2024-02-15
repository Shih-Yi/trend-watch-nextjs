import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const config = {
  MongoDbUserName: process.env.MONGODB_USER_NAME,
  MongoDbPassword: process.env.MONGODB_PASSWORD,
  MongoDbUrl: process.env.MONGODB_URL,
};

export const GET = async (req, res) => {
  const uri = `mongodb+srv://${config.MongoDbUserName}:${config.MongoDbPassword}@${config.MongoDbUrl}/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const collection = client.db('postToMongoDbLambda').collection('posts');
    const cursor = collection.find({})
    const result = await cursor.toArray();

    await client.close();
    
    return new Response(JSON.stringify(result), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all posts", { status: 500 })
  }
} 
