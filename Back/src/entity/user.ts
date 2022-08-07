import * as mongoose from "mongoose";

export interface User extends mongoose.Document {
  user_Name: string;
  user_mobile: number;
  user_eMail: string;
  password: string;
  age: number;
}

const userSchema = new mongoose.Schema({
  user_Name: {
    type: String,
    required: true
  },
  user_mobile: {
    type: Number,
    required: true
  },
  user_eMail: String,
  password: String,
  age: Number,
}, { timestamps: true });

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);
export default userModel;
