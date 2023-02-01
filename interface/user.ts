import { Document, Schema } from "mongoose";

export interface iUser extends Document {
  name: string;
  email: string;
  passowrd: string;
  confirmPassword: string;
  cart: {
    items: {
      products: Schema.Types.ObjectId;
    };
    quanity: number;
  }[];
}
