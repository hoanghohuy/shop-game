import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function findUserByUsername(username: string) {
  await connectDB();
  return User.findOne({ username });
}
