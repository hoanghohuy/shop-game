import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { LoginDTO } from "@/validators/auth.schema";
import {
  findUserByUsername,
  updateLastLogin,
} from "@/repositories/user.repository";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = "1d";

export async function loginUser(data: LoginDTO) {
  const user = await findUserByUsername(data.username);

  if (!user || !user.active) {
    throw new Error("Username hoặc password không đúng");
  }

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    throw new Error("Username hoặc password không đúng");
  }

  const payload = {
    sub: user._id.toString(),
    username: user.username,
    role: user.role,
  };

  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  // ✅ update riêng
  await updateLastLogin(user._id.toString());

  return {
    data: {
      accessToken,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    },
  };
}
