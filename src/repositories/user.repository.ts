import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function findUserByUsername(username: string) {
  await connectDB();
  return User.findOne({ username }).select("+password");
}

export async function updateLastLogin(userId: string) {
  await connectDB();
  return User.updateOne(
    { _id: userId },
    { $set: { last_login_at: new Date() } }
  );
}
