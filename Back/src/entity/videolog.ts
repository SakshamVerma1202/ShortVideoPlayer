import * as mongoose from "mongoose";

export interface Videolog extends mongoose.Document {
  uploader_eMail: string;
  videoName: string;
  type: string;
  category: String;
  rating: number;
  description: string,
  thumbnail: string;
}

const videologSchema = new mongoose.Schema({
  uploader_eMail: String,
  videoName: {
    type: String,
    required: true
  },
  type: String,
  category: String,
  rating: { 
    default: 0, 
    type: Number
  },
  description: String,
  thumbnail: String,
}, { timestamps: true });

const videologModel = mongoose.model<Videolog & mongoose.Document>('Videolog', videologSchema);
export default videologModel;

export interface Category {
  categoryId: number,
  categoryName: string
}