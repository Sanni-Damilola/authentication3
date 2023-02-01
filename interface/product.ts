import { Document } from "mongoose";

export interface iProduct extends Document {
  name: string;
  price: number;
  category: string;
  rating: number;
  productImage: string;
}
