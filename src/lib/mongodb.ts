import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME as string;
if (!MONGODB_URI) throw new Error("⚠️ Missing MONGODB_URI in .env");

interface MongooseConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// @ts-expect-error test
let cached: MongooseConnection = global.mongoose;

if (!cached) {
  // @ts-expect-error test
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: MONGODB_DATABASE_NAME,
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
