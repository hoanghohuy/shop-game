import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  reset_code: string;
  email: string;
  role: number;
  last_login_at: string;
  isActive: boolean;
}

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
      match: /^[a-z0-9]+$/,
    },
    password: { type: String, required: true, select: false },
    reset_code: { type: String, required: false },
    email: { type: String, required: true },
    role: { type: Number, required: true, default: 1 },
    last_login_at: { type: Date, required: true, default: Date.now },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

// Fix lỗi model bị compile nhiều lần
export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
