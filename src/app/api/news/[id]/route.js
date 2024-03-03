import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const config = {
  MongoDbUserName: process.env.MONGODB_USER_NAME,
  MongoDbPassword: process.env.MONGODB_PASSWORD,
  MongoDbUrl: process.env.MONGODB_URL,
  postSummaryUrl: process.env.POST_SUMMARY_URL,
  xApiKey: process.env.X_API_KEY,
};

export const PATCH = async (req, { params }) => {
  const id = params.id
  const uri = `mongodb+srv://${config.MongoDbUserName}:${config.MongoDbPassword}@${config.MongoDbUrl}/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const collection = client.db('postToMongoDbLambda').collection('posts');
    const post = await collection.findOne({ _id: new ObjectId(id) });

    if (!post) {
      return new Response("Post not found", { status: 500 })
    }
      
    if (!post.result) {
      const headerConfig = {
        headers: {
          'X-API-KEY': config.xApiKey
        }
      };
      let response;
      try {
        response = await axios.post(config.postSummaryUrl, { url: post.url }, headerConfig);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
      const summary = response.data.body
      const summaryResult = JSON.parse(summary)
      await collection.updateOne({ _id: new ObjectId(id) }, { $set: summaryResult });
      return new Response(JSON.stringify(summaryResult), { status: 200 })
    }
    return new Response(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch the post", { status: 500 })
  } finally {
    await client.close();
  }
} 
