import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
console.log(process.env.MONGODB_URL);
const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("conceptual-8");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
