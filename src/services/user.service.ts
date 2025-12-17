import { connectDB } from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { CreateUserDTO } from "@/validators/user.schema";
import { findUserByUsername } from "@/repositories/user.repository";

export async function loginService(username: string, password: string) {
  const user = await findUserByUsername(username);
  if (!user) {
    return {
      success: false,
      message: "Thông tin tài khoản hoặc mật khẩu không chính xác!",
    };
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      success: false,
      message: "Thông tin tài khoản hoặc mật khẩu không chính xác!",
    };
  }
  const token = jwt.sign(
    {
      userId: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
  return {
    success: true,
    data: {
      token,
      user: {
        id: user._id,
        username: user.username,
        fullname: user.fullname,
        phone: user.phone,
      },
    },
  };
}

export async function getUsers() {
  await connectDB();
  return await User.find().select("username phone").lean();
}

export async function createUser(data: CreateUserDTO) {
  // 🔐 Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    email: data.email,
    username: data.username,
    password: hashedPassword,
  });

  return {
    data: {
      id: user._id,
      email: user.email,
      username: user.username,
    },
  };
}
