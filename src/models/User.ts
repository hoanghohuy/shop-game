import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  fullname: string;
  reset_code: string;
  email: string;
  phone: string;
  role: number;
  last_login_at: string;
  isActive: boolean;
}

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    reset_code: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: Number, required: true, default: 1 },
    last_login_at: { type: Date, required: true, default: Date.now },
    active: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

// Fix lỗi model bị compile nhiều lần
export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
